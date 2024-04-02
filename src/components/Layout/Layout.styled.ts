import styled from "styled-components";

export default styled.div`
  width: max(100%, 30rem);
  max-width: 30rem;
  position: relative;
  padding-top: var(--search-panel-height);

  .main-panel {
    background-color: var(--low-opacity-color);
    border: var(--border-stroke);
    border-radius: var(--global-border-radius-2x);
    padding: 1.25rem 1.5rem;
    > * + * {
      margin-top: 1.25rem;
    }
  }
`;
