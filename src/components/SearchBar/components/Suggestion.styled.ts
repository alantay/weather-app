import styled from "styled-components";

export default styled.ul`
  list-style-type: none;
  background: var(--search-bar-bg-color);
  border-radius: var(--global-border-radius);
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-top: var(--general-border-stroke);
  padding-bottom: 0.6rem;
  li {
    padding: 0.4rem 0.8rem;
    cursor: pointer;
    &:hover {
      background-color: var(--suggestion-hover-color);
    }
  }

  .no-result,
  .is-loading {
    padding: 0.4rem 0.8rem;
    opacity: 0.5;
  }
`;
