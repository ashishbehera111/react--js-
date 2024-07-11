import React from 'react';
import UnorderedList from '../components/UnorderedList';
import { Link } from "react-router-dom";
function About() {
  return (
    <div>
      <UnorderedList name={"ashish"} email={"ashish123@gmail.com"} roll={"12s"}/>
      <Link to="/register">go to register </Link>
    </div>
  );
}

export default About;
