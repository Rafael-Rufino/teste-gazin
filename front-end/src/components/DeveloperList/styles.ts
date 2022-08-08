import styled from "styled-components";
import theme from "../../styles/themes";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2.5rem 1rem;
`;

export const Content = styled.div`
  max-width: 1120px;
  width: 100%;
  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    tr {
      background: ${theme.colors.secondary};
    }

    th {
      color: ${theme.colors.heading};
      font-weight: 400;
      text-align: left;
      padding: 1rem 2rem;
      line-height: 1.5rem;
    }
  }
`;
