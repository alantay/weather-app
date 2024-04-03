import styled from "styled-components";
import magGlass from "../../assets/main-search-icon.svg";

export default styled.div`
  position: absolute;
  width: 100%;
  top: 2.4rem;
  z-index: 5;
  form {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 1rem;
  }
`;

export const SearchButton = styled.button`
  background-image: url(${magGlass});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 60% 60%;
  width: 4rem;
  height: 4rem;
  background-color: var(--search-btn-bg-color);
  border-radius: var(--global-border-radius);
  transition: background-color var(--transition-duration);
  &:hover {
    cursor: pointer;
    background-color: var(--search-btn-bg-color--hover);
  }
`;
