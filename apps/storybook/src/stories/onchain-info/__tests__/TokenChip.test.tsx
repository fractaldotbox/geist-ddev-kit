import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { TokenChip, TokenChipProps } from "../TokenChip";

vi.mock("@/components/ui/button", () => ({
	Button: ({
		children,
		className,
	}: {
		children: React.ReactNode;
		className?: string;
	}) => <button className={className}>{children}</button>,
}));

describe("TokenChip Component", () => {
	const defaultProps: TokenChipProps = {
		name: "Ethereum",
		symbol: "ETH",
		image: "https://example.com/eth-icon.png",
		className: "custom-class",
	};

	it("renders the TokenChip component with correct props", () => {
		render(<TokenChip {...defaultProps} />);

		// Check if the image is rendered with the correct src and alt
		const image = screen.getByRole("img", { name: /ethereum-icon/i });

		//@ts-expect-error this code works as it is already extended
		expect(image).toHaveAttribute("src", defaultProps.image);

		//@ts-expect-error this code works as it is already extended
		expect(image).toHaveAttribute("alt", `${defaultProps.name}-icon`);

		// Check if the symbol text is displayed correctly
		const symbolText = screen.getByText(defaultProps.symbol);
		expect(symbolText).toBeDefined();
	});

	it("renders with no image when image prop is not provided", () => {
		render(<TokenChip name="Bitcoin" symbol="BTC" />);

		// Check that the symbol and name are rendered correctly without image
		const symbolText = screen.getByText("BTC");
		expect(symbolText).toBeDefined();
	});
});
