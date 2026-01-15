import Input from "./Input";
import type { StoryObj } from "@storybook/react";

const meta = {
  title: "UI/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["outline", "filled", "flushed", "unstyled"],
    },
    size: {
      control: "radio",
      options: ["2xs","xs","sm","md","lg","xl","2xl"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  args: {
    variant: "outline",
    color: "primary",
    size:"lg",
    placeholder: "Enter your text",
  },
};

export const Secondary: Story = {
  args: {
    variant: "subtle",
    color: "secondary",
    size:"lg",
    placeholder: "Enter your text",
    },
};
