import styled from "styled-components";
import theme from "../../styles/themes";

export const Spinner = styled.div`
  display: flex;
  justify-content: center;
  width: 100px;
  height: 100px
  -webkit-mask: radial-gradient(farthest-side, #0000 cacl(100% - 10x), #0000);
  margin: 200px auto;
  border-radius: 50%;
  box-shadow: inset 1px 1px 1px 1px ${theme.colors.secondary};
  animation: spin 0.8s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(1turn);
    }
  }
`;
