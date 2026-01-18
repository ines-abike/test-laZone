import { Text } from "@chakra-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Text> = {
  title: "UI/Text",
  component: Text,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Heading: Story = {
  args: {
    textStyle: "heading",
    children: "Heading",
  },
};

export const Huge: Story = {
  args: {
    textStyle: "huge",
    children: "Huge",
  },
};

export const Heading1: Story = {
  args: {
    textStyle: "heading.1",
    children: "Heading.1",
  },
};

export const Heading1Sub: Story = {
  args: {
    textStyle: "heading.1.sub",
    children: "Heading.1 Sub",
  },
};

export const Heading2: Story = {
  args: {
    textStyle: "heading.2",
    children: "Heading.2",
  },
};

export const Heading2Sub: Story = {
  args: {
    textStyle: "heading.2.sub",
    children: "Heading.2 Sub",
  },
};

export const Heading3: Story = {
  args: {
    textStyle: "heading.3",
    children: "Heading.3",
  },
};

export const Heading3Sub: Story = {
  args: {
    textStyle: "heading.3.sub",
    children: "Heading.3 Sub",
  },
};

export const Heading4: Story = {
  args: {
    textStyle: "heading.4",
    children: "Heading.4",
  },
};

export const Heading4Sub: Story = {
  args: {
    textStyle: "heading.4.sub",
    children: "Heading.4 Sub",
  },
};

export const Body: Story = {
  args: {
    textStyle: "body",
    children: "Body",
  },
};

export const TextBody: Story = {
  args: {
    textStyle: "text.body",
    children: "Text Body",
  },
};

export const TextBold: Story = {
  args: {
    textStyle: "text.bold",
    children: "Text Bold",
  },
};

export const TextSmall: Story = {
  args: {
    textStyle: "text.small",
    children: "Text Small",
  },
};

export const TextSmallBold: Story = {
  args: {
    textStyle: "text.small.bold",
    children: "Text Small Bold",
  },
};

export const TextMicro: Story = {
  args: {
    textStyle: "text.micro",
    children: "Text Micro",
  },
};

export const TextMicroBold: Story = {
  args: {
    textStyle: "text.micro.bold",
    children: "Text Micro Bold",
  },
};
