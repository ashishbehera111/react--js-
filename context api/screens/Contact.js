import React, { useContext } from 'react';
import Title from '../components/Title';
import {store} from "../store/store"
import {incrementByAmount} from "../store/reducer"
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { CountContext } from '../context/CountContext';
import Usercard from '../components/Usercard';

function Contact() {
  const value=useSelector((state)=>state.value)
  const{count,setCount}=useContext(CountContext)
  const increment=()=>{
    setCount(count+1)
  }
  return (
    <div>
      <Usercard/>
    <h1>hii this is contact</h1>
    value:{value}
    context value:{count}
    <button onClick={increment}>increment</button>
    <br></br>
    <button onClick={()=>{
      store.dispatch(incrementByAmount(5))
      console.log("state updated ")
      }}>increment by 5</button>
    {/* <Title name="rockey"/> */}

<Link to="/register">link to register</Link>
    </div>
  );
}

export default Contact;
