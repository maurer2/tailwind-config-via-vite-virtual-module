import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "./tailwind.config";

const tailwindConfigResolved = resolveConfig(tailwindConfig);

const tailwindConfigModuleId = "virtual:tailwind-config";
const tailwindConfigResolvedVirtualModuleId = "\0" + tailwindConfigModuleId;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // https://evomark.co.uk/development/making-your-tailwind-config-available-to-your-entire-application-with-vite/
    {
      name: "tailwind-config-module",
      resolveId(id) {
        if (id === tailwindConfigModuleId) {
          return tailwindConfigResolvedVirtualModuleId;
        }
      },
      load(id) {
        if (id === tailwindConfigResolvedVirtualModuleId) {
          return `export default ${JSON.stringify(tailwindConfigResolved)}`;
        }
      },
    },
  ],
});
