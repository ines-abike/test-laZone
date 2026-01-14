import Button from "./Button";
import type { StoryObj } from "@storybook/react";

export default {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["solid", "outline", "ghost"],
      defaultValue: "solid",
    },
    size: { control: "radio", options: ["sm", "md", "lg"], defaultValue: "md" },
  },
};

type Story = StoryObj<typeof Button>;

const palettes = [
  "primary",
  "secondary",
  "success",
  "error",
  "warning",
] as const;

export const Primary = () => {
  return (
    <div style={{ display: "flex", gap: 12 }}>
      {palettes.map((palette) => (
        <Button key={palette} variant="solid" colorPalette={palette}>
          {palette}
        </Button>
      ))}
    </div>
  );
};

export const Secondary = () => {
  return (
    <div style={{ display: "flex", gap: 12 }}>
      {palettes.map((palette) => (
        <Button key={palette} variant="outline" colorPalette={palette}>
          {palette}
        </Button>
      ))}
    </div>
  );
};

export const Tertiary = () => {
  return (
    <div style={{ display: "flex", gap: 12 }}>
      {palettes.map((palette) => (
        <Button key={palette} variant="ghost" colorPalette={palette}>
          {palette}
        </Button>
      ))}
    </div>
  );
};
