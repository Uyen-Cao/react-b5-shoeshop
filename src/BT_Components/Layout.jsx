import React from 'react';
import Header from './Header';
import Carousel from './Carousel';
import Smartphone from './Smartphone';
import Laptop from './Laptop';
import Promotion from './Promotion';
export default function layout() {
  return (
    <div style={{backgroundColor: "#343a40"}}>
    <Header/>
    <Carousel/>
    <Smartphone/>
    <Laptop/>
    <Promotion/>
    </div>
  )
}
