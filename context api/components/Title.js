import React from 'react';

function Title(props) {
  return (
    <div>
      <h1 style={{color:"orange"}}>this is Title{props.name}</h1>
    </div>
  );
}

export default Title;
