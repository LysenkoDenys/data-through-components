import { useState } from 'react';
import Child01 from './Child01';

const Parent01 = () => {
  const [name, setName] = useState('');
  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <p>
        <i>Parent Component</i>
      </p>
      <form>
        <input
          type="text"
          placeholder="Enter your name"
          onChange={nameChangeHandler}
        />
      </form>
      <br />
      <Child01 name={name} />
    </div>
  );
};

export default Parent01;
