import React from 'react';
import GrandChild04 from './GrandChild04';

const Child04 = (props) => {
  return (
    <div>
      <p>
        <i>Child Component</i>
      </p>
      <br />
      <GrandChild04 name={props.name} />
    </div>
  );
};

export default Child04;
