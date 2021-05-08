import React, { useEffect, useState } from 'react';
import { Wrapper, InputWrapper } from './PrivateMessagesAction.styles';
import { ButtonWrapper } from '../ChannelActions/ChannelActions.styles';
import { Input } from '../../atoms/TextField/TextField';
import { Button } from '../../atoms/Button/Button';

const PrivateMessagesAction = ({ active, sendMessage, startTyping, endTyping, loading }) => {
  const [message, setMessage] = useState('');

  const handleClick = () => {
    sendMessage(message);
    endTyping();
    setMessage('');
  };

  const handleChange = ({ target: { value } }) => {
    setMessage(value);
    startTyping();
  };

  useEffect(() => {
    const timeout = setTimeout(() => endTyping(), 1500);
    return () => clearTimeout(timeout);
  }, [endTyping, message]);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleClick();
      e.preventDefault();
      e.target.blur();
    }
  };

  const handleOnBlur = () => {
    endTyping();
  };
  return (
    <Wrapper active={active}>
      <InputWrapper>
        <Input
          onChange={handleChange}
          disabled={loading}
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
        <Button onClick={handleClick} disabled={message.length === 0 || loading}>
          Send
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default PrivateMessagesAction;
