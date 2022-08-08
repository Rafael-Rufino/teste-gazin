import styled from "styled-components";
import { IoClose, IoCheckmark } from "react-icons/io5";
import theme from "../../styles/themes";

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Container = styled.div`
  background: ${theme.colors.input};
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 600px;
  padding: 32px 48px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 40px;
  padding-bottom: 20px;
  background-color: transparent;

  strong {
    color: ${theme.colors.text};
    font-size: 1.1rem;
  }

  button {
    background-color: transparent;
    padding: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const FormContainer = styled.form`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 15px;
`;
export const FormMain = styled.main`
  margin: auto 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  label {
    font-size: 1rem;
    color: ${theme.colors.text};
  }

  input {
    border: none;
    color: ${theme.colors.black};
    background-color: ${theme.colors.input};
    border: 1px solid ${theme.colors.secondary};
    border-radius: 4px;
    height: 40px;
    width: 100%;
    padding-left: 10px;
  }
`;
export const Footer = styled.footer`
  display: flex;
  justify-content: center;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${theme.colors.secondary};
    color: ${theme.colors.heading};
    border: none;
    border-radius: 8px;
    height: 40px;
    width: 100%;
    font-size: 1.2rem;
    transition: opacity 0ms.2s;
    &:hover {
      filter: brightness(0.9);
    }
  }
`;
export const CloseIcon = styled(IoClose)`
  height: 25px;
  width: 25px;
  color: ${theme.colors.black};

  &:hover {
    filter: brightness(0.9);
    color: ${theme.colors.text};
  }
`;
export const CheckIcon = styled(IoCheckmark)`
  height: 25px;
  width: 25px;
`;
