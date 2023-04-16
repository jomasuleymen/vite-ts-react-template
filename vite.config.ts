import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

const SOURCE_PATH = path.resolve(__dirname, "src");

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@store": path.join(SOURCE_PATH, "store"),
			"@styles": path.join(SOURCE_PATH, "styles"),
			"@pages": path.join(SOURCE_PATH, "pages"),
			"@components": path.join(SOURCE_PATH, "components"),
		},
	},
});
