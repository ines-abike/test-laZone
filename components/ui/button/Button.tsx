import "./input.css";

export interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  label: string;
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  return (
    <button
      className={["storybook-button", `storybook-button--${size}`, mode].join(
        " "
      )}
      {...props}
      onClick={props.onClick}
    >
      {label}
    </button>
  );
};

export default Button;
