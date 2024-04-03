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

    --primary-font-size: 1rem;
    --secondary-font-size: .625rem;
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
    --primary-font-color: #000;
    --secondary-font-color: #666;
    --temperature-font-color: #6C40B5;

    /* layout */
    --max-layout-width: 100%;
    --weather-icon-width: 8rem;
    --search-panel-height: 9rem;

    /* search history */
    --icon-bg: #fff; 
    --icon-bg--hover: #efd6ff; 

    /* border */
    --main-panel-border-stroke: 1px solid #FFFFFF80;
    --general-border-stroke: 1px solid #999;

    /* padding */
    --main-panel-padding: 1.25rem 1.5rem;

    /* border-radius */
    --global-border-radius: .5rem;
    --global-border-radius-1x: 1rem;
    --global-border-radius-2x: 1.25rem;

    @media (min-width: 480px) {
      /* slightly bigger phone */

    }


    @media(max-width: 320px){ 
      /* galaxy-fold */
      font-size: .7rem
    }

    @media (min-width: 768px) {
      /* font */
      --temperature-font-size: 5.5rem;
      --secondary-font-size: .875rem;

      /* layout */
      --weather-icon-width: 14rem;
      --max-layout-width: 43.75rem;
      --search-panel-height: 10rem;

      /* padding */
      --main-panel-padding: 2.5rem;

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
      --temperature-font-color: #fff;

      /* border */
      --main-panel-border-stroke: 0;
      --general-border-stroke: 1px solid #666;

       /* search history */
      --icon-bg: transparent; 
      --icon-bg--hover: var(--search-btn-bg-color--hover); 

    }

  }
  

  body {
    width: 100%;
    background: var(--bg-color);
    padding: .5rem 1rem;
    color: var(--primary-font-color);
    transition: background-color .3s ;
    &:after {
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
