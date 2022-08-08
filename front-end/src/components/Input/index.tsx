import { IInputProps } from "./interface";
import { Container, Label } from "./styles";

export const Input = ({
  id,
  placeholder,
  type,
  value,
  onChange,
  label,
  ...rest
}: IInputProps) => {
  return (
    <Container {...rest}>
      {label && <Label htmlFor={id}>{label}</Label>}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </Container>
  );
};
