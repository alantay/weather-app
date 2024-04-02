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
  font-size: 62.5%;
  --primary-color: #6C40B5;

}

body {
  font-size: 1.6rem;
  font-family: monospace;
  overflow-x: hidden;
  background: radial-gradient(39.17% 100.27% at 27.92% 78.78%, #C196DD 0%, #8D71D0 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;


  &:before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.6;
    background-image:url(${lightCloud});
    background-repeat: no-repeat;
    background-position: 50% 0;
    background-size: cover;
    
  }
  display: flex;
  justify-content: center;


  @media only screen and (max-width: 768px) {
    padding: 1rem;
  }
}
`;
