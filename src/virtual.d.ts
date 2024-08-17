declare module "virtual:tailwind-config" {
  import { Config } from "tailwindcss";

  export = {} as Config;
}

declare module "virtual:tailwind-theme" {
  import { Config } from "tailwindcss";

  export = {} as Config.theme;
}
