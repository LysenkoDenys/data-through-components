import React from 'react';

const Sibling1 = (props) => {
  return (
    <div>
      <p>
        <i>Sibling1 Component</i>
      </p>
      <form>
        <input
          type="text"
          placeholder="Enter your name"
          onChange={props.changeNameHandler}
        />
      </form>
    </div>
  );
};

export default Sibling1;
