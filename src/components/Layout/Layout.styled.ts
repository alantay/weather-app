import styled from "styled-components";

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
    margin-top: 2rem;
  }
`;
