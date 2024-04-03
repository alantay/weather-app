import styled from "styled-components";

export default styled.div`
  background-color: var(--low-opacity-color);
  border-radius: var(--global-border-radius-2x);
  padding: 1.5rem 1rem;

  h3 {
    font-weight: 300;
    margin-bottom: 1.5rem;
  }

  .history-wrapper {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

export const HistoryItem = styled.li`
  background-color: var(--low-opacity-color-2);
  padding: 1rem 0.75rem;
  border-radius: var(--global-border-radius-1x);
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  font-weight: 300;

  .time {
    font-size: var(--secondary-font-size);
    [data-theme="dark"] & {
      color: var(--half-transparent-white-color);
    }
  }

  .content-wrapper {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .actions {
    display: flex;
    gap: 0.625rem;
  }

  @media (min-width: 768px) {
    .content-wrapper {
      flex-direction: row;
      flex: 1;
      justify-content: space-between;
      align-items: center;
    }
  }
`;
