import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@store": "/src/store",
			"@styles": "/src/styles",
			"@pages": "/src/pages",
			"@components": "/src/components",
		},
	},
});
