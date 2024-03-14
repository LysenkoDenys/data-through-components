import { useContext } from 'react';
import Context from './context';

import Child05 from './Child05';

const Parent05 = () => {
  const contextValue = useContext(Context);

  const changeNameHandler = (event) => {
    contextValue.setName(event.target.value);
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
          onChange={changeNameHandler}
        />
      </form>
      <Child05 />
    </div>
  );
};

export default Parent05;
