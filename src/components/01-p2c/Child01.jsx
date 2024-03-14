import React from 'react';

const Child01 = (props) => {
  return (
    <div>
      <p>
        <i>Child Component</i>
      </p>
      <span>Name is: {props.name}</span>
    </div>
  );
};

export default Child01;
