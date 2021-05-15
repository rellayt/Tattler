import styled from 'styled-components';

export const Wrapper = styled.div`
  background: ${({ theme: { colors } }) => colors.white};
  border-radius: 15px 0 0 0;
  .MuiTabs-indicator {
    background-color: ${({ theme: { colors } }) => colors.white};
  }
  .MuiTabs-root {
    border-radius: 15px 0 0 0;
  }
  .MuiTab-textColorInherit.Mui-Selected,
  .MuiTouchRipple-root {
    color: ${({ theme: { colors } }) => colors.grassGreen};
  }

  .MuiTab-textColorInherit.Mui-selected {
    transition: ease 300ms;
    color: ${({ theme: { colors } }) => colors.white};
    background: ${({ theme: { colors } }) => colors.grassGreen};
  }
  .PrivateTabIndicator-colorSecondary-7 {
    background-color: ${({ theme: { colors } }) => colors.white};
  }
  .MuiTabs-flexContainer {
    height: 100%;
  }
  @media (min-width: 600px) {
    .MuiTab-root {
      min-width: 110px;
    }
  }
  @media (max-width: 768px) {
    .MuiTab-root {
      min-width: 40px;
    }
  }
  @media (max-width: 480px) {
    .MuiTab-root {
      min-width: 35px;
    }
  }
`;
