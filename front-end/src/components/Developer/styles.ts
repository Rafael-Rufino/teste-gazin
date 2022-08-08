import styled from "styled-components";

import theme from "../../styles/themes";

export const Container = styled.tr`
  td {
    padding: 1rem 2rem;
    border: 0;
    color: ${theme.colors.heading};
    background: ${theme.colors.black};
  }
`;

export const Wrraper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;
