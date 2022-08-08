import { Container, Content } from "./styles";

import { Developer } from "../Developer";

import { useAxios } from "../../hooks/useAxios";
import { IDeveloper } from "./interface";

export function DeveloperList() {
  const { data } = useAxios("developers");
  console.log(data);
  return (
    <Container>
      <Content>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Gender</th>
              <th>Age</th>
              <th>Birthdate</th>
              <th>Hobby</th>
              <th>Level</th>
              <th />
            </tr>
          </thead>
          <tbody>
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
          </tbody>
        </table>
      </Content>
    </Container>
  );
}
