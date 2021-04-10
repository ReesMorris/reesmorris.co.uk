import styled from '@emotion/styled';
import LinkWrapper from '../link-wrapper';

const BlogCard = styled.article`
  &:not(:last-child) {
    margin-bottom: 3rem;
  }
`;

const Header = styled.header``;

const Link = styled(LinkWrapper)``;

export default { BlogCard, Header, Link };
