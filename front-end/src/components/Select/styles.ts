import styled from "styled-components";

import theme from "../../styles/themes";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  select {
    border: none;
    color: ${theme.colors.black};
    background-color: ${theme.colors.input};
    border: 1px solid ${theme.colors.secondary};
    border-radius: 4px;
    height: 40px;
    width: 100%;
    padding-left: 10px;
    margin-top: 4px;
  }
`;

export const Label = styled.label`
  font-size: 1rem;
  color: ${theme.colors.text};
`;
