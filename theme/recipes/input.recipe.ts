import { defineRecipe } from "@chakra-ui/react";

export const inputRecipe = defineRecipe({
  variants: {
    variant: {
      outline: {
        border: "1px solid",
        borderColor: "gray.500",
        _focus: {
          borderColor: "secondary.500",
        },
        _hover: {
          bg: "secondary.100/5",
        },

        _invalid: {
          borderColor: "red.500",
        },

        _disabled: {
          bg: "gray.100",
          borderColor: "gray.900",
        },
        transition: "all 0.2s",
      },
    },
  },
});
