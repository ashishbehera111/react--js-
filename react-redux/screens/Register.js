import React from 'react';
import { useSelector } from 'react-redux';
function Register() {
  const value=useSelector((state)=>state.value)


  return (
    <div>
      {value}
    </div>
  );
}

export default Register;
