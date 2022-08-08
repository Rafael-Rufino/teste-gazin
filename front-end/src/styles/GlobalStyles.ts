import { createGlobalStyle } from "styled-components";
import theme from "./themes";

export default createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  --webkit-font-smoothing: antialiased;
  --moz-osx-font-smoothing: grayscale;
}

#root{
  height: 100vh;
  /* max-width: 1020px;
    margin: 0 auto;
    padding: 0 20px 50px; */
}

ul, li{
  list-style: none;
}


body{
  font-size: 14px sans-serif;
  background-color: ${theme.colors.background};
}

button{
    cursor: pointer;
  }

`;
