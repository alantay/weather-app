import styled from "styled-components";

export default styled.button`
  background-color: var(--icon-bg);
  border-radius: 100%;
  padding: 0.25rem;
  width: 2rem;
  height: 2rem;
  box-shadow: 0px 4px 12px 0px #0000001a;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s;

  svg {
    width: 0.8rem;
    fill: var(--secondary-font-color);
  }

  &:hover {
    background-color: var(--icon-bg--hover);
  }

  [data-theme="dark"] & {
    background: var(--icon-bg);
    border: 2px solid var(--half-transparent-white-color);
    svg {
      fill: var(--half-transparent-white-color);
    }

    &:hover {
      background-color: var(--icon-bg--hover);
    }
  }
`;
