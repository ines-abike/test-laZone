import { Box, Button } from "@chakra-ui/react";

const Demo = () => {
  return (
    <div>
      <Button variant="solid" bg="secondary.500">
        Solid Button
      </Button>
      <Button bg="error.500">Outline Button</Button>
      <Box color="brand.title" fontSize="2xl">
        Hello world
      </Box>
    </div>
  );
};

export default Demo;
