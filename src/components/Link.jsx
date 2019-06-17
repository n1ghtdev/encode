import React from 'react';
import { Link } from 'react-router-dom';
import A from './A';

const Wrapper = props => (
  <Link {...props}>
    <A {...props}>{props.children}</A>
  </Link>
);

export default Wrapper;
