import { defineRecipe } from "@chakra-ui/react";

export const inputRecipe = defineRecipe({
  className: "custom-input",

  base: {
    fontWeight: "medium",
    borderRadius: "md",
    borderWidth: "1px",
  },

  variants: {
    variant: {
      outline: {
        border: "1px solid",
        borderColor: "gray.500",
        _focus: {
          borderColor: "secondary.500",
        },

        _invalid: {
          borderColor: "red.500",
        },

        _disabled: {
          bg: "gray.100",
          borderColor: "gray.900",
        },
      },
    },
  },
});
