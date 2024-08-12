import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "./tailwind.config";

const tailwindConfigResolved = resolveConfig(tailwindConfig);
const virtualModuleId = "virtual:tailwind-config";
const resolvedVirtualModuleId = "\0" + virtualModuleId;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // https://evomark.co.uk/development/making-your-tailwind-config-available-to-your-entire-application-with-vite/
    {
      name: "tailwind-config-module",
      resolveId(id) {
        if (id === virtualModuleId) {
          return resolvedVirtualModuleId;
        }
      },
      load(id) {
        if (id === resolvedVirtualModuleId) {
          return `export const tailwindConfigResolved = ${JSON.stringify(
            tailwindConfigResolved
          )}`;
        }
      },
    },
  ],
});
