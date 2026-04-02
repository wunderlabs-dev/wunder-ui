import path from "node:path";
import tailwindcss from "@tailwindcss/vite";
import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(ts|tsx)"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  addons: ["@storybook/addon-essentials"],
  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
  viteFinal: (config) => {
    config.plugins = [...(config.plugins ?? []), tailwindcss()];
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve?.alias,
        "@": path.resolve(process.cwd(), "src"),
      },
    };
    return config;
  },
};

export default config;
