import { defineRecipe } from "@chakra-ui/react";

export const buttonRecipe = defineRecipe({
  className: "custom-button",
  base: {
    fontWeight: "medium",
    borderRadius: "md",
    cursor: "pointer",
    transition: "all 0.5s",

    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed",
      pointerEvents: "none",
    },
  },

  variants: {
    variant: {
      primary: {
        bg: "colorPalette.fg",
        color: "white",

        _hover: {
          bg: "colorPalette.solid",
        },

        _disabled: {
          bg: "gray.500",
          color: "white",
        },
      },

      secondary: {
        border: "2px solid",
        borderColor: "colorPalette.fg",
        color: "colorPalette.fg",
        bg: "transparent",

        _hover: {
          bg: "Background",
          color: "colorPalette.solid",
          borderColor: "colorPalette.solid",
        },

        _disabled: {
          borderColor: "gray.500",
          color: "gray.500",
        },
      },

      tertiary: {
        bg: "transparent",
        color: "colorPalette.fg",

        _hover: {
          textColor: "colorPalette.solid/10",
          bg: "Background",
        },

        _disabled: {
          color: "gray.500",
        },
      },
    },
  },

  defaultVariants: {
    variant: "primary",
  },
});
