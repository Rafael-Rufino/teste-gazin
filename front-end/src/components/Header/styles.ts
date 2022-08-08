import styled from "styled-components";
import theme from "../../styles/themes";

export const Container = styled.header`
  display: flex;
  width: 100%;
  height: 80px;
  padding: 30px 40px;
  justify-content: space-between;
  align-items: center;
  background: ${theme.colors.background};
  border-bottom: 1px solid ${theme.colors.secondary};
`;
export const Title = styled.h1`
  color: ${theme.colors.heading};
  font-size: 1.5rem;
  span {
    color: ${theme.colors.secondary};
  }
`;
