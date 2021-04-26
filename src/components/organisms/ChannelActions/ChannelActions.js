import React, { useState } from 'react';
import { ButtonWrapper, InputWrapper, Wrapper } from './ChannelActions.styles';
import { Input } from '../../atoms/TextField/TextField';
import { Button } from '../../atoms/Button/Button';

const ChannelActions = ({ sendMessage }) => {
  const [message, setMessage] = useState('');
  const handleChange = (event) => setMessage(event.target.value);
  const handleClick = async () => {
    const response = await sendMessage(1, message);
    console.log(response);
    setMessage('');
  };

  return (
    <Wrapper>
      <InputWrapper>
        <Input
          onChange={handleChange}
          value={message}
          variant={'outlined'}
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
