import { createSystem, defaultConfig, defineRecipe } from "@chakra-ui/react";

const buttonRecipe = defineRecipe({});

const system = createSystem(defaultConfig, {
  theme: {
    recipes: { button: buttonRecipe },
  },
});
