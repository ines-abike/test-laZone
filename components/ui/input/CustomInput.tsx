// components/CustomInput/CustomInput.tsx
import { Input, Field } from "@chakra-ui/react";
import type { InputProps } from "@chakra-ui/react";

export interface CustomInputProps extends Omit<InputProps, "disabled"> {
  placeholder?: string;
  invalid?: boolean;
  disabled?: boolean;
}

const CustomInput: React.FC<CustomInputProps> = ({
  invalid = false,
  disabled = false,
  ...inputProps
}) => {
  return (
    <Field.Root invalid={invalid}>
      <Input disabled={disabled} {...inputProps} />
    </Field.Root>
  );
};

export default CustomInput;
