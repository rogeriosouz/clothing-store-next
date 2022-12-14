import { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import fundo from '../../public/fundo.png';
import { ImgSlider } from './ImgsSlider';

type ListFotosProps = {
  listFotos: string[];
};

export function Slider({ listFotos }: ListFotosProps) {
  return (
    <section
      style={{
        backgroundImage: `url(${fundo.src})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
      className="w-full h-[50vh] mt-[100px]  pt-11 bg-zinc-700"
    >
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        navigation={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Navigation, Autoplay]}
      >
        {listFotos.map((foto, index: number) => (
          <SwiperSlide key={index}>
            <ImgSlider src={foto} alt={'aaa'} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
