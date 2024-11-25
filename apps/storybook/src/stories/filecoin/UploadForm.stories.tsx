import type { Meta, StoryObj } from "@storybook/react";

import { toast } from "@/hooks/use-toast";
import { uploadFileObject, uploadFileWithFormData } from "@/lib/filecoin/akave/client";
import { getGatewayUrlWithCid } from "@/lib/filecoin/gateway";
import { uploadText, uploadFile as uploadFileLighthouse } from "@/lib/filecoin/lighthouse/isomorphic";
import { withToaster } from "../decorators/toaster";
import { FileParams, UploadForm } from "./UploadForm";

const meta = {
	title: "Filecoin/UploadForm",
	component: UploadForm,
	argTypes: {},
	args: {},
	decorators: [withToaster()],
} satisfies Meta<typeof UploadForm>;

export default meta;
type Story = StoryObj<typeof meta>;

const LIGHTHOUSE_API_KEY = import.meta.env.VITE_LIGHTHOUSE_API_KEY!;
const AKAVE_ENDPOINT_URL = import.meta.env.VITE_AKAVE_ENDPOINT_URL!;

const createToast = ({ cid, name }: { cid: string; name: string }) => {
	const url = getGatewayUrlWithCid(cid);

	toast({
		title: "File uploaded",
		description: (
			<div>
				File uploaded with {name} <br />
				CID:<a href={url}>${cid}</a>
			</div>
		),
	});
};



export const TextLighthouse: Story = {
	args: {
		isText: true,
		uploadFile: async ({ file }: FileParams) => {
			const response = await uploadText(file, LIGHTHOUSE_API_KEY!);
			const { name, cid } = response;
			createToast({ cid, name });
			return cid;
		}
	},
};


export const TextAkave: Story = {
	args: {
		isText: true,
		uploadFile: async ({ file }: FileParams) => {
			const response = await uploadFileObject({
				akaveEndpointUrl: AKAVE_ENDPOINT_URL,
				bucketName: "test-bucket",
				fileName: "test.txt",
				file,
			});
			const { Name: name, RootCID: cid } = response;

			createToast({ cid, name });
			return cid;
		}
	},
};

export const FileLighthouse: Story = {
	args: {
		isText: false,
		uploadFile: async ({ file }: FileParams) => {
			const response = await uploadFileLighthouse(file, LIGHTHOUSE_API_KEY!);
			const { name, cid } = response;
			createToast({ cid, name });
			return cid;
		}
	},
};


export const FileAkave: Story = {
	args: {
		isText: false,
		uploadFile: async ({ file }: FileParams) => {
			const response = await uploadFileWithFormData({
				akaveEndpointUrl: AKAVE_ENDPOINT_URL,
				bucketName: "test-bucket",
				fileName: "test.txt",
				file,
			});
			const { Name: name, RootCID: cid } = response;

			createToast({ cid, name });
			return cid;
		}
	},
};