import { IProps } from "./interface";

import { Container } from "./styles";

export const Button = ({ children, onClick, ...rest }: IProps) => {
  return (
    <Container onClick={onClick} {...rest}>
      {children}
    </Container>
  );
};
