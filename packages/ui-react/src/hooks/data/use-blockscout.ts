import type { TransactionMeta } from "@geist/domain/transaction/transaction";
import { useQuery } from "@tanstack/react-query";
import {
	type GetTxnByFilterQuery,
	asTransactionMeta,
	getTransaction,
	getTxnsByFilter,
} from "#lib/blockscout/api";

export const CACHE_KEY = "blockscout";

export const useGetTransaction = (txnHash: string) => {
	return useQuery<TransactionMeta>({
		queryKey: [`${CACHE_KEY}.transaction`, txnHash],
		queryFn: async () => {
			const results = await getTransaction(txnHash);
			return asTransactionMeta(results);
		},
	});
};

export const useGetTransactions = (query: GetTxnByFilterQuery) => {
	return useQuery<TransactionMeta[]>({
		queryKey: [`${CACHE_KEY}.transactions`, query],
		queryFn: async () => {
			const results = await getTxnsByFilter(query);
			// TODO: implement pagination with API calls
			if (!!results) return results.items;
			return [];
		},
	});
};
