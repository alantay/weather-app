import styled from "styled-components";

export default styled.div`
  .weather-details {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .temperature-wrapper {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }
  .temperature {
    color: var(--primary-color);
    font-size: 4.5rem;
    font-weight: 700;
    line-height: 1;
  }

  .city-country {
    font-weight: 700;
    color: var(--secondary-font-color);
  }

  .other-details-wrapper {
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: flex-start;
    flex-flow: column-reverse;
    color: var(--secondary-font-color);
    gap: 0.4rem;
    font-weight: 300;
  }
`;
