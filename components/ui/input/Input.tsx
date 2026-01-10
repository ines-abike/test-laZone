import "./input.css";

export interface InputProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  label: string;
}

/** Primary UI component for user interaction */
export const Input = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: InputProps) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  return (
    <input
      type="text"
      className={["storybook-button", `storybook-button--${size}`, mode].join(
        " "
      )}
      {...props}
    />
  );
};

export default Input;
