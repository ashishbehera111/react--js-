import React, { useContext } from 'react';
import { CountContext } from '../context/CountContext';

function Usercard() {
  const{count}=useContext(CountContext)
  return (
    <div>
     {count}
    </div>
  );
}

export default Usercard;
