import { Input as ChakraInput } from "@chakra-ui/react";

type InputProps = {
  color?: "primary" | "secondary" | "success" | "error";
  placeholder?: string;
  size?:'2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  variant?: "subtle" | "outline";
};

const Input = ({ variant, color, placeholder, size}: InputProps) => {
  return (
    <ChakraInput
    size={size}
      variant={variant}
      borderColor={`${color}.500`}
      _hover={{
        borderColor: `${color}.500`,
      }}
      _focusVisible={{
        borderColor: `${color}.500`,
        boxShadow: `0 0 0 1px var(--chakra-colors-${color}-500)`,
      }}
      placeholder={placeholder}
    />
  );
};

export default Input;
