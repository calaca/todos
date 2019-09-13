import styled from 'styled-components';
import theme from '../theme';

const Text = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: ${props => props.theme.text};
  margin: 0;
`;

Text.defaultProps = {
  theme
};

export default Text;
