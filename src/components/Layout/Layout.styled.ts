import styled from "styled-components";
import WeatherIcon from "../../assets/weather-icon.svg";

export default styled.div`
  width: 100%;
  max-width: var(--max-layout-width);
  position: relative;
  padding-top: var(--search-panel-height);
  padding-bottom: 3rem;
`;

export const MainPanel = styled.div`
  background-color: var(--low-opacity-color);
  border: var(--main-panel-border-stroke);
  border-radius: var(--global-border-radius-2x);
  padding: var(--main-panel-padding);
  position: relative;
  > * + * {
    margin-top: 1.25rem;
  }

  &::before {
    content: "";
    position: absolute;
    top: calc(var(--weather-icon-width) / 3 * -1);
    right: 0.5rem;
    background-image: url(${WeatherIcon});
    background-size: cover;
    width: var(--weather-icon-width);
    aspect-ratio: 1/1;
  }
`;
