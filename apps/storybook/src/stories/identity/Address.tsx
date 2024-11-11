import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { Check, Copy } from "lucide-react";
import { useMemo, useState } from "react";
import { Hex, getAddress } from "viem";
import { normalize } from "viem/ens";
import { useEnsAddress } from "wagmi";
import { getShortAddress } from "../../utils/address";

export const Address = ({
	address,
	isFull,
}: {
	address: Hex;
	isFull?: boolean;
}) => {
	const [copied, setCopied] = useState(false);

	const copyToClipboard = () => {
		navigator.clipboard.writeText(getAddress(address));
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	const addressDisplayed = useMemo(() => {
		return isFull ? getAddress(address) : getShortAddress(address);
	}, [address, isFull]);

	return (
		<div className="flex gap-2 items-center">
			<div>{addressDisplayed}</div>
			<TooltipProvider>
				<Tooltip>
					<TooltipTrigger asChild data-testid="tooltip-trigger">
						<div onClick={copyToClipboard} className="cursor-pointer">
							{copied ? (
								<Check className="h-4 w-4" />
							) : (
								<Copy className="h-4 w-4" />
							)}
						</div>
					</TooltipTrigger>
					<TooltipContent>
						<p>{copied ? "Copied!" : "Click to copy"}</p>
					</TooltipContent>
				</Tooltip>
			</TooltipProvider>
		</div>
	);
};

export const AddressFromName = ({ name }: { name: string }) => {
	const result = useEnsAddress({
		name: normalize("wevm.eth"),
	});

	return <Address address={"0x"} />;
};
