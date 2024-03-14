import { useState } from 'react';

import Child04 from './Child04';

const Parent04 = () => {
  const [name, setName] = useState('');

  const changeNameHandler = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      {' '}
      <p>
        <i>Parent Component</i>
      </p>
      <form>
        <input
          type="text"
          placeholder="Enter your name"
          onChange={changeNameHandler}
        />
      </form>
      <Child04 name={name} />
    </div>
  );
};

export default Parent04;
