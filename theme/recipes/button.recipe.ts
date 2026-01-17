import { defineRecipe } from "@chakra-ui/react";

export const buttonRecipe = defineRecipe({
  className: "custom-button",
  base: {
    fontWeight: "medium",
    borderRadius: "md",
    cursor: "pointer",
    transition: "all 0.2s",

    // État disabled (appliqué à toutes les variants)
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed",
      pointerEvents: "none",
    },
  },

  variants: {
    variant: {
      solid: {
        bg: "colorPalette.fg",
        color: "white",

        _hover: {
          bg: "colorPalette.solid",
          transform: "translateY(-1px)",
          boxShadow: "md",
        },

        _disabled: {
          bg: "gray.500",
          color: "white",
        },
      },

      outline: {
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

      ghost: {
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
    variant: "solid",
  },
});
