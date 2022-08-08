import styled from "styled-components";
import theme from "../../styles/themes";

export const Container = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 40px 0px;

  background-color: ${theme.colors.secondary};

  strong {
    color: ${theme.colors.heading};
  }
`;
