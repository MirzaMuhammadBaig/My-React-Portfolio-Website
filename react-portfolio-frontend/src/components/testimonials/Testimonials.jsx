import React from 'react'
import "./testimonials.css"
import AVTR1 from "../../assets/avatar1.webp"
import AVTR2 from "../../assets/avatar2.webp"
import AVTR3 from "../../assets/avatar3.webp"
import AVTR4 from "../../assets/avatar4.webp"
import AVTR5 from "../../assets/avatar5.webp"
import AVTR6 from "../../assets/avatart6.avif"

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR3,
    name: "Emma Charlott    ",
    review: "Fantastic experience! The seller on Fiverr was prompt, professional, and delivered exceptional quality work. Hope to see you again."
  },
  {
    avatar: AVTR1,
    name: "Lvory Violet",
    review: "I have impressed this seller because this seller have very good communication and problem solving skill. I APPRECIATE YOU."
  },
  {
    avatar: AVTR2,
    name: "Philippe Alain",
    review: "This seller is very work hard. His communication and seller support skill is very good. Give me perfect work on time."
  },
  {
    avatar: AVTR4,
    name: "Yuxuan Yuze",
    review: "Outstanding work. Thanks a lot blockchain dev and Hope to see you again."
  },
  {
    avatar: AVTR5,
    name: "Rizkyalfian",
    review: "I highly recommend the smart contract services on Fiverr. The service provider demonstrated exceptional expertise, professionalism, and delivered a high-quality smart contract that exceeded my expectations. Communication was excellent, and the delivery was timely, showcasing their commitment to meeting deadlines."
  },
  {
    avatar: AVTR6,
    name: "Arssalan fstom",
    review: "This seller-service is awesome and on time. I impressed from his work. This seller is also guide me about my project. Fast and perfect service provider. From every angle this seller is perfect."
  }
]

const Testimonials = () => {
  return (
    <div className='section' id='tesimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

    <Swiper className="container testimonials__container"
    // install Swiper modules
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
        data.map(({avatar, name, review}, index) => {
          return(
            <SwiperSlide key= {index} className='testimonial'>
          <div className="client__avatar">
            <img src={avatar} alt ="" />
          </div>  
            <h5 className='client__name'>{name}</h5>
            <small className='client__review'>{review} </small>
        </SwiperSlide>
          )
        })
      }
    </Swiper>
    </div>
  )
}

export default Testimonials

// {
//   data.map(({avatar, name, review}, index) => {
//     return(
//       <SwiperSlide key= {index} className='testimonial'>
//     <div className="client__avatar">
//       <img src={avatar} alt ="" />
//     </div>  
//       <h5 className='client__name'>{name}</h5>
//       <small className='client__review'>{review} </small>
//   </SwiperSlide>
//     )
//   })
// }

// {
//   data.map(({avatar, name, review}, index) =>{
//     <SwiperSlide key = {index} className="testimonial">
//       <div className="client__avatar">
//         <img src={avatar} alt="" />
//       </div>
//       <h5 className='client__name' >{name}</h5>
//       <small className='client__review' >{review}</small>
//     </SwiperSlide>
//   })
// }