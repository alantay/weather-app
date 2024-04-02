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
  input{
    all:unset;
    box-sizing: border-box;
  }
  button{
    border:0;
  }

  #root{
    width:100%;
    display: flex;
    justify-content: center;
    font-size: var(--primary-font-size);
  }
  :root{
    /* fonts */
    font-size: 16px; 
    font-family: "Noto Sans", sans-serif;
    font-optical-sizing: auto;

    --primary-font-size: 0.875rem;
    --secondary-font-size: .625rem;

    /* colors */
    --primary-color: #6C40B5; 
    --low-opacity-color: #ffffff33;
    --bg-color: #C196DD;

    --secondary-font-color: #666;


    --search-bar-bg-color: #d6cbeddd;
    --highlight-over-panel-color: #dbd0ed;

    /* search history */
    --history-icon-bg: #fff; 

    
    
    --global-border-radius: .5rem;
    --global-border-radius-1x: 1rem;
    --global-border-radius-2x: 1.25rem;

    --border-stroke: 1px solid #FFFFFF80;


    /* sizing */
    --search-panel-height: 4rem;

  }
  

  body {
    width: 100%;
    background: var(--bg-color);
    padding: 1rem;
    &:after {
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
      z-index: -1;  
    } 

    display: flex;
    justify-content: center;

  }
`;
