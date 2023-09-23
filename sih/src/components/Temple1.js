import React,{useState} from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Pongal from '../img/Festival-of-Pongal-All-you-need-to-know_7_Featured.jpg';
import Dance from '../img/natyanjali-dance-festival-in-tamil-nadu-india-1.jpg';
import Music from '../img/Lead-Getty.webp';
import Deepam from '../img/copy-of-deepavali-sweets-snacks-(3)_5.png';
import Madurai from '../img/Untitled_design___2023_03_30T003857_515.webp';
import Jallikattu from '../img/jallikattu-image.jpg';
import  Kolu from '../img/6e1fa10e-49ce-43d7-9dc6-0f3ba572315b.jpg';
import Music1 from './music';
import {Link} from 'react-router-dom';
const Temple1 = ({ showAbout, setShowAbout }) => {
    const handleButtonClick = () => {
      setShowAbout(true);
    };

    return(
        <div >
            <div className="m-4">
            <h1 className="text-center text-4xl text-indigo-500">Let's Celebrate with Us</h1>
            <h2 className="text-center text-lg text-gray-600 m-2">Step into the vibrant world of festivals,where traditons come alive, and celebrations paint the landscape with vibrant hues.</h2>
            </div>
            <div className="ml-36 mr-36 p-4">
            <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination,Navigation,EffectCards]}
      spaceBetween={15}
      slidesPerView={3}
      className="mySwiper"
      navigation
      onSlideChange={() => console.log('slide change')}>
         
      <SwiperSlide>
        <div className="rounded shadow-xl shadow-gray-400 ">
        <button onClick={handleButtonClick}><img  className="w-2/3" src={Music} w-16 h-16></img></button>
        {showAbout && <Music1/>}
        <div className="pl-2">
            <h1 className="font-bold text-xl">Thiruvaiyaru Festival</h1>
            <h1 className="text-gray-700 text-base p-2">Jan 2024</h1>
        </div>
        </div>
        </SwiperSlide>
      <SwiperSlide >
      <div className="rounded shadow-xl shadow-gray-400 ">
      <img  className="w-2/3" src={Deepam} w-16 h-16></img>
        <div className="pl-3">
            <h1 className="font-bold text-xl">Karthigai Deepam</h1>
            <h1 className="text-gray-700 text-base p-2">Nov 2023/Dec 2023</h1>
        </div>
        </div></SwiperSlide>

        <SwiperSlide className="flex justify-center ">
        <div className="rounded shadow-xl shadow-gray-400 ">
      <img  className="w-2/3" src={Madurai} w-16 h-16></img>
        <div className="pl-3">
            <h1 className="font-bold text-xl">Chitarai Festival</h1>
            <h1 className="text-gray-700 text-base p-2">Apr 2024/ May 2023</h1>
        </div>
        </div></SwiperSlide>

        <SwiperSlide className="flex justify-center ">
        <div className="rounded shadow-xl shadow-gray-400">
      <img  className="w-2/3" src={Jallikattu} w-16 h-42></img>
        <div className="pl-3">
            <h1 className="font-bold text-xl">Jallikattu Festival</h1>
            <h1 className="text-gray-700 text-base p-2">Jan 2024</h1>
        </div>
        </div></SwiperSlide>
        <SwiperSlide>
        <div className="rounded shadow-xl shadow-gray-400">
      <img  className="w-2/3" src={Kolu} ></img>
        <div className="pl-3">
            <h1 className="font-bold text-xl">Navarathri</h1>
            <h1 className="text-gray-700 text-base p-2">Oct 2023</h1>
        </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="rounded shadow-xl shadow-gray-400 ">
          <a href="#" className="no-underline"><img  className="w-2/3" src={Dance}></img></a>
          <div className="pl-2">
            <h1 className="font-bold text-xl">Natyanjali Dance Festival</h1>
            <h1 className="text-gray-700 text-base p-2">31 Jan 2024-29 Feb 2024</h1>
          </div> 
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="rounded shadow-2xl shadow-blue-300 ">
        <a href="#" className="no-underline"><img  className="w-2/3" src={Pongal}></img></a>
        <div className="pl-2">
            <h1 className="font-bold text-xl">Pongal</h1>
            <h1 className="text-gray-700 text-base mb-1 p-2">Jan 2024</h1>
        </div>
        </div>
      </SwiperSlide>
     </Swiper>
            </div>
         
        </div>
    )
};

export default Temple1;