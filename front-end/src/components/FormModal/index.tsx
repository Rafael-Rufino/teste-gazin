import { useContext } from "react";
import { AuthContext } from "../../contexts/DeveloperContext";

import { Button } from "../Button";

import {
  Overlay,
  Header,
  Container,
  FormContainer,
  InputGroup,
  FormMain,
  Footer,
  CloseIcon,
  CheckIcon,
} from "./styles";

export default function FormModal() {
  const {
    handleClose,
    name,
    gender,
    birthDate,
    age,
    hobby,
    level,
    handleSubmit,
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
            <InputGroup>
              <label htmlFor="level">Nivel</label>
              <input
                id="level"
                type="text"
                placeholder="Digite seu Nivel"
                value={}
                onChange={() => {}}
              />
            </InputGroup>

            <InputGroup>
              <label htmlFor="name">Nome</label>
              <input
                id="name"
                type="text"
                placeholder="Digite seu Nome"
                value={}
                onChange={() => {}}
              />
            </InputGroup>

            <InputGroup>
              <label htmlFor="gender">Sexo</label>
              <input
                id="gender"
                type="text"
                placeholder="Digite seu gênero"
                value={gender}
                onChange={() => {}}
              />
            </InputGroup>

            <InputGroup>
              <label htmlFor="birthDate">Data Nascimento</label>
              <input
                id="birthDate"
                type="date"
                placeholder="Digite sua Data Nascimento"
                value={}
                onChange={() => {}}
              />
            </InputGroup>

            <InputGroup>
              <label htmlFor="age">Idade</label>
              <input
                id="age"
                type="text"
                placeholder="Digite sua Idade"
                value={}
                onChange={() => {}}
              />
            </InputGroup>

            <InputGroup>
              <label htmlFor="hobby">Hobby</label>
              <input
                id="hobby"
                type="text"
                placeholder="Digite seu Hobby"
                value={}
                onChange={() => {}}
              />
            </InputGroup>
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
