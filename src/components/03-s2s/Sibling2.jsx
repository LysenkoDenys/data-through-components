import React from 'react';

const Sibling2 = (props) => {
  return (
    <div>
      {' '}
      <p>
        <i>Sibling2 Component</i>
      </p>
      <span>Name is: {props.name}</span>
    </div>
  );
};

export default Sibling2;
