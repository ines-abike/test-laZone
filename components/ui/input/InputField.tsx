import { useField, FieldHookConfig } from "formik";
import { Field, Input, InputProps } from "@chakra-ui/react";

interface InputFieldProps extends InputProps {
  name: string;
  label: string;
  helperText?: string;
}

function InputField({ label, helperText, ...props }: InputFieldProps) {
  const [field, meta] = useField(props as FieldHookConfig<string>);
  const invalid = meta.touched && !!meta.error;

  return (
    <Field.Root invalid={invalid}>
      <Field.Label textStyle="text.body">{label}</Field.Label>
      {helperText && (
        <Field.HelperText textStyle="text.micro" color="gray.500">
          {helperText}
        </Field.HelperText>
      )}
      <Input {...field} {...props} />
      {invalid && (
        <Field.ErrorText textStyle="text.micro">{meta.error}</Field.ErrorText>
      )}
    </Field.Root>
  );
}

export default InputField;
