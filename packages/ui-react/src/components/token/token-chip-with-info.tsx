import { formatUnitsWithDecimalsDisplayed } from "@geist/domain/amount";
import { formatEther, formatGwei, formatUnits } from "viem";
import { Button } from "#components/shadcn/button";

/**
 * Amount instead Balance as it could be generic and not belongs to wallet
 */

export type TokenChipWithInfoProps = {
	imageUrl?: string;
	name: string;
	symbol: string;
	// TODO both amount and decimals are required
	amount?: bigint;
	decimals?: number;
	decimalsDisplayed?: number;
	className?: string;
};

// TODO fix value
// TODO add url
export const TokenChipWithInfo = ({
	imageUrl,
	name,
	symbol,
	amount,
	decimals,
	decimalsDisplayed = 2,
	className,
}: TokenChipWithInfoProps) => {
	return (
		<Button variant={"secondary"} className={`py-1 flex gap-3 ${className}`}>
			<div className="flex gap-2 justify-center items-center">
				{!!imageUrl && (
					<img className="h-6" src={imageUrl} alt={`${name}-icon`} />
				)}
				<div className="text-lg font-semibold">{symbol}</div>
				{decimals !== undefined && (
					<div className="text-sm text-muted-foreground p-2">
						{formatUnitsWithDecimalsDisplayed(
							{
								value: amount ?? 0n,
								decimals,
							},
							decimalsDisplayed,
						)}
					</div>
				)}
			</div>
		</Button>
	);
};
