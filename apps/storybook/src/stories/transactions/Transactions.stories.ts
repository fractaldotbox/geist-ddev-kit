import type { Meta, StoryObj } from "@storybook/react";
import { withWagmiProvider } from "../decorators/wagmi";
import { TRANSACTION } from "../fixture";
import { TransactionCardWithHash } from "./TransactionCard";

const meta = {
	title: "Transactions/TransactionCardWithHash",
	component: TransactionCardWithHash,
	args: {},
} satisfies Meta<typeof TransactionCardWithHash>;

export default meta;
type Story = StoryObj<typeof meta>;

export const VitalikDepositTransaction: Story = {
	args: {
		txnHash: TRANSACTION.VITALIK_DEPOSIT.txnHash,
	},
	decorators: [withWagmiProvider()],
};

export const VitalikTransferTransaction: Story = {
	args: {
		txnHash: TRANSACTION.VITALIK_TRANSFER.txnHash,
	},
	decorators: [withWagmiProvider()],
};
