import { useContext } from "react";
import { AuthContext } from "../../contexts/DeveloperContext";
import { Button } from "../Button";
import { Input } from "../Input";

import {
  Overlay,
  Header,
  Container,
  FormContainer,
  FormMain,
  Footer,
  CloseIcon,
  CheckIcon,
} from "./styles";

export default function FormModal() {
  const {
    name,
    gender,
    birthDate,
    age,
    hobby,
    level,
    handleClose,
    handleSubmit,
    handleName,
    handleLevel,
    handleGender,
    handleBrthDate,
    handleAge,
    handleHobby,
  } = useContext(AuthContext);
  return (
    <Overlay>
      <Container>
        <Header>
          <strong>Adicionar desenvolvedor</strong>
          <Button onClick={handleClose} type="button">
            <CloseIcon />
          </Button>
        </Header>
        <FormContainer onSubmit={handleSubmit}>
          <FormMain>
            <Input
              label="Nivel"
              id="level"
              type="text"
              value={level}
              placeholder="Digite seu Nivel"
              onChange={handleLevel}
            />
            <Input
              label="Nome"
              id="name"
              type="text"
              placeholder="Digite seu Nome"
              value={name}
              onChange={handleName}
            />
            <Input
              label="Sexo"
              id="gender"
              type="text"
              placeholder="Digite seu gênero"
              value={gender}
              onChange={handleGender}
            />
            <Input
              label="Data Nascimento"
              id="birthDate"
              type="date"
              placeholder="Digite sua Data Nascimento"
              value={birthDate}
              onChange={handleBrthDate}
            />

            <Input
              label="Idade"
              id="age"
              type="text"
              placeholder="Digite sua Idade"
              value={age}
              onChange={handleAge}
            />

            <Input
              label="Hobby"
              id="hobby"
              type="text"
              placeholder="Digite seu Hobby"
              value={hobby}
              onChange={handleHobby}
            />
          </FormMain>
          <Footer>
            <Button type="submit">
              <CheckIcon />
              Salvar
            </Button>
          </Footer>
        </FormContainer>
      </Container>
    </Overlay>
  );
}
