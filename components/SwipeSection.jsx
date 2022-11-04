import React, { useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { Pagination, Navigation } from "swiper";
import { useState } from "react";


const data = [
  {
    id: 1,
    name: 'Ola ola',
    review: 'Optimal commercial made my flight one of the best i have ever had. Fast delivery and user friendly.'
  },
  {
    id: 2,
    name: 'Ola ola',
    review: 'Optimal commercial made my flight one of the best i have ever had. Fast delivery and user friendly.'
  },
  {
    id: 3,
    name: 'Ola ola',
    review: 'Optimal commercial made my flight one of the best i have ever had. Fast delivery and user friendly.'
  },
  {
    id: 4,
    name: 'Ola ola',
    review: 'Optimal commercial made my flight one of the best i have ever had. Fast delivery and user friendly.'
  },
  {
    id: 5,
    name: 'Ola ola',
    review: 'Optimal commercial made my flight one of the best i have ever had. Fast delivery and user friendly.'
  },
  {
    id: 6,
    name: 'Ola ola',
    review: 'Optimal commercial made my flight one of the best i have ever had. Fast delivery and user friendly.'
  }
]

const SwiperSection = () => {
  // const [swiperno, setSwiperno] = useState(3)

  // useEffect(() => {
  //    let width = window.innerWidth
    
    
  //   if (width < 700) {
  //     setSwiperno(1)
  //     console.log(swiperno)
  //   }
  //   else {
  //     setSwiperno(3)
  //     console.log(swiperno)
  //   }
  // },[])




  return (
    <div className="w-full mx-auto flex items-center justify-center">
        <Swiper
          breakpoints={{
              200: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1000: {
                slidesPerView: 3,
              },
            }}
            slidesPerView= {3}
            spaceBetween={20}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {data.map(user => (
              <SwiperSlide key={user.id}>
                <div>
                  <div className="card">
                    <div className="box">
                      <div className="content">
                        <h2>{user.name}</h2>
                        <p>{user.review}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
    </div>
  )
}

export default SwiperSection