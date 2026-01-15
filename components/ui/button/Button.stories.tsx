import Button from "./Button";
import type { StoryObj } from "@storybook/react";

const meta = {
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
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "solid",
    size: "md",
    colorPalette: "primary",
    children: "Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "outline",
    size: "md",
    colorPalette: "primary",
    children: "Button",
  },
};

export const Tertiary: Story = {
  args: {
    variant: "ghost",
    size: "md",
    colorPalette: "primary",
    children: "Button",
  },
};
