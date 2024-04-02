import { createGlobalStyle } from "styled-components";
import lightCloud from "./assets/light-cloud-desktop.png";

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root{
  --primary-color: #6C40B5;

}

body {
  background-color: hsl(0, 0%, 100%);
  color: hsl(0, 1%, 16%);
  font-family: monospace;
  overflow-x: hidden;

  background-image: url(${lightCloud});
}
`;
