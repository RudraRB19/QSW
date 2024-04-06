import React from 'react';
import {Link,NavLink}from 'react-router-dom';
import './Home.css' ;
import SwiperSlider from './SwiperSlider';
import Content from './Content';


export default function Home() {
  return (
    <>
    <SwiperSlider></SwiperSlider>
    <Content></Content>
    </>
  )
}
