import { getEasscanEndpoint } from "#lib/eas/easscan.js";
import { gql } from "@geist/graphql";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery } from "@tanstack/react-query";
import { is } from "date-fns/locale";
import { rawRequest } from "graphql-request";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

type SchemaByQuery = any;

// function to get JSON from attestation (we cannot dynamically create zod schemas)
export const getZodSchemaFromSchemaString = (schemaString: string) => {
	const stringPairs = schemaString.split(",");
	const entries = stringPairs.map((pair) => pair.split(" "));
	const zodSchemaObject: any = {};

	for (const entry of entries) {
		const [type = "", name = ""] = entry;

		// process the type
		let zodSchemaType: any = z.string();
		if (type === "bool") {
			zodSchemaType = z.boolean();
		} else if (type.includes("uint")) {
			zodSchemaType = z.number();
		}

		// if we see array, we define as array schema
		if (type.includes("[]")) {
			zodSchemaType = zodSchemaType.array();
			console.log("array attached");
		}

		// attach to object
		zodSchemaObject[name] = zodSchemaType;
	}

	return z.object(zodSchemaObject);
};

const schemaByQuery = gql(`
	query schemaBy($where: SchemaWhereUniqueInput!) {
		schema(where: $where) {
			schemaString: schema
			index
			revocable
			creator
		}
	}
`);

// do we want to make it safe?
export function useEasSchemaForm({
	schemaString,
	schemaId,
	chainId = 1,
	isEnabled = true, // whether to use this hook or not
}: {
	schemaString?: string;
	schemaId?: string;
	isEnabled?: boolean;
	chainId?: number;
}) {
	if (!schemaString && !schemaId)
		throw new Error(
			"[useEasSchemaForm] at least one of schemaString and schemaId must be present",
		);

	const [schemaStringState, setSchemaStringState] = useState(schemaString);

	const schemaQueryResults = useQuery({
		queryKey: ["schemaBy", schemaId],
		queryFn: async () => {
			try {
				const { data } = await rawRequest<SchemaByQuery>(
					`${getEasscanEndpoint(chainId)}/graphql`,
					schemaByQuery.toString(),
					{
						where: {
							id: schemaId,
						},
					},
				);
				setSchemaStringState(data.data.schema.schemaString ?? undefined);
			} catch (e) {
				console.error(`[useEasSchemaForm] ` + e);
				setSchemaStringState(undefined);
			}
		},
		enabled: !!isEnabled && !!schemaId,
	});

	const formSchema = useMemo(() => {
		if (!!schemaStringState)
			return getZodSchemaFromSchemaString(schemaStringState);
		return z.object({});
	}, [schemaString]);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		disabled: !isEnabled || schemaQueryResults.isLoading,
	});

	const isLoading = schemaQueryResults.isLoading;

	// we return a react hook form instance
	return { form, formSchema, isLoading };
}
