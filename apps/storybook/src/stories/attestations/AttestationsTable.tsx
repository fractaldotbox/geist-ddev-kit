import { useGetAttestations } from "@/lib/eas/get-attestations";
import { Address, fromBlobs } from "viem";
import { useChainId } from "wagmi";
import { Progress } from "@/components/ui/progress"
import { ColumnDef } from "@tanstack/react-table"
import { DataTable } from "@/components/ui/data-table";
import { AttestationMeta } from "./attestations";
import { useMemo } from "react";
import { asAttestationMeta } from "./attestations";
import { Badge } from "@/components/ui/badge";
import { getEasscanSchemaUrl } from "@/lib/eas/util";
import { mainnet } from "viem/chains";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.




// customize column with url getEasscanSchemaUrl()

export const columns: ColumnDef<AttestationMeta>[] = [
    {
        accessorKey: "id",
        header: "UID",
    },
    {
        accessorKey: "schemaId",
        header: "Schema",
        cell: ({ row }) => {
            const schemaId = row.getValue<string>("schemaId");
            const schemaIndex = row.original.schemaIndex;

            return (
                <a href={getEasscanSchemaUrl(mainnet, schemaId)} target="_blank">
                    <Badge>#{schemaIndex}</Badge>
                </a>
            )
        },
    },
    {
        accessorKey: "from",
        header: "From",
    },

    {
        accessorKey: "to",
        header: "To",
    },
    {
        accessorKey: "type",
        header: "Type",
    },
    {
        accessorKey: "ageDisplayed",
        header: "Age",
    }
]


// https://easscan.org/
export const AttestationsTable = ({ address }: {
    address: Address
}) => {


    const chainId = useChainId();
    const { data, isLoading } = useGetAttestations({
        chainId,
        address
    });


    const records = useMemo(() => {
        if (!data?.data) {
            return [];
        }
        return data?.data.attestations?.map(asAttestationMeta)
    }, [data])


    return (
        <div>
            <DataTable columns={columns} data={records} />
        </div>
    )
}