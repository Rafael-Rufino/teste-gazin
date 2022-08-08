import styled from "styled-components";
import theme from "../../styles/themes";

export const Container = styled.header`
  display: flex;
  width: 100vw;
  height: 80px;
  padding: 30px 20px;
  justify-content: space-between;
  align-items: center;
  background: ${theme.colors.background};
  border-bottom: 1px solid ${theme.colors.secondary};
  font-size: 1rem;
  font-weight: bold;

  h2 {
    color: ${theme.colors.heading};
    span {
      color: ${theme.colors.secondary};
    }
  }
`;
