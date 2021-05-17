import styled from 'styled-components';

export const Wrapper = styled.div`
  transform: translate(-6px, -6px);
  z-index: 5;

  .MuiBadge-badge {
    background: ${({ theme: { colors } }) => colors.white};
    color: ${({ theme: { colors } }) => colors.grassGreen};
    border: 2px solid ${({ theme: { colors } }) => colors.grassGreen};
    font-size: ${({ theme: { fontSize } }) => fontSize.s};
    font-weight: 600;
    padding: 0 4px;
    z-index: 9999;
    transform: scale(1) translate(-41%, 180%);
  }
  .MuiFab-primary {
    color: transparent;
    background-color: transparent;
  }
  .MuiFab-root {
    box-shadow: none;
  }
  .MuiSpeedDialAction-fab {
    box-shadow: ${({ theme: { boxShadow } }) => boxShadow.basicHard};
    &:hover {
      transform: scale(1.15);
      opacity: 1;
      background: ${({ theme: { colors } }) => colors.white};
      color: ${({ theme: { colors } }) => colors.grassGreen};
      transition: 200ms all ease;
    }
  }
  .MuiFab-label {
    width: 75%;
  }
  .MuiSpeedDialAction-tooltipPlacementLeft .MuiSpeedDialAction-staticTooltipLabel {
    min-width: 420px;
  }
  .MuiSpeedDial-actions {
    row-gap: 20px;
    z-index: 5;
  }
  .MuiSpeedDial-directionDown .MuiSpeedDial-actions {
    margin-top: -40px;
  }
  .MuiSpeedDialAction-staticTooltipLabel {
    color: ${({ theme: { colors } }) => colors.darkGrey};
    font-size: ${({ theme: { fontSize } }) => fontSize.m};
    background: ${({ theme: { colors } }) => colors.white};
    box-shadow: ${({ theme: { boxShadow } }) => boxShadow.basicHard};
    border-radius: 15px;
    padding: 4px 16px;
    cursor: pointer;
  }
`;
