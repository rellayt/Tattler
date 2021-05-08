import styled from 'styled-components';

export const LoadingWrapper = styled.div`
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  overflow-y: hidden;
  width: 100%;
  height: 100%;
`;

export const LoadingMessage = styled.div`
  width: ${({ width }) => `${width}vw`};
  height: ${({ height }) => `${height}px`};
  border-radius: 15px;
  margin: 6px 0;
`;
