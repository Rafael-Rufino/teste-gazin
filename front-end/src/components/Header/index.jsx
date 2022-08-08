import { useContext } from "react";
import { AuthContext } from "../../contexts/DeveloperContext";
import { Button } from "../Button";
import { IoAddOutline } from "react-icons/io5";
import { Container, Title } from "./styles";

export default function Header() {
  const { handleAdd } = useContext(AuthContext);
  return (
    <Container>
      <Title>
        Developer <span>Registration</span>
      </Title>
      <Button onClick={handleAdd}>
        <IoAddOutline size={22} />
        Adicionar Desenvolvedor
      </Button>
    </Container>
  );
}
