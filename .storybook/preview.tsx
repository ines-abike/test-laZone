import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { withThemeByClassName } from "@storybook/addon-themes";
import type { Preview } from "@storybook/react";

const preview: Preview = {
  // ...
  decorators: [
    (Story) => (
      <ChakraProvider value={defaultSystem}>
        <Story />
      </ChakraProvider>
    ),

    withThemeByClassName({
      defaultTheme: "light",
      themes: { light: "", dark: "dark" },
    }),
  ],
};

export default preview;
