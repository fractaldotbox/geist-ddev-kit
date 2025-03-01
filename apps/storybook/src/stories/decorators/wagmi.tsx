import { BY_USER, getRandomAccount } from "@geist/domain/user.fixture";
import { WAGMI_CONFIG } from "@geist/ui-react/lib/utils/wagmi-config";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { Hex } from "viem";
import { generatePrivateKey, privateKeyToAccount } from "viem/accounts";
import { WagmiProvider, useAccount, useConnect, useWalletClient } from "wagmi";

// TODO fix Story type

const QueryClientProviderWrapper = ({
	children,
}: { children: React.ReactNode }) => {
	return (
		<QueryClientProvider client={new QueryClient()}>
			<div>{children}</div>
		</QueryClientProvider>
	);
};

export const withQueryClientProvider = () => {
	return (Story: any) => (
		<div>
			<QueryClientProviderWrapper>
				<Story />
			</QueryClientProviderWrapper>
		</div>
	);
};

export const withMockAccount = (isStable = true) => {
	return (Story: any, context: any) => {
		// Not possible to hoist a private key based account. Inject at action
		// https://wagmi.sh/react/guides/viem#private-key-mnemonic-accounts
		const privateKey = isStable
			? BY_USER.user.privateKey
			: (getRandomAccount().privateKey as Hex);
		const account = privateKeyToAccount(privateKey);
		return (
			<>
				<Story args={{ account, privateKey, ...(context.args || {}) }} />
			</>
		);
	};
};

export const withWagmiProvider = () => {
	return (Story: any) => (
		<div>
			<QueryClientProviderWrapper>
				<WagmiProvider config={WAGMI_CONFIG}>
					<Story />
				</WagmiProvider>
			</QueryClientProviderWrapper>
		</div>
	);
};
