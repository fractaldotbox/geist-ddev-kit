import { gql } from "@geist/graphql";
import { useQuery } from "@tanstack/react-query";
import { rawRequest, request } from "graphql-request";
import { Address, Hex } from "viem";
import { getEasscanEndpoint } from "#lib/eas/easscan";
// import { AllAttestationsByQuery } from 'node_modules/@geist/graphql/src/graphql/graphql';

type AllAttestationsByQuery = any;

const allAttestationsByQuery = gql(`
  query allAttestationsBy(
    $where: AttestationWhereInput
  ) {
    attestations(where: $where) {
      id
      txid
      recipient
      schema {
        index
        schemaNames {
          name
        }
      }
      time
      isOffchain
      schemaId
      attester
    }
  }
`);

export type AttestationQueryResult = AllAttestationsByQuery["attestations"][0];

// TODO type safety
export const useGetAttestations = ({
	chainId,
	address,
}: {
	chainId: number;
	address: Address;
}) => {
	// https://github.com/dotansimha/graphql-code-generator/blob/master/examples/react/tanstack-react-query/src/use-graphql.ts

	const results = useQuery({
		queryKey: ["attestations", chainId, address],
		queryFn: async () =>
			rawRequest<AllAttestationsByQuery>(
				`${getEasscanEndpoint(chainId)}/graphql`,
				allAttestationsByQuery.toString(),
				{
					where: {
						attester: {
							in: [address],
						},
					},
				},
			),
	});

	return results;
};
