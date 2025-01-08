import { Registry } from "#registry/schema";

export const ui: Registry = [
	// {
	// 	name: "accordion",
	// 	type: "registry:ui",
	// 	dependencies: ["@radix-ui/react-accordion"],
	// 	files: ["ui/accordion.tsx"],
	// 	tailwind: {
	// 		config: {
	// 			theme: {
	// 				extend: {
	// 					keyframes: {
	// 						"accordion-down": {
	// 							from: { height: "0" },
	// 							to: { height: "var(--radix-accordion-content-height)" },
	// 						},
	// 						"accordion-up": {
	// 							from: { height: "var(--radix-accordion-content-height)" },
	// 							to: { height: "0" },
	// 						},
	// 					},
	// 					animation: {
	// 						"accordion-down": "accordion-down 0.2s ease-out",
	// 						"accordion-up": "accordion-up 0.2s ease-out",
	// 					},
	// 				},
	// 			},
	// 		},
	// 	},
	// },
	// {
	// 	name: "alert",
	// 	type: "registry:ui",
	// 	files: ["ui/alert.tsx"],
	// },
	// {
	// 	name: "alert-dialog",
	// 	type: "registry:ui",
	// 	dependencies: ["@radix-ui/react-alert-dialog"],
	// 	registryDependencies: ["button"],
	// 	files: ["ui/alert-dialog.tsx"],
	// },
	// {
	// 	name: "aspect-ratio",
	// 	type: "registry:ui",
	// 	dependencies: ["@radix-ui/react-aspect-ratio"],
	// 	files: ["ui/aspect-ratio.tsx"],
	// },
	// {
	// 	name: "avatar",
	// 	type: "registry:ui",
	// 	dependencies: ["@radix-ui/react-avatar"],
	// 	files: ["ui/avatar.tsx"],
	// },
	// {
	// 	name: "badge",
	// 	type: "registry:ui",
	// 	files: ["ui/badge.tsx"],
	// },
	// {
	// 	name: "breadcrumb",
	// 	type: "registry:ui",
	// 	dependencies: ["@radix-ui/react-slot"],
	// 	files: ["ui/breadcrumb.tsx"],
	// },
	// {
	// 	name: "button",
	// 	type: "registry:ui",
	// 	dependencies: ["@radix-ui/react-slot"],
	// 	files: ["ui/button.tsx"],
	// },
	// {
	// 	name: "calendar",
	// 	type: "registry:ui",
	// 	dependencies: ["react-day-picker@8.10.1", "date-fns"],
	// 	registryDependencies: ["button"],
	// 	files: ["ui/calendar.tsx"],
	// },
	// {
	// 	name: "card",
	// 	type: "registry:ui",
	// 	files: ["ui/card.tsx"],
	// },
	// {
	// 	name: "carousel",
	// 	type: "registry:ui",
	// 	files: ["ui/carousel.tsx"],
	// 	registryDependencies: ["button"],
	// 	dependencies: ["embla-carousel-react"],
	// },
	// {
	// 	name: "chart",
	// 	type: "registry:ui",
	// 	files: ["ui/chart.tsx"],
	// 	registryDependencies: ["card"],
	// 	dependencies: ["recharts", "lucide-react"],
	// },
	// {
	// 	name: "checkbox",
	// 	type: "registry:ui",
	// 	dependencies: ["@radix-ui/react-checkbox"],
	// 	files: ["ui/checkbox.tsx"],
	// },
	// {
	// 	name: "collapsible",
	// 	type: "registry:ui",
	// 	dependencies: ["@radix-ui/react-collapsible"],
	// 	files: ["ui/collapsible.tsx"],
	// },
	// {
	// 	name: "command",
	// 	type: "registry:ui",
	// 	dependencies: ["cmdk@1.0.0"],
	// 	registryDependencies: ["dialog"],
	// 	files: ["ui/command.tsx"],
	// },
	// {
	// 	name: "context-menu",
	// 	type: "registry:ui",
	// 	dependencies: ["@radix-ui/react-context-menu"],
	// 	files: ["ui/context-menu.tsx"],
	// },
	// {
	// 	name: "dialog",
	// 	type: "registry:ui",
	// 	dependencies: ["@radix-ui/react-dialog"],
	// 	files: ["ui/dialog.tsx"],
	// },
	// {
	// 	name: "drawer",
	// 	type: "registry:ui",
	// 	dependencies: ["vaul", "@radix-ui/react-dialog"],
	// 	files: ["ui/drawer.tsx"],
	// },
	// {
	// 	name: "dropdown-menu",
	// 	type: "registry:ui",
	// 	dependencies: ["@radix-ui/react-dropdown-menu"],
	// 	files: ["ui/dropdown-menu.tsx"],
	// },
	// {
	// 	name: "form",
	// 	type: "registry:ui",
	// 	dependencies: [
	// 		"@radix-ui/react-label",
	// 		"@radix-ui/react-slot",
	// 		"@hookform/resolvers",
	// 		"zod",
	// 		"react-hook-form",
	// 	],
	// 	registryDependencies: ["button", "label"],
	// 	files: ["ui/form.tsx"],
	// },
	// {
	// 	name: "hover-card",
	// 	type: "registry:ui",
	// 	dependencies: ["@radix-ui/react-hover-card"],
	// 	files: ["ui/hover-card.tsx"],
	// },
	// {
	// 	name: "input",
	// 	type: "registry:ui",
	// 	files: ["ui/input.tsx"],
	// },
	// {
	// 	name: "input-otp",
	// 	type: "registry:ui",
	// 	dependencies: ["input-otp"],
	// 	files: ["ui/input-otp.tsx"],
	// },
	// {
	// 	name: "label",
	// 	type: "registry:ui",
	// 	dependencies: ["@radix-ui/react-label"],
	// 	files: ["ui/label.tsx"],
	// },
	// {
	// 	name: "menubar",
	// 	type: "registry:ui",
	// 	dependencies: ["@radix-ui/react-menubar"],
	// 	files: ["ui/menubar.tsx"],
	// },
	// {
	// 	name: "navigation-menu",
	// 	type: "registry:ui",
	// 	dependencies: ["@radix-ui/react-navigation-menu"],
	// 	files: ["ui/navigation-menu.tsx"],
	// },
	// {
	// 	name: "pagination",
	// 	type: "registry:ui",
	// 	registryDependencies: ["button"],
	// 	files: ["ui/pagination.tsx"],
	// },
	// {
	// 	name: "popover",
	// 	type: "registry:ui",
	// 	dependencies: ["@radix-ui/react-popover"],
	// 	files: ["ui/popover.tsx"],
	// },
	// {
	// 	name: "progress",
	// 	type: "registry:ui",
	// 	dependencies: ["@radix-ui/react-progress"],
	// 	files: ["ui/progress.tsx"],
	// },
	// {
	// 	name: "radio-group",
	// 	type: "registry:ui",
	// 	dependencies: ["@radix-ui/react-radio-group"],
	// 	files: ["ui/radio-group.tsx"],
	// },
	// {
	// 	name: "resizable",
	// 	type: "registry:ui",
	// 	dependencies: ["react-resizable-panels"],
	// 	files: ["ui/resizable.tsx"],
	// },
	// {
	// 	name: "scroll-area",
	// 	type: "registry:ui",
	// 	dependencies: ["@radix-ui/react-scroll-area"],
	// 	files: ["ui/scroll-area.tsx"],
	// },
	// {
	// 	name: "select",
	// 	type: "registry:ui",
	// 	dependencies: ["@radix-ui/react-select"],
	// 	files: ["ui/select.tsx"],
	// },
	// {
	// 	name: "separator",
	// 	type: "registry:ui",
	// 	dependencies: ["@radix-ui/react-separator"],
	// 	files: ["ui/separator.tsx"],
	// },
	// {
	// 	name: "sheet",
	// 	type: "registry:ui",
	// 	dependencies: ["@radix-ui/react-dialog"],
	// 	files: ["ui/sheet.tsx"],
	// },
	// {
	// 	name: "skeleton",
	// 	type: "registry:ui",
	// 	files: ["ui/skeleton.tsx"],
	// },
	// {
	// 	name: "slider",
	// 	type: "registry:ui",
	// 	dependencies: ["@radix-ui/react-slider"],
	// 	files: ["ui/slider.tsx"],
	// },
	// {
	// 	name: "sonner",
	// 	type: "registry:ui",
	// 	dependencies: ["sonner", "next-themes"],
	// 	files: ["ui/sonner.tsx"],
	// },
	// {
	// 	name: "switch",
	// 	type: "registry:ui",
	// 	dependencies: ["@radix-ui/react-switch"],
	// 	files: ["ui/switch.tsx"],
	// },
	// {
	// 	name: "table",
	// 	type: "registry:ui",
	// 	files: ["ui/table.tsx"],
	// },
	// {
	// 	name: "tabs",
	// 	type: "registry:ui",
	// 	dependencies: ["@radix-ui/react-tabs"],
	// 	files: ["ui/tabs.tsx"],
	// },
	// {
	// 	name: "textarea",
	// 	type: "registry:ui",
	// 	files: ["ui/textarea.tsx"],
	// },
	// {
	// 	name: "toast",
	// 	type: "registry:ui",
	// 	dependencies: ["@radix-ui/react-toast"],
	// 	files: [
	// 		{
	// 			path: "ui/toast.tsx",
	// 			type: "registry:ui",
	// 		},
	// 		{
	// 			path: "hooks/use-toast.ts",
	// 			type: "registry:hook",
	// 		},
	// 		{
	// 			path: "ui/toaster.tsx",
	// 			type: "registry:ui",
	// 		},
	// 	],
	// },
	// {
	// 	name: "toggle",
	// 	type: "registry:ui",
	// 	dependencies: ["@radix-ui/react-toggle"],
	// 	files: ["ui/toggle.tsx"],
	// },

	// utils
	{
		name: "address-badge",
		type: "registry:ui",
		dependencies: ["viem", "wagmi", "lucide-react"],
		shadcnDependencies: ["badge", "tooltip"],
		files: [
			{
				type: "registry:ui",
				path: "components/identity/address-badge.tsx",
			},
			{
				type: "registry:lib",
				path: "lib/utils/address.ts",
			},
		],
	},
	{
		name: "avatar",
		type: "registry:ui",
		dependencies: ["viem", "wagmi"],
		shadcnDependencies: [],
		files: [
			{
				type: "registry:ui",
				path: "components/identity/avatar.tsx",
			},
		],
	},

	{
		name: "avatar-wagmi",
		type: "registry:ui",
		dependencies: ["viem", "wagmi"],
		shadcnDependencies: [],
		files: [
			{
				type: "registry:ui",
				path: "components/identity/avatar-wagmi.tsx",
			},
		],
	},

	{
		name: "name",
		type: "registry:ui",
		dependencies: ["viem"],
		shadcnDependencies: [],
		files: [
			{
				type: "registry:ui",
				path: "components/identity/name.tsx",
			},
			{
				type: "registry:hook",
				path: "hooks/ens/use-efp-api.ts",
			},
		],
	},
	{
		name: "name-wagmi",
		type: "registry:ui",
		dependencies: ["viem", "wagmi"],
		shadcnDependencies: [],
		files: [
			{
				type: "registry:ui",
				path: "components/identity/name-wagmi.tsx",
			},
		],
	},
	// {
	// 	name: "attestation-badge",
	// 	type: "registry:ui",
	// 	dependencies: ["viem", "wagmi"],
	// 	shadcnDependencies: ["badge"],
	// 	files: [
	// 		{
	// 			type: "registry:hook",
	// 			path: "hooks/eas/use-get-attestations.tsx",
	// 		},
	// 	],
	// },

	{
		name: "attestation-card",
		type: "registry:ui",
		dependencies: ["viem", "wagmi", "@radix-ui/react-label", "date-fns"],
		shadcnDependencies: ["card", "separator", "skeleton", "tooltip"],
		files: [
			{
				type: "registry:ui",
				path: "components/attestations/attestation-card.tsx",
			},

			{
				type: "registry:hook",
				path: "hooks/eas/use-get-attestation-with-uid.tsx",
			},
		],
	},

	// {
	// 	name: "toggle-group",
	// 	type: "registry:ui",
	// 	dependencies: ["@radix-ui/react-toggle-group"],
	// 	registryDependencies: ["toggle"],
	// 	files: ["ui/toggle-group.tsx"],
	// },
];
