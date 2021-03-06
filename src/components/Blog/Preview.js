import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { Link } from 'gatsby';
import CategoryLink from './CategoryLink';
import { color } from '../../utils/style';

const Wrapper = styled('section')`
  border-bottom: 1px solid ${color.textLight}22;
  margin-bottom: 3rem;
`;

const Heading = styled('h2')`
  && {
    font-size: 1.5rem;
  }

  @media (min-width: 480px) {
    font-size: 2rem;
  }

  a {
    color: inherit;
    display: block;
    margin-left: -0.25rem;
    padding: 0.25rem;
    position: relative;
    text-decoration: none;
    z-index: 10;

    &:active,
    &:focus,
    &:hover {
      outline: 2px solid ${color.accent};
    }
  }
`;

const Excerpt = styled('p')`
  font-size: 1rem;
  margin-top: 0.5rem;
`;

const ReadMoreLink = styled(Link)`
  display: inline-block;
  color: ${color.textLight};
  font-size: 0.75rem;
  font-weight: 100;
  letter-spacing: 0.2em;
  margin: 0.75rem 0 1rem -0.125rem;
  text-decoration: none;
  text-transform: uppercase;
`;

const Preview = ({ post }) => (
  <Wrapper>
    <Heading data-text={post.frontmatter.title}>
      <Link to={`/${post.frontmatter.slug}`}>{post.frontmatter.title}</Link>
    </Heading>
    <CategoryLink
      key={`category-${post.frontmatter.category}`}
      category={post.frontmatter.category}
    />
    <Excerpt>
      {post.frontmatter.description
        ? post.frontmatter.description
        : post.excerpt}
    </Excerpt>
    <ReadMoreLink to={`/${post.frontmatter.slug}`}>Read post ›</ReadMoreLink>
  </Wrapper>
);

Preview.propTypes = {
  post: PropTypes.shape({
    frontmatter: PropTypes.shape({
      category: PropTypes.string,
      description: PropTypes.string,
      slug: PropTypes.string,
      title: PropTypes.string,
    }),
  }).isRequired,
};

export default Preview;
