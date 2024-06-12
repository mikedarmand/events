import React from 'react';

function Color(props) {
  const { color } = props;
  return (
    <li key={color.id}>
      {color.name}
    </li>
  );
}

export default Color;
