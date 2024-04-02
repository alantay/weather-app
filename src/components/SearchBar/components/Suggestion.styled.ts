import styled from "styled-components";

export default styled.ul`
  list-style-type: none;
  background: var(--search-bar-bg-color);
  border-radius: var(--global-border-radius);
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-top: 1px solid #999;
  li {
    padding: 0.25rem 0.5rem;
    &:hover {
      background-color: #dbd0ed;
    }
  }
`;
