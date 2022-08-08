import { useContext } from "react";
import { VideoContext } from "../../contexts/VideoContext";
import { Button } from "../Button";

import { Container } from "./styles";

export default function Header() {
  const { handleAdd } = useContext(VideoContext);
  return (
    <Container>
      <h2>
        Developer <span>Registration</span>
      </h2>
      <Button onClick={handleAdd}>Adicionar Desenvolvedor</Button>
    </Container>
  );
}
