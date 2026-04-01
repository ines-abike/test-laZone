import type { Meta, StoryObj, Decorator } from "@storybook/react";
import { Formik, Form } from "formik";
import InputField from "./InputField";

const formikDecorator: Decorator = (Story) => (
  <Formik initialValues={{ email: "" }} onSubmit={() => {}}>
    <Form>
      <Story />
    </Form>
  </Formik>
);

const meta: Meta<typeof InputField> = {
  title: "UI/InputField",
  component: InputField,
  tags: ["autodocs"],
  argTypes: {
    disabled: { control: "boolean" },
  },
  decorators: [formikDecorator],
};

export default meta;

type Story = StoryObj<typeof InputField>;

export const Playground: Story = {
  args: {
    name: "email",
    label: "Email",
    placeholder: "email@example.com",
    disabled: false,
  },
};
