import styled from "styled-components";

export default styled.div`
  .weather-details {
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: relative;

    @media (min-width: 768px) {
      grid-template-columns: 12rem 1fr;
    }
  }

  .temperature-wrapper {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }
  .temperature {
    color: var(--temperature-font-color);
    font-size: var(--temperature-font-size);
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

    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
    }
  }

  .weather {
    text-transform: capitalize;
  }
`;
