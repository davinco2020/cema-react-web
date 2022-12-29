import React from 'react';
import Header from './Header';
import Body from './Body';
import Main from './Main';
import {Routes} from 'react-router-dom';




const Home = () => {
  return (
    <div>
    
        <Header />
        <Body />
        <Main />
       {/* <Routes path='/'></Routes> */}
    </div>
  )
}

export default Home