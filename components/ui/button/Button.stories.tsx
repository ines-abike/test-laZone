import { Button } from "@chakra-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "tertiary"],
    },
    colorPalette: {
      control: "select",
      options: ["primary", "secondary", "success"],
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
    variant: "primary",
    colorPalette: "primary",
    children: "Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    colorPalette: "primary",
    children: "Button",
  },
};

export const Tertiary: Story = {
  args: {
    variant: "tertiary",
    colorPalette: "primary",
    children: "Button",
  },
};
