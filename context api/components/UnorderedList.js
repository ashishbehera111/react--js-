import React from 'react';

function UnorderedList({name, email,roll}) {
  return (
    <div>
      <ul>
        <li>{name}</li>
        <li>{email}</li>
        <li>{roll}</li>
      </ul>
    </div>
  );
}

export default UnorderedList;
