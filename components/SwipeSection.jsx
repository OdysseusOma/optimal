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
  const [swiperno, setSwiperno] = useState(3)

  useEffect(() => {
    let mediaQuery = window.matchMedia("(min-width: 768px)");
    mediaQuery.addEventListener(setSwiperno);
    // this is the cleanup function to remove the listener
    return () => mediaQuery.removeEventListener(setSwiperno);
  }, [])
  return (
    <div>
        <Swiper
            slidesPerView={swiperno}
            spaceBetween={10}
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