import styled from "styled-components";

export default styled.div`
  background-color: var(--low-opacity-color);
  border-radius: var(--global-border-radius-2x);
  padding: 2.4rem 1.6rem;

  h3 {
    font-weight: var(--font-weight-thin);
    margin-bottom: 2.4rem;
  }

  /* .history-wrapper {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  } */
`;

export const HistoryListItem = styled.li`
  background-color: var(--low-opacity-color-2);
  padding: 1.6rem 1.2rem;
  border-radius: var(--global-border-radius-1x);
  display: flex;
  justify-content: space-between;
  gap: 1.6rem;

  /* .time {
    font-size: var(--secondary-font-size);
    [data-theme="dark"] & {
      color: var(--half-transparent-white-color);
    }
  } */

  .content-wrapper {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }

  .actions {
    display: flex;
    gap: 1rem;
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

export const Time = styled.div`
  font-size: var(--secondary-font-size);
  [data-theme="dark"] & {
    color: var(--half-transparent-white-color);
  }
`;

export const City = styled.div``;

export const HistoryListing = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;
