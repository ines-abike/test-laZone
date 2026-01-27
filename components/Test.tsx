"use client";

import { Box, Stack, Heading, Button } from "@chakra-ui/react";

export default function Test() {
  return (
    <Stack p={8}>
      <Heading size="md">Buttons</Heading>
      <Stack direction="row">
        <Button variant="solid" bg="secondary.500">
          Solid Button
        </Button>
        <Button variant="outline" borderColor="primary.500">
          Outline Button
        </Button>
      </Stack>

      <Box textStyle="heading.huge">Headings</Box>

      <Box textStyle="heading.huge">Heading Huge</Box>

      <Box textStyle="heading.1">Heading 1</Box>
      <Box textStyle="heading.1.sub">Subheading 1</Box>

      <Box textStyle="heading.2">Heading 2</Box>
      <Box textStyle="heading.2.sub">Subheading 2</Box>

      <Box textStyle="heading.3">Heading 3</Box>
      <Box textStyle="heading.3.sub">Subheading 3</Box>

      <Box textStyle="heading.4">Heading 4</Box>
      <Box textStyle="heading.4.sub">Subheading 4</Box>

      <Heading size="md">Body</Heading>

      <Box textStyle="body.default">Text Body</Box>
      <Box textStyle="body.bold">Text Body Bold</Box>

      <Box textStyle="body.small">Text Small</Box>
      <Box textStyle="body.small.bold">Text Small Bold</Box>

      <Box textStyle="body.micro">Text Micro</Box>
      <Box textStyle="body.micro.bold">Text Micro Bold</Box>
    </Stack>
  );
}
