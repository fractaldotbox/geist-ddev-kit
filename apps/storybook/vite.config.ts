import path from "path";
import react from "@vitejs/plugin-react";
/// <reference types="vitest" />
import { defineConfig, loadEnv } from "vite";
// @ts-ignore required for config
import { test } from "vitest";

// import { nodePolyfills } from "vite-plugin-node-polyfills";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
	test: {
		globals: true,
		environment: "jsdom",
		setupFiles: "./test-setup.ts",
		env: loadEnv(mode, process.cwd(), ""),
	},
	plugins: [
		react(),
		// nodePolyfills({
		// 	globals: {
		// 		Buffer: true,
		// 		global: true,
		// 		process: true,
		// 	},
		// 	// overrides: {
		// 	// 	crypto: "node:crypto",
		// 	// },
		// }),
	],
}));
