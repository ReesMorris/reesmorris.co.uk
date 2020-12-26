import styled from 'styled-components';

const ListItem = styled.li`
  color: ${props => props.theme.colors.secondary};

  &:not(:first-child) {
    margin-top: 0.8rem;
  }
`;

export default { ListItem };
