import styled from '@emotion/styled';

const ListItem = styled.li`
  color: ${props => props.theme.colors.secondary};

  &:not(:first-of-type) {
    margin-top: 0.8rem;
  }
`;

export default { ListItem };
