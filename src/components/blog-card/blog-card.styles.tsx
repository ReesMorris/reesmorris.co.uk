import styled from '@emotion/styled';
import { themeVar } from '../../themes';
import LinkWrapper from '../link-wrapper';

const BlogCard = styled.article`
  &:not(:last-child) {
    margin-bottom: 3rem;
  }
`;

const Header = styled.header``;

const Link = styled(LinkWrapper)`
  &:hover {
    color: ${themeVar('color-primary')};
  }
`;

export default { BlogCard, Header, Link };
