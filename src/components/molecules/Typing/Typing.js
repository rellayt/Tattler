import React from 'react';
import { TypingWrapper } from './Typing.styles';
import { TypingDot } from '../../atoms/TypingDot/TypingDot';

const Typing = () => (
  <TypingWrapper>
    <TypingDot />
    <TypingDot />
    <TypingDot />
  </TypingWrapper>
);

export default Typing;
