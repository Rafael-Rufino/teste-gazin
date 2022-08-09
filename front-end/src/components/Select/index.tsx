import { ChangeEvent } from "react";
import { Container, Label } from "./styles";

interface ISelectProps {
  id: string;
  name: string;
  value: string;
  label: string;
  onChange: (e: ChangeEvent<HTMLOptionElement>) => void;
}

export const Select = ({
  id,
  name,
  value,
  label,
  onChange,
  ...rest
}: ISelectProps) => {
  return (
    <Container {...rest}>
      {label && <Label htmlFor={id}>{label}</Label>}
      <select name={name} id={id}>
        <option value={value} onChange={onChange} />
      </select>
    </Container>
  );
};
