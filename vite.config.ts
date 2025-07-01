import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr";

export default defineConfig({
    base: "/",
    plugins: [react(), tailwindcss(), svgr()],
    build: {
        assetsInlineLimit: 0,
        rollupOptions: {
            output: {
                assetFileNames: "assets/[name]-[hash][extname]",
            },
        },
    },
});
