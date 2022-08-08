import { Container, Wrapper } from "./styles";

import { Developer } from "../Developer";

import { useAxios } from "../../hooks/useAxios";

type IDeveloper = {
  _id: string;
  level: string;
  name: string;
  gender: string;
  age: string;
  birthDate: string;
  hobby: string;
};

export function DeveloperList() {
  const { data } = useAxios("developers");

  return (
    <Container>
      <Wrapper>
        {data?.developers?.map((developer: IDeveloper) => (
          <Developer
            key={developer._id}
            id={developer._id}
            level={developer.level}
            name={developer.name}
            age={developer.age}
            hobby={developer.hobby}
            gender={developer.gender}
            birthDate={developer.birthDate}
          />
        ))}
      </Wrapper>
    </Container>
  );
}
