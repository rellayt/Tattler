import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';

export const Input = styled(TextField)`
  .MuiFilledInput-input {
    padding: 29px 14px 9px;
    font-size: ${({ theme: { fontSize } }) => fontSize.l};
  }
  .MuiInputLabel-filled {
    font-size: ${({ theme: { fontSize } }) => fontSize.m};
    transform: translate(12px, 23px) scale(1);
  }
  .MuiFormLabel-root {
    font-size: ${({ theme: { fontSize } }) => fontSize.l};
  }
  .Mui-Focused,
  .MuiInputLabel-filled.MuiInputLabel-shrink {
    transform: translate(12px, 10px) scale(0.75);
  }
  .MuiFilledInput-underline:after {
    border-bottom: 2px solid ${({ theme: { colors } }) => colors.grassGreen};
  }
  .MuiFormLabel-root.Mui-focused {
    color: ${({ theme: { colors } }) => colors.grassGreen};
  }
  .MuiFilledInput-root {
    background: rgb(0 0 0 / 4%);
    box-shadow: inset 0 0 5px rgb(0 0 0 / 8%);
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  .MuiFormLabel-root.Mui-error {
    color: ${({ theme: { colors } }) => colors.error};
  }
  .MuiFilledInput-underline.Mui-error:after {
    border-bottom-color: ${({ theme: { colors } }) => colors.error};
  }
  .MuiFormHelperText-root.Mui-error {
    color: ${({ theme: { colors } }) => colors.error};
    font-size: ${({ theme: { fontSize } }) => fontSize.s};
    position: absolute;
    bottom: -25px;
    margin: 0 6px;
    font-weight: 600;
  }
  .MuiInput-underline:after {
    border-bottom: 2px solid ${({ theme: { colors } }) => colors.grassGreen};
  }
  .MuiInputBase-input {
    font-size: ${({ theme: { fontSize } }) => fontSize.m};
  }
  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: ${({ theme: { colors } }) => colors.grassGreen};
  }
  .MuiOutlinedInput-notchedOutline {
    border-color: rgba(0, 0, 0, 0.1);
    border-width: 2px;
    box-shadow: inset 0 0 4px 1px rgb(0 0 0 / 10%);
    border-radius: 20px;
  }
  .MuiOutlinedInput-root {
    transition: background 200ms ease-in;
    background: ${({ theme: { colors } }) => colors.white};
    border-radius: 20px;
    &:focus-within,
    &:hover {
      background: ${({ theme: { colors } }) => colors.input};
    }
  }
  .MuiOutlinedInput-root:hover > * {
    border-color: rgba(0, 0, 0, 0.1);
  }
  .MuiOutlinedInput-multiline {
    padding: 14px;
  }
`;
