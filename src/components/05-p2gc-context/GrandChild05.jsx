import { useContext } from 'react';
import Context from './context';

const GrandChild05 = () => {
  const contextValue = useContext(Context);

  return (
    <div>
      <p>
        <i>GrandChild Component</i>
      </p>
      <span>Name is: {contextValue.name}</span>
    </div>
  );
};

export default GrandChild05;
