import styled from "styled-components";

export default (props: any) => {
  return (
    <Wrapper {...props}>
      <InputStyled {...props} />
    </Wrapper>
  );
};

export const Wrapper = styled.div`
  position: relative;
  background: var(--search-bar-bg-color);
  border-radius: var(--global-border-radius);
  height: 2.5rem;
  padding: 0.5rem 0.65rem 0.5rem 0.65rem;
  &.showSuggestion {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
`;

export const InputStyled = styled.input.attrs({
  type: "text",
  id: "search-input",
})`
  position: relative;
  width: 100%;
  height: 100%;

  &::before {
    content: "Country";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    color: black;
    background: red;
    z-index: 1;
  }
`;
