import styled from "styled-components";
import magGlass from "../../assets/mag-glass.png";

export default styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  form {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 0.625rem;

    button {
      background-image: url(${magGlass});
      background-repeat: no-repeat;
      background-position: 50% 50%;
      background-color: red;
      width: 2.5rem;
      height: 40px;
      background-color: var(--primary-color);
      border-radius: var(--global-border-radius);
      &:hover {
        cursor: pointer;
      }
    }
  }
`;
