import { Button as ChakraButton } from "@chakra-ui/react";

type ButtonProps = {
  variant?: "solid" | "outline" | "ghost";
  colorPalette?: "primary" | "secondary" | "success" | "error" | "warning";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  onClick?: () => void;
};

const Button = ({
  variant = "solid",
  colorPalette = "primary",
  size = "md",
  children,
  onClick,
}: ButtonProps) => {
  return (
    <ChakraButton
      variant={variant}
      colorPalette={colorPalette}
      size={size}
      onClick={onClick}
    >
      {children}
    </ChakraButton>
  );
};

export default Button;
