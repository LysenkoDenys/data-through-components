import { useState } from 'react';
import Sibling1 from './Sibling1';
import Sibling2 from './Sibling2';

const Parent03 = () => {
  const [name, setName] = useState('');
  const changeNameHandler = (event) => {
    setName(event.target.value);
  };
  return (
    <>
      <p>
        <i>Parent Component</i>
      </p>
      <br />
      <Sibling1 changeNameHandler={changeNameHandler} />
      <br />
      <Sibling2 name={name} />
    </>
  );
};

export default Parent03;
