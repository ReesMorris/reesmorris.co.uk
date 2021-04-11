import styled from '@emotion/styled';
import Heading from '../heading';
import Image from '../image';

const Article = styled.article``;

const Header = styled.header``;

const Title = styled(Heading)``;

const Metadata = styled.div`
  display: flex;
  align-items: center;
  margin: -0.5rem 0 2.5rem 0;
  font-size: 1.5rem;
`;

const Avatar = styled(Image)`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  margin-right: 1rem;
`;

const Section = styled.section``;

export default { Article, Header, Title, Metadata, Avatar, Section };
