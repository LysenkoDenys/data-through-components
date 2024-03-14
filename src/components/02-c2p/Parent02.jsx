import { useState } from 'react';
import Child02 from './Child02';

const Parent02 = () => {
  const [name, setName] = useState('');
  const changeNameHandler = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <p>
        <i>Parent Component</i>
      </p>
      <span>Name is: {name}</span>
      <br />
      <br />
      <Child02 changeNameHandler={changeNameHandler} />
    </div>
  );
};

export default Parent02;
