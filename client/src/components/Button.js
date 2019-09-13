import styled from 'styled-components';
import theme from '../theme';

const Button = styled.button`
  font-size: 16px;
  font-weight: 700;
  border-radius: 4px;
  padding: 9px 14px;
  max-width: 100%;
  min-width: 180px;
  color: ${props => props.theme.text};
  outline: none;
  cursor: pointer;
  transition: ${props => props.theme.transition};
  background-color: ${props => props.theme.primary};
  border: 1px solid ${props => props.theme.primary};
  margin-left: 10px;
  text-transform: lowercase;

  :hover {
    background-color: transparent;
    color: ${props => props.theme.primary};
  }
`;

Button.defaultProps = {
  theme: theme
};

export default Button;
