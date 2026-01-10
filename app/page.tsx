import { Box, Button } from "@chakra-ui/react";

const page = () => {
  return (
    <div>
      <Button variant="solid" bg="secondary.500">
        Solid Button
      </Button>
      <Button bg="primary.500">
        Outline Button
      </Button>
      <Box color="brand.title" fontSize="2xl">
        Hello world
      </Box>
    </div>
  );
}
