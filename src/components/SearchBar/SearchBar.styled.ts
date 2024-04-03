import styled from "styled-components";
import magGlass from "../../assets/main-search-icon.svg";

export default styled.div`
  position: absolute;
  width: 100%;
  top: 1.5rem;
  z-index: 5;
  form {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 0.625rem;
  }
`;

export const SearchButton = styled.button`
  background-image: url(${magGlass});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 60% 60%;
  width: 2.5rem;
  height: 40px;
  background-color: var(--search-btn-bg-color);
  border-radius: var(--global-border-radius);
  transition: background-color 0.3s;
  &:hover {
    cursor: pointer;
    background-color: var(--search-btn-bg-color--hover);
  }
`;
