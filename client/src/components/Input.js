import styled from 'styled-components';
import theme from '../theme';

const Input = styled.input`
  font-size: 16px;
  font-weight: 400;
  color: ${props => props.theme.text};
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: ${props => props.theme.secondary};
  margin: 0 0 20px 0;
  outline-color: ${props => props.theme.primary};
  min-width: 400px;
  max-width: 100%;

  ::placeholder {
    color: ${props => props.theme.placeholder};
  }
`;

Input.defaultProps = {
  theme: theme
};

export default Input;
