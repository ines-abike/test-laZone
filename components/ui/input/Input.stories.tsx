// components/CustomInput/CustomInput.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import CustomInput from "./CustomInput";

const meta: Meta<typeof CustomInput> = {
  title: "UI/CustomInput",
  component: CustomInput,
  tags: ["autodocs"],
  argTypes: {
    disabled: { control: "boolean" },
    invalid: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof CustomInput>;

export const Playground: Story = {
  args: {
    placeholder: "email@example.com",
    disabled: false,
    invalid: false,
  },
};
