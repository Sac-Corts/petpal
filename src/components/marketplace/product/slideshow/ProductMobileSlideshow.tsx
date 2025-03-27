'use client';

import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
<<<<<<< HEAD
import { Autoplay, FreeMode, Navigation, Pagination } from 'swiper/modules';
=======
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
>>>>>>> sprint-4


import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './slideshow.css';


<<<<<<< HEAD

=======
>>>>>>> sprint-4
interface Props {
    images: string[];
    title: string;
    className?: string;
}


<<<<<<< HEAD

=======
>>>>>>> sprint-4
export const ProductMobileSlideshow = ({ images, title, className }: Props) => {


    return (
        <div className={className}>

            <Swiper
                style={{
                    width: '100vw',
                    height: '500px'
                }}
                pagination
                autoplay={{
                    delay: 2500
                }}
                modules={[FreeMode, Autoplay, Pagination]}
                className="mySwiper2"
            >

                {
                    images.map(image => (
                        <SwiperSlide key={image}>
                            <Image
                                width={600}
                                height={500}
<<<<<<< HEAD
                                src={`/products/${image}`}
=======
                                src={image}
>>>>>>> sprint-4
                                alt={title}
                                className="object-fill"
                            />
                        </SwiperSlide>

                    ))
                }
            </Swiper>

<<<<<<< HEAD


=======
>>>>>>> sprint-4
        </div>
    );
};