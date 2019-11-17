import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Layout from '../components/Layout';

const Header = styled.h1`
  font-style: italic;
`;

function getPosts() {
  return [
    { id: 'hello-nextjs', title: 'Hello Next.js' },
    { id: 'learn-nextjs', title: 'Learn Next.js is awesome' },
    { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT' },
  ];
}

const PostLink = ({ post }) => (
  <Link href="/p/[id]" as={`/p/${post.id}`}>
    <a href="#id">{post.title}</a>
  </Link>
);

PostLink.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
  }),
};
PostLink.defaultProps = {
  post: {},
};

const Index = () => (
  <Layout>
    <Header>My Blog</Header>
    <ul>
      {getPosts().map((post) => (
        <li key={post.id}>
          <PostLink key={post.id} post={post} />
        </li>
      ))}
    </ul>
    <style jsx>
      {`
        h1,
        a {
          font-family: "Arial";
        }

        ul {
          padding: 0;
        }

        li {
          list-style: none;
          margin: 5px 0;
        }

        a {
          text-decoration: none;
          color: blue;
        }

        a:hover {
          opacity: 0.6;
        }
      `}
    </style>
  </Layout>
);

export default Index;
