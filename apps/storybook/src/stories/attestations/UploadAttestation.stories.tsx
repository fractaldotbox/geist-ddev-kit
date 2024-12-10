import type { Meta, StoryObj } from "@storybook/react";
import { withWagmiProvider } from "../decorators/wagmi";
import { UploadAttestation } from "./UploadAttestation";
import { Button } from "@/components/ui/button";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { getShortAddress } from "@/utils/address";
import { injected, metaMask } from "wagmi/connectors";

const meta = {
  title: "Attestations/UploadAttestation",
  component: UploadAttestation,
  parameters: {
    layout: "centered",
  },
  decorators: [withWagmiProvider()],
} satisfies Meta<typeof UploadAttestation>;

export default meta;
type Story = StoryObj<typeof meta>;

function ConnectButton() {
  const { connect } = useConnect();
  const { disconnect } = useDisconnect();
  const { address, isConnected } = useAccount();

  if (isConnected && address)
    return (
      <Button variant="outline" onClick={() => disconnect()}>
        {getShortAddress(address)}
      </Button>
    );

  return (
    <Button
      variant="outline"
      onClick={() => connect({ connector: injected() })}
    >
      Connect Wallet
    </Button>
  );
}

export const UploadAttestationWithId: Story = {
  args: {
    uid: "0xbd8ffc232319335da170af2f0d92d50db48224cb3ca643a41ce672ecaa26226a",
  },
  render: ({ uid }) => (
    <>
      <ConnectButton />
      <UploadAttestation uid={uid} />
    </>
  ),
};

export const UploadAttestationWithPayload: Story = {
  args: {
    payload: { attestation: "some_data_from_your_attestation" },
  },
  render: ({ payload }) => (
    <>
      <ConnectButton />
      <UploadAttestation payload={payload} />
    </>
  ),
};
