import styled from 'styled-components';

export const Card = styled.div`
  background: ${({ theme: { colors } }) => colors.white};
  box-shadow: ${({ theme: { boxShadow } }) => boxShadow.basic};
  border-radius: 20px;
  padding: 40px 35px;
  width: 60vw;
  display: grid;
  grid-template-columns: 40% 60%;
  grid-template-rows: 90px 75px 1fr;
  margin: 20px;
  @media (max-width: 1440px) {
    width: 75vw;
    padding: 30px 25px;
  }
  @media (max-width: 768px) {
    width: 94vw;
    grid-template-columns: 1fr;
    grid-template-rows: 60px 75px 1fr;
    padding: 20px 15px;
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    height: 90%;
    grid-template-rows: 55px 95px 1fr;
    padding: 15px 10px;
  }
`;

export const Heading = styled.div`
  font-size: ${({ theme: { fontSize } }) => fontSize.xxl};
  color: ${({ theme: { colors } }) => colors.grassGreen};
  text-shadow: 0 1px 0 ${({ theme: { colors } }) => colors.grey};
  font-weight: 500;
  justify-self: center;
  grid-column: 1/3;
`;

export const UnderHeading = styled.div`
  font-size: ${({ theme: { fontSize } }) => fontSize.xl};
  grid-column: 1/2;
  align-self: center;
  justify-self: flex-start;
  &::after {
    display: block;
    content: '';
    margin-top: 4px;
    height: 3px;
    border-radius: 10px;
    background: ${({ theme: { colors } }) => colors.grassGreen};
  }
  @media (max-width: 768px) {
    grid-column: 1/2;
    margin: 0 auto;
  }
`;

export const Content = styled.div`
  font-size: ${({ theme: { fontSize } }) => fontSize.m};
  grid-column: 1/2;
  @media (max-width: 768px) {
    grid-column: 1/2;
    grid-row: 3/4;
    p {
      text-align: center;
    }
  }
`;
export const Paragraph = styled.p`
  margin: 5px;
`;
export const List = styled.ul`
  font-size: ${({ theme: { fontSize } }) => fontSize.m};
  margin: 15px 0;
  list-style-type: circle;
`;
export const Item = styled.li`
  margin: 7px 0;
`;

export const GraphicSection = styled.div`
  grid-column: 2/3;
  grid-row: 2/4;
  padding: 0 0 0 15px;
  @media (max-width: 768px) {
    grid-column: 1/2;
    grid-row: 4/5;
    padding: 0;
    transform: translateY(-25px);
  }
`;
export const Graphic = styled.div`
  transform: scale(0.8) rotateY(-20deg) rotateX(30deg) translateZ(30px);
  transform-origin: 50% 50%;
  transform-style: preserve-3d;
  transition: 0.5s ease;
  background: ${({ theme: { colors } }) => colors.white};
  border: 3px solid ${({ theme: { colors } }) => colors.grassGreen};
  border-radius: 15px;
  height: 350px;
  z-index: 1;
  &:hover {
    transform: scale(0.85) rotateY(-5deg) rotateX(5deg) translateZ(3px);
    transition: 0.5s ease;
    box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.04);
    &::after {
      width: 90%;
      height: 90%;
      z-index: -5;
      background: ${({ theme: { colors } }) => colors.lightGrey};
      transform: translate3d(0, -107%, -3.5rem);
      box-shadow: none;
    }
  }

  &::after {
    content: '';
    display: block;
    background: ${({ theme: { colors } }) => colors.grassGreen};
    width: 102%;
    height: 102%;
    border-radius: 15px;
    transform: translate3d(0, -100%, -3.5rem);
    transition: 0.6s ease;
    box-shadow: 0 7px 25px 5px rgba(0, 0, 0, 0.15);
  }
`;

export const GraphicHeading = styled.div`
  background: ${({ theme: { colors } }) => colors.lightGrey};
  font-size: ${({ theme: { fontSize } }) => fontSize.l};
  color: ${({ theme: { colors } }) => colors.grassGreen};
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  font-weight: 600;
  height: 50px;
  border-radius: 13px 13px 0 0;
  display: flex;
  align-items: center;
  padding-left: 25px;
`;

export const GraphicMessageWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  height: 85.5%;
`;

export const GraphicMessage = styled.div`
  width: 100%;
  height: 35px;
  position: relative;
  margin: 7px 0;
  &::after {
    content: '';
    position: absolute;
    right: ${({ myMessage }) => (myMessage ? 0 : 'auto')};
    margin: 0 10px;
    border-radius: ${({ myMessage }) => (myMessage ? '15px 15px 2px 15px' : '15px 15px 15px 2px')};
    height: 35px;
    background: ${({ myMessage, theme: { colors } }) => (myMessage ? colors.grassGreen : colors.grey)};
    box-shadow: inset 0 0 1px 2px rgba(0, 0, 0, 0.02);
    width: 40%;
  }
`;
