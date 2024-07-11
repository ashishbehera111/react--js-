import React from 'react';
import Usercard from '../components/Usercard';
import data from '../utils.js/data'

function Userlist() {
   
    
  return (


    <div>
    {data.map(({name,email,roll})=>{
        return(
          <Usercard name={name} email={email} roll={roll}/>
        )
    })} 
   
    </div>
  );
}

export default Userlist;
