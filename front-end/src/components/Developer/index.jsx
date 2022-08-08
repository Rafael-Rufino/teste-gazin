import { useContext } from "react";

import { Container, ButtonArea, Button } from "./styles";
import { IoTrashBinSharp, IoPencil } from "react-icons/io5";

import { AuthContext } from "../../contexts/DeveloperContext";

export function Developer({ id, name, gender, birthDate, age, hobby, level }) {
  const { handleEdit, handleDelete } = useContext(AuthContext);

  return (
    <li>
      <Container>
        <h2>{name}</h2>
        <h2>{gender}</h2>
        <h2>{birthDate}</h2>
        <h2>{age}</h2>
        <h2>{hobby}</h2>
        <h2>{level}</h2>
        <ButtonArea>
          <Button
            onClick={() =>
              handleEdit(id, name, gender, birthDate, age, hobby, level)
            }
          >
            <IoPencil />
          </Button>
          <Button onClick={() => handleDelete(id)}>
            <IoTrashBinSharp />
          </Button>
        </ButtonArea>
      </Container>
    </li>
  );
}
