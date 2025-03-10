// Draf
// https://storybook.js.org/docs/addons/writing-addons

import React, { memo, useCallback, useEffect } from "react";

import { IconButton } from "@storybook/components";
import { LightningIcon } from "@storybook/icons";
import { useGlobals, useStorybookApi } from "@storybook/manager-api";

export const Tool = memo(function MyAddonSelector() {
	const [globals, updateGlobals] = useGlobals();
	const api = useStorybookApi();

	// const isActive = [true, 'true'].includes(globals[PARAM_KEY]);

	const isActive = true;

	const ADDON_ID = "wallet-control";
	const TOOL_ID = "wallet-control-tool";

	const toggleMyTool = useCallback(() => {
		// updateGlobals({
		//     [PARAM_KEY]: !isActive,
		// });
	}, [isActive]);

	useEffect(() => {
		api.setAddonShortcut(ADDON_ID, {
			label: "Toggle Measure [O]",
			defaultShortcut: ["O"],
			actionName: "outline",
			showInMenu: false,
			action: toggleMyTool,
		});
	}, [toggleMyTool, api]);

	return (
		<IconButton
			key={TOOL_ID}
			active={isActive}
			title="Enable my addon"
			onClick={toggleMyTool}
		>
			<LightningIcon />
		</IconButton>
	);
});
