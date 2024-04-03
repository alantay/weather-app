import styled from "styled-components";

interface WeatherDetailsProps {
  $weatherIcon?: string; // Assuming weatherIcon is a URL string
}
const WeatherDetails = styled.div<WeatherDetailsProps>`
  &::before {
    /* Weather Icon Pseudo element */
    content: "";
    position: absolute;
    top: var(--weather-icon-top-offset);
    right: 0.8rem;
    background-image: url(${(props) => props.$weatherIcon});
    background-size: contain;
    background-repeat: no-repeat;
    width: var(--weather-icon-width);
    aspect-ratio: 1/1;
  }

  .weather-details {
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: relative;

    @media (min-width: 768px) {
      grid-template-columns: 19rem 1fr;
    }
  }
`;

export const TemperatureWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

export const Temperature = styled.span`
  color: var(--temperature-font-color);
  font-size: var(--temperature-font-size);
  font-weight: 700;
  line-height: 1;
`;

export const City = styled.span`
  font-weight: 700;
  color: var(--secondary-font-color);
`;

export const WeatherTypeDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: flex-start;
  flex-flow: column-reverse;
  color: var(--secondary-font-color);
  gap: 0.6rem;
  font-weight: var(--font-weight-thin);

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }

  .weather {
    text-transform: capitalize;
  }
`;

export default WeatherDetails;
