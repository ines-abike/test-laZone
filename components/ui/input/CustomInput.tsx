import { Input, Field } from "@chakra-ui/react";

import type { InputProps } from "@chakra-ui/react";

export interface CustomInputProps extends Omit<InputProps, "disabled"> {
  placeholder?: string;
  label?: string;
  invalid?: boolean;
  disabled?: boolean;
  error?: string | boolean;
  helperText?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  invalid = false,
  disabled = false,
  label,
  placeholder,
  error,
  helperText,
  ...inputProps
}) => {
  return (
    <Field.Root invalid={invalid}>
      <Field.Label textStyle="text.body">{label}</Field.Label>
      <Field.HelperText textStyle="text.micro" color="gray.500">
        {helperText}
      </Field.HelperText>
      <Input disabled={disabled} {...inputProps} placeholder={placeholder} />
      <Field.ErrorText textStyle="text.micro">{error}</Field.ErrorText>
    </Field.Root>
  );
};

export default CustomInput;
