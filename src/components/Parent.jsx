import { useState } from 'react';
import Child from './Child';

function Parent() {
  const [data, setData] = useState('');

  const childToParent = (childData) => {
    setData(childData);
    alert('This is an alert from the Child Component');
  };

  return (
    <>
      {data}
      <div>
        <Child childToParent={childToParent} />
      </div>
    </>
  );
}

export default Parent;
