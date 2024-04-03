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
  }
  :root{
    /* fonts */
    font-size: 62.5%;
    font-family: "Noto Sans", sans-serif;
    font-optical-sizing: auto;

    --font-weight-thin: 300;

    --primary-font-size: 1.6rem; /* Equivalent to 16px */
    --secondary-font-size: 1rem; /* Equivalent to 10px */
    --temperature-font-size: 4.5rem;

    /* colors */
    --bg-color: #C196DD;

    --primary-color: #6C40B5; 
    --low-opacity-color: #ffffff33;
    --low-opacity-color-2: #FFFFFF66;

    --half-transparent-white-color: #FFFFFF80;

    --search-btn-bg-color: var(--primary-color);
    --search-btn-bg-color--hover:#4b2885;
    --search-bar-bg-color: #d6cbeddd;

    --suggestion-hover-color: #dbd0ed;

    /* font colors */
    --primary-font-color: #222;
    --secondary-font-color: #666;
    --temperature-font-color: #6C40B5;

    /* layout */
    --max-layout-width: 100%;
    --weather-icon-width: 12.8rem;
    --search-panel-height: 14.4rem;

    /* border */
    --main-panel-border-stroke: 1px solid #FFFFFF80;
    --general-border-stroke: 1px solid #999;

    /* padding */
    --main-panel-padding: 2rem 2.4rem;

    /* border-radius */
    --global-border-radius: .8rem;
    --global-border-radius-1x: 1.6rem;
    --global-border-radius-2x: 2rem;

    /* transition */
    --transition-duration: .3s;

    --weather-icon-top-offset: calc(var(--weather-icon-width) / 2 * -1);


    /* Layout */
    --first-visit-content-margin-top: -7rem;
    --first-visit-content-font-size: 2.5rem;
    --first-visit-content-font-color: #22222266;

    /* search history */
    --icon-bg: #fff; 
    --icon-bg--hover: #efd6ff; 

     

    @media (min-width: 480px) {
      /* slightly bigger phone */

    }

    @media (min-width: 768px) {
      /* font */
      --temperature-font-size: 9rem;
      --secondary-font-size: 1.4rem;

      /* layout */
      --weather-icon-width: 27rem;
      --max-layout-width: 70rem;
      --search-panel-height: 18rem;

      /* padding */
      --main-panel-padding: 4rem;

      --weather-icon-top-offset: calc(var(--weather-icon-width) / 3 * -1);

      /* Layout */
      --first-visit-content-margin-top: -11rem;
      --first-visit-content-font-size: 4rem;

    }

    [data-theme="dark"]{

      --primary-font-color: #fff;
      --secondary-font-color: #fff;
      --search-btn-bg-color: #28124c;
      

      /* colors */
      --bg-color: #4436ad;
      --low-opacity-color: #00000033;
      --low-opacity-color-2: #00000066;

      --search-bar-bg-color: #372b6bdd;

      --suggestion-hover-color: #cccccc22;


      /* font colors */
      --temperature-font-color: #ffffff;

      /* border */
      --main-panel-border-stroke: 0;
      --general-border-stroke: 1px solid #666;

       /* search history */
      --icon-bg: transparent; 
      --icon-bg--hover: var(--search-btn-bg-color--hover); 

      /* Layout */
      --first-visit-content-font-color: #ffffff66;

    }

  }
  

  body {
    font-size: var(--primary-font-size);
    width: 100%;
    background: var(--bg-color);
    padding: .8rem 1.6rem;
    color: var(--primary-font-color);
    transition: background-color var(--transition-duration) ;
    &:after { /* adding background image as psudo element as we need to control the opacity */
      content: '';
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      opacity: 0.6;
      background-image:linear-gradient(transparent,transparent, var(--bg-color)), url(${lightCloud});
      background-repeat: no-repeat;
      background-position: 50% 0;
      background-size: cover;
      z-index: -1;  
    }

    &[data-theme="dark"]{

      &:after {
        background-image:linear-gradient(transparent,transparent, var(--bg-color)), url(${lightCloud});
        opacity: 0.3;
      }
      
    }
    display: flex;
    justify-content: center;




  }
  
`;
