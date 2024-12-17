import { Meta, StoryObj } from "@storybook/react";
import {
	PrivyLogin,
	PrivyLoginProvider,
} from "@repo/ui-react/components/privy/privy-login";

interface PrivyLoginProps {
	appId: string;
}

function PrivyLoginStories({ appId }: PrivyLoginProps) {
	return (
		<PrivyLoginProvider appId={appId}>
			<PrivyLogin />
		</PrivyLoginProvider>
	);
}

const meta = {
	title: "Privy/Login",
	component: PrivyLoginStories,
	argTypes: {
		appId: {
			control: "text",
			name: "Privy App ID",
		},
	},
} satisfies Meta<typeof PrivyLoginStories>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		appId: "cm2vi1gua0aukbq4p69w3rphl",
	},
};
