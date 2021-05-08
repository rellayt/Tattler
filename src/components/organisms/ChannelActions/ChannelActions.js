import React, { useEffect, useState } from 'react';
import { ButtonWrapper, InputWrapper, Wrapper } from './ChannelActions.styles';
import { Input } from '../../atoms/TextField/TextField';
import { Button } from '../../atoms/Button/Button';

const ChannelActions = ({ sendMessage, startTyping, endTyping }) => {
  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    setMessage(event.target.value);
    startTyping();
  };

  const handleClick = () => {
    sendMessage(message);
    endTyping();
    setMessage('');
  };

  useEffect(() => {
    const timeout = setTimeout(() => endTyping(), 1450);
    return () => clearTimeout(timeout);
  }, [endTyping, message]);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleClick();
      e.preventDefault();
      e.target.blur();
    }
  };

  const handleOnBlur = () => endTyping();

  return (
    <Wrapper>
      <InputWrapper>
        <Input
          onChange={handleChange}
          value={message}
          variant={'outlined'}
          onKeyPress={handleKeyPress}
          onBlur={handleOnBlur}
          multiline
          rows={2}
          maxrows={2}
          inputProps={{ maxLength: 300 }}
        />
      </InputWrapper>
      <ButtonWrapper>
        <Button onClick={handleClick} disabled={message.length === 0}>
          Send
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default ChannelActions;
