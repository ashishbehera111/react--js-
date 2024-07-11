import React from 'react';
import Title from '../components/Title';
import {store} from "../store/store"
import {incrementByAmount} from "../store/reducer"
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

function Contact() {
  const value=useSelector((state)=>state.value)
  return (
    <div>
    <h1>hii this is contact</h1>
    {value}
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
