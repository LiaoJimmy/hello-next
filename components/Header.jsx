import React from 'react';
import Link from 'next/link';

const linkStyle = {
  marginRight: 15,
};

const Header = () => (
  <div>
    <Link href="/">
      <a href="#id" style={linkStyle}>
        Home
      </a>
    </Link>
    <Link href="/about">
      <a href="#id" style={linkStyle}>
        About
      </a>
    </Link>
  </div>
);

export default Header;
