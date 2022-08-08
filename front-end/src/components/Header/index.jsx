import { Button } from "../Button";

import { Container } from "./styles";

export default function Header() {
  return (
    <Container>
      <h2>
        Developer <span>Registration</span>
      </h2>
      <Button onClick={() => {}}>Adicionar Desenvolvedor</Button>
    </Container>
  );
}
