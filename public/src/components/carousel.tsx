import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

export default function Carousel() {
  const images = ["/images/example.jpg", "/images/example2.jpg"];
  return (
    <section>
      <Swiper
      spaceBetween={5}
        // spaceBetween={50}
        slidesPerView={1}
        // pagination={true}
        modules={[Pagination]}
        pagination={{
          clickable: true,
        }}
      >
        {images.map((item) => (
          <SwiperSlide key={item}>
            <img src={item} className="w-full object-scale-down shadow-xl" />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
