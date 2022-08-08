import { useContext } from "react";
import { AuthContext } from "../../contexts/DeveloperContext";
import { Button } from "../Button";

import { Container } from "./styles";

export default function Header() {
  const { handleAdd } = useContext(AuthContext);
  return (
    <Container>
      <h2>
        Developer <span>Registration</span>
      </h2>
      <Button onClick={handleAdd}>Adicionar Desenvolvedor</Button>
    </Container>
  );
}
