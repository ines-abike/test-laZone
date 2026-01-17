import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";
import { textStyles } from "./text-styles";
import { buttonRecipe } from "./recipes/button.recipe";
import { inputRecipe } from "./recipes/input.recipe";

const config = defineConfig({
  globalCss: {
    body: {
      bg: "#ffffff",
    },
  },
  theme: {
    tokens: {
      colors: {
        primary: {
          100: { value: "#C5B7F1" },
          500: { value: "#4C0571" },
          900: { value: "#1E1932" },
        },

        secondary: {
          100: { value: "#9F88E8" },
          500: { value: "#660798" },
          900: { value: "#28033B" },
        },

        gray: {
          50: { value: "#FBFBFB" },
          200: { value: "#EBEBEB" },
          500: { value: "#B1B1B1" },
          900: { value: "#7A7A7A" },
        },

        success: {
          100: { value: "#B1F100" },
          500: { value: "#9BCC17" },
          900: { value: "#7FA713" },
        },

        error: {
          500: { value: "#FF8D94" },
          900: { value: "#E52B36" },
        },

        warning: {
          100: { value: "#F3C66D" },
        },
      },
    },
    textStyles,

    semanticTokens: {
      colors: {
        primary: {
          solid: { value: "{colors.primary.500}" },
          contrast: { value: "white" },
          fg: { value: "{colors.primary.900}" },
          muted: { value: "{colors.primary.100}" },
        },

        secondary: {
          solid: { value: "{colors.secondary.500}" },
          contrast: { value: "white" },
          fg: { value: "{colors.secondary.900}" },
          muted: { value: "{colors.secondary.100}" },
        },

        success: {
          solid: { value: "{colors.success.500}" },
          contrast: { value: "white" },
          fg: { value: "{colors.success.900}" },
          muted: { value: "{colors.success.100}" },
        },

        error: {
          solid: { value: "{colors.error.500}" },
          contrast: { value: "white" },
          fg: { value: "{colors.error.900}" },
          muted: { value: "{colors.error.500}" },
        },

        warning: {
          solid: { value: "{colors.warning.100}" },
          contrast: { value: "white" },
          fg: { value: "{colors.warning.100}" },
          muted: { value: "{colors.warning.100}" },
        },
      },
    },
  },
});

const buttonConfig = defineConfig({
  theme: {
    recipes: {
      button: buttonRecipe,
    },
  },
});

const inputConfig = defineConfig({
  theme: {
    recipes: {
      input: inputRecipe,
    },
  },
});

export const system = createSystem(
  defaultConfig,
  config,
  buttonConfig,
  inputConfig
);
