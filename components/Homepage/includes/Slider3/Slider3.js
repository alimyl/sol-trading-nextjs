import React from 'react'

// nextjs - link
import Link from 'next/link'
// nextjs - image
import Image from 'next/image'

// bootstrap
import {
    Container,
} from 'react-bootstrap';

// styles
import homepageStyles from "../../styles/Homepage.module.scss"

// images
import img1 from 'public/images/home-slider3/img1.jpg'
import img2 from 'public/images/home-slider3/img2.jpg'
import img3 from 'public/images/home-slider3/img3.jpg'

// Swiper core and required modules
import SwiperCore, { Navigation, Autoplay, } from 'swiper';
// Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// installing Swiper modules
SwiperCore.use([Navigation, Autoplay]);

export default function Slider3() {
    return (
        <section id={homepageStyles["slider3-wrapper-wrapper"]}>
            <Container fluid className="px-0">
                <div className={`${homepageStyles["slider3"]} position-relative`}>
                    <Swiper
                        navigation
                        autoplay={{
                            delay: 3000,
                            pauseOnMouseEnter: true,
                            reverseDirection: true,
                        }}
                        className="homeSlider2">
                        {/* slide item */}
                        <SwiperSlide>
                            <Link href="/home">
                                <a>
                                    <Image
                                        src={img1}
                                        placeholder="blur" />
                                </a>
                            </Link>
                        </SwiperSlide>
                        {/* slide item */}
                        <SwiperSlide>
                            <Link href="/home">
                                <a>
                                    <Image
                                        src={img2}
                                        placeholder="blur" />
                                </a>
                            </Link>
                        </SwiperSlide>
                        {/* slide item */}
                        <SwiperSlide>
                            <Link href="/home">
                                <a>
                                    <Image
                                        src={img3}
                                        placeholder="blur" />
                                </a>
                            </Link>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </Container>
        </section>
    )
}
