# Accessing a Tailwind config in TypeScript

This repository demonstrates how to generate a static copy of Tailwind's configuration at build time using Vite's virtual module feature with proper TypeScript types. It serves as an alternative to the `babel-plugin-preval` or using Tailwind's `resolveConfig` helper directly.

Originally discovered here: [Making Your Tailwind Config Available to Your Entire Application with Vite](https://evomark.co.uk/development/making-your-tailwind-config-available-to-your-entire-application-with-vite/)

## Tailwind 4

The `resolveConfig` helper has been removed. Configuration variables can now only be accessed at runtime via `window.getComputedStyle()`. Refer to the [official migration guide](https://tailwindcss.com/docs/upgrade-guide#theme-values-in-javascript) for more details.
