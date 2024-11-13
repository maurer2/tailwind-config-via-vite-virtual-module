import { defineConfig, PluginOption } from "vite";
import react from "@vitejs/plugin-react";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "./tailwind.config";

const tailwindConfigResolved = resolveConfig(tailwindConfig);

const tailwindConfigModuleId = "virtual:tailwind-config";
const tailwindConfigResolvedVirtualModuleId = "\0" + tailwindConfigModuleId;

const tailwindThemeModuleId = "virtual:tailwind-theme";
const tailwindThemeResolvedVirtualModuleId = "\0" + tailwindThemeModuleId;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // https://evomark.co.uk/development/making-your-tailwind-config-available-to-your-entire-application-with-vite/
    // full tailwind config
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
    } satisfies PluginOption,
    // tailwind theme only
    {
      name: "tailwind-theme-module",
      resolveId(id) {
        if (id === tailwindThemeModuleId) {
          return tailwindThemeResolvedVirtualModuleId;
        }
      },
      load(id) {
        if (id === tailwindThemeResolvedVirtualModuleId) {
          return `export default ${JSON.stringify(
            tailwindConfigResolved.theme
          )}`;
        }
      },
    } satisfies PluginOption,
  ],
});
