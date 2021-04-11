import styled from '@emotion/styled';
import { themeVar } from '../../themes';

const ListItem = styled.li`
  color: ${themeVar('color-secondary')};

  &:not(:first-of-type) {
    margin-top: 0.8rem;
  }
`;

export default { ListItem };
