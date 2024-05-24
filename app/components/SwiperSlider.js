"use client";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Product from "./Product";
import { useEffect, useState } from "react";
import { products } from "../../mock/data";
import { useRouter } from "next/navigation";

function SwiperSlider() {
  const [productsList, setProductsList] = useState([]);
  const router = useRouter();

  useEffect(() => {
    let prods = products.filter((products) => products.sale !== null);
    setProductsList(prods);
  }, []);

  const breakpoints = {
    300: { slidesPerView: 2, spaceBetween: 12 },
    600: { slidesPerView: 3, spaceBetween: 12 },
    800: { slidesPerView: 4, spaceBetween: 12 },
    1024: { slidesPerView: 5, spaceBetween: 12 },
    1200: { slidesPerView: 6, spaceBetween: 12 },
  };

  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, Autoplay]}
      spaceBetween={12}
      slidesPerView={2}
      breakpoints={breakpoints}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      className="mySwiper"
      pagination={{ clickable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log("slide change")}
    >
      {productsList.map((product) => {
        return (
          <SwiperSlide
            onClick={() => router.push(`/products/listing/${product.id}`)}
            key={product.id}
            className="pb-6 "
          >
            <Product product={product} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default SwiperSlider;
