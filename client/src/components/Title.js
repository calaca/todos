import styled from 'styled-components';
import theme from '../theme';

const Title = styled.div`
  font-size: 36px;
  font-weight: 700;
  color: ${props => props.theme.text};
  margin: 0 0 30px 0;
`;

Title.defaultProps = {
  theme
};

export default Title;
