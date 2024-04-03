import styled from "styled-components";

export default styled.ul`
  list-style-type: none;
  background: var(--search-bar-bg-color);
  border-radius: var(--global-border-radius);
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-top: var(--general-border-stroke);
  li {
    padding: 0.25rem 0.5rem;
    cursor: pointer;
    &:hover {
      background-color: var(--suggestion-hover-color);
    }
  }

  .no-result {
    padding: 0.25rem 0.5rem;
  }
`;
