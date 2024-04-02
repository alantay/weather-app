import styled from "styled-components";

export default styled.div`
  background-color: var(--low-opacity-color);
  border-radius: var(--global-border-radius-2x);
  padding: 1.5rem 1rem;

  h3 {
    font-weight: 400;
    margin-bottom: 1.5rem;
  }

  .history-wrapper {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .history {
    background-color: var(--low-opacity-color);
    padding: 0.75rem 0.5rem;
    border-radius: var(--global-border-radius-1x);
    display: flex;
    justify-content: space-between;
    :first-child {
      .time {
        font-size: var(--secondary-font-size);
      }
    }

    .actions {
      display: flex;
      gap: 0.625rem;
      button {
        background: var(--history-icon-bg);
        border-radius: 100%;
        padding: 0.25rem;
        width: 2rem;
        height: 2rem;
        box-shadow: 0px 4px 12px 0px #0000001a;
        cursor: pointer;

        img {
        }
      }
    }
  }
`;
