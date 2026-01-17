import { Button } from "@chakra-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["solid", "outline", "ghost"],
    },
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
    },
    colorPalette: {
      control: "select",
      options: ["primary", "secondary", "success", "error", "warning"],
    },
    disabled: {
      control: "boolean",
    },
    children: {
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "solid",
    colorPalette: "primary",
    size: "md",
    children: "Button",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    colorPalette: "primary",
    size: "md",
    children: "Button",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    colorPalette: "primary",
    size: "md",
    children: "Button",
  },
};
