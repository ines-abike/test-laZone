import { ChakraProvider } from "@chakra-ui/react";
import type { Preview } from "@storybook/react";
import { system } from "../theme/index";

const preview: Preview = {
  // ...
  decorators: [
    (Story) => (
      <ChakraProvider value={system}>
        <Story />
      </ChakraProvider>
    ),
  ],
};

export default preview;
