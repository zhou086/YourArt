import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper";

export default function App() {
  const page = window.location.pathname.charAt(1);
  const [apiData, setApiData] = useState<any[]>([]);
  const [otherArtworkImages, setOtherArtworkImages] = useState([]);

  fetch(
    "https://storage.googleapis.com/ya-misc/interviews/front/examples/" +
      page +
      ".json"
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("NETWORK RESPONSE ERROR");
      }
    })
    .then((data) => {
      fetchApi(data);
      setOtherArtworkImages(data.otherArtworkImages);
      console.log(otherArtworkImages);
    })
    .catch((error) => console.error("FETCH ERROR:", error));

  function fetchApi(data) {
    setApiData(data);
  }

  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        navigation={{
          prevEl: ".arrow-left",
          nextEl: ".swiper-button-next",
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
          // when window width is >= 640px
          1024: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
        }}
      >
        {otherArtworkImages.map((slideContent, index) => (
          <SwiperSlide key={slideContent} virtualIndex={index}>
            <a href={slideContent} target="_blank">
              <div className="w-52"></div>
              <img alt="Art" src={slideContent} />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="h-24"></div>
    </>
  );
}
