import { Address, Chain, erc20Abi } from "viem";
import { mainnet } from "viem/chains";
import { TokenChipWithInfo } from "./TokenChipWithInfo";
import { useTokenInfo } from "@/lib/token/token";

export type TokenChipProps = {
    className?: string;
    amount: bigint;
    chain: Chain;
    address: Address;
};


enum ChainDataProvider {
    // wagmi rpc
    Rpc = 'rpc',
    BlockscoutApi = 'blockscout'
}


export const TokenChip = ({
    address,
    amount,
    chain,
    className
}: TokenChipProps) => {

    const { data } = useTokenInfo({
        address,
        chain: mainnet
    });


    console.log('data', data, mainnet);

    if (!data) {
        return null;
    }


    return (
        <TokenChipWithInfo
            amount={data.amount}
            imageUrl={data.imageUrl}
            name={data.name}
            symbol={data.symbol}
            {...data}

        />
    );
};

