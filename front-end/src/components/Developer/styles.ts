import styled from "styled-components";
import theme from "../../styles/themes";

export const Container = styled.div`
  background: ${theme.colors.heading};
  padding: 10px;
  height: 200px;
  width: 250px;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.08);
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;

  h2 {
    color: ${theme.colors.black};
    font-size: 1rem;
    text-align: center;
  }
  a {
    border-left: 3px solid ${theme.colors.text};
    padding-left: 10px;
    max-width: 230px;
    color: ${theme.colors.text};
    font-style: italic;
    align-self: start;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: opacity 0.2s ease-out;

    &:hover {
      opacity: 0.8;
    }
  }
`;
export const ButtonArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;
export const Button = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: opacity 0.2s ease-out;

  &:hover {
    opacity: 0.8;
  }
`;
