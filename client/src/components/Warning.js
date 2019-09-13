import styled from 'styled-components';
import theme from '../theme';

const Warning = styled.em`
  font-size: 16px;
  font-weight: 300;
  font-family: 'Nunito Sans', Arial, Helvetica, sans-serif;
  font-style: normal;
  color: ${props => props.theme.primary};
  margin: 0 0 30px 0;
  display: block;
  margin: 0 auto;
`;

Warning.defaultProps = {
  theme
};

export default Warning;
