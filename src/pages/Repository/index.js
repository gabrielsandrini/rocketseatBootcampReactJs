import React from 'react';

// import { Container } from './styles';

export default function Repository(props) {
  // eslint-disable-next-line react/prop-types
  const { match } = props;

  return <h1>Repository: {decodeURIComponent(match.params.repository)} </h1>;
}
