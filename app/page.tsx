"use client";

import { Box, Button, Heading, Stack } from "@chakra-ui/react";

export default function Test() {
  return (
    <Stack p={8}>
      <Heading size="md">Buttons</Heading>
      <Stack direction="row">
        <Button variant="solid" colorPalette="primary">
          Solid Button
        </Button>
        <Button variant="outline" colorPalette="primary">
          Outline Button
        </Button>
      </Stack>
      <Box textStyle="heading.huge">Headings</Box>
    </Stack>
  );
}
