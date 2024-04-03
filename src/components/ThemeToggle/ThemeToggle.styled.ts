import styled from "styled-components";

export default styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background: transparent;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 1rem;
  color: var(--primary-font-color);
  opacity: 0.5;
  transition: opacity var(--transition-duration);
  &:hover {
    opacity: 1;
  }
`;
