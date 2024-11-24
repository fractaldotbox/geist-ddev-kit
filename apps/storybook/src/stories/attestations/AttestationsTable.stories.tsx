import { faker } from "@faker-js/faker";
import type { Meta, StoryObj } from "@storybook/react";
import { Address, Hex } from "viem";
import { withWagmiProvider } from "../decorators/wagmi";
import { BY_USER, getRandomAddress } from "../fixture";
import { AttestationsTable } from "./AttestationsTable";

const meta = {
	title: "Attestations/AttestationsTable",
	component: AttestationsTable,
	parameters: {
		layout: "centered",
	},
	args: {},
	decorators: [withWagmiProvider()],
} satisfies Meta<typeof AttestationsTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Exists: Story = {
	args: {
		address: BY_USER.easSampleAttester.address,
	},
};

export const None: Story = {
	args: {
		address: getRandomAddress(),
	},
};
