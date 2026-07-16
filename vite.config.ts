import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vanillaExtractPlugin()],
  resolve: {
    alias: {
      // /esm/icons/index.mjs only exports the icons statically, so no separate chunks are created
      "@tabler/icons-react": "@tabler/icons-react/dist/esm/icons/index.mjs",
    },
  },
  build: {
    manifest: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) return;

          const match = vendorPackages.find((pkg) => id.includes(pkg));
          if (match) return match.replace("@", "").replace(/[@/]/g, "-");

          return "vendor";
        },
      },
    },
  },
});

const vendorPackages = [
  "@mantine/core/esm/core",
  "@mantine/core/esm/components",
  "@mantine/hooks",
  "@mantine/notifications",
  "@mantine",
  "@tabler/icons-react",
  "howler",
];
