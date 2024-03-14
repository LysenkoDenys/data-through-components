import { useState } from 'react';
import Parent05 from './Parent05';
import Context from './context';

const Component = () => {
  const [name, setName] = useState();
  return (
    <Context.Provider value={{ name, setName }}>
      <Parent05 />
    </Context.Provider>
  );
};

export default Component;
