import type { Address, Chain } from "viem";
import { asCaip19Id } from "./cross-chain";
import { asPriceValue } from "./price";
import type { TokenPriceEntry } from "./token-price-entry";

export type Token = {
	address?: Address;
	imageUrl?: string;
	decimals: number;
	name: string;
	symbol: string;
	type?: string;
};

export type TokenSelector = {
	chainId: number;
	address: string;
};

export const asTokenBalanceEntries = (tokenGroup, priceData) => {
	const entries = Object.entries(tokenGroup).map(
		([symbol, { meta, amount, tokenBalances = [] }]) => {
			const subEntries = tokenBalances.map(
				({ chainId, address, symbol, amount }) => {
					const tokenId = asCaip19Id({ chainId, address });
					const price = priceData.find(
						({ chainId, address }) =>
							asCaip19Id({ chainId, address }) === tokenId,
					)?.price;

					const decimals = 18;
					return {
						chainId,
						symbol,
						amount: BigInt(amount),
						price,
						value: asPriceValue(BigInt(amount), price, decimals),
					};
				},
			);

			return {
				symbol,
				amount,
				subEntries,
				value: subEntries.reduce(
					(acc: bigint, { value }: { value: bigint }) => acc + value,
					0n,
				),
			};
		},
	);

	return entries.flat();
};
