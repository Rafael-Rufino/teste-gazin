import { useContext } from "react";

import { Container, Wrraper } from "./styles";
import { IoTrashBinSharp, IoPencil } from "react-icons/io5";

import { AuthContext } from "../../contexts/DeveloperContext";
import { Props } from "./interface";
import { Button } from "../Button";
import theme from "../../styles/themes";

export function Developer({
  id,
  name,
  gender,
  birthDate,
  age,
  hobby,
  level,
}: Props) {
  const { handleEdit, handleDelete } = useContext(AuthContext);

  return (
    <Container>
      <td>{name}</td>
      <td>{gender}</td>
      <td>{new Intl.DateTimeFormat("pt-BR").format(new Date(birthDate))}</td>
      <td>{age} anos</td>
      <td>{hobby}</td>
      <td>{level}</td>
      <td>
        <Wrraper>
          <Button
            style={{ backgroundColor: theme.colors.green, gap: "4px" }}
            onClick={() =>
              handleEdit(id, name, gender, birthDate, age, hobby, level)
            }
          >
            <IoPencil />
            Editar
          </Button>
          <Button
            style={{ backgroundColor: theme.colors.primary, gap: "4px" }}
            onClick={() => handleDelete(id)}
          >
            <IoTrashBinSharp /> Excluir
          </Button>
        </Wrraper>
      </td>
    </Container>
  );
}
