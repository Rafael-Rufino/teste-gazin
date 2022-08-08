import styled from "styled-components";

import theme from "../../styles/themes";

export const Container = styled.button`
  display: flex;
  justify-content: center;
  background: ${theme.colors.secondary};
  color: white;
  height: 35px;
  font-weight: bold;
  font-size: 1rem;
  text-align: center;
  padding: 8px;
  border-radius: 4px;
  border: none;
  margin-right: 20px;
  &:hover {
    filter: brightness(0.9);
  }
`;