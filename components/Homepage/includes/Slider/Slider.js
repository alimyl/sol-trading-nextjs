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
import smImg1 from 'public/images/home-slider/img-sm-1.jpg'
import smImg2 from 'public/images/home-slider/img-sm-2.jpg'
import smImg3 from 'public/images/home-slider/img-sm-3.jpg'
import smImg4 from 'public/images/home-slider/img-sm-4.jpg'

import lgImg1 from 'public/images/home-slider/img-lg-1.jpg'
import lgImg2 from 'public/images/home-slider/img-lg-2.jpg'

// Swiper core and required modules
import SwiperCore, { Pagination, Autoplay } from 'swiper';
// Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// installing Swiper modules
SwiperCore.use([Pagination, Autoplay]);

export default function Slider() {
    return (
        <section id={homepageStyles["slider-wrapper"]}>
            <Container fluid className="px-0">
                <div className={`${homepageStyles["slider"]} d-flex flex-wrap`}>
                    {/* home slider left section */}
                    <div className={`${homepageStyles["lt-sec"]} d-flex flex-wrap`}>
                        {/* item */}
                        <div className="item col-6 col-md-12 pr-1 px-md-0 mb-3">
                            <Link href="/home">
                                <a className="inner d-block">
                                    <Image
                                        src={smImg1}
                                        layout="responsive"
                                        placeholder="blur" />
                                </a>
                            </Link>
                        </div>
                        {/* item */}
                        <div className="item col-6 col-md-12 pl-1 px-md-0">
                            <Link href="/home">
                                <a className="inner d-block">
                                    <Image
                                        src={smImg2}
                                        layout="responsive"
                                        placeholder="blur" />
                                </a>
                            </Link>
                        </div>
                    </div>

                    {/* home slider center section */}
                    <div className={`${homepageStyles["ct-sec"]} px-3`}>
                        <div className="inner position-relative">
                            <Swiper
                                navigation
                                pagination={{ clickable: true }}
                                autoplay={{
                                    delay: 3500,
                                    pauseOnMouseEnter: true,
                                    reverseDirection: true,
                                }}
                                className="homeSlider">
                                {/* slide item */}
                                <SwiperSlide>
                                    <Image
                                        src={lgImg1}
                                        layout="responsive"
                                        placeholder="blur" />
                                </SwiperSlide>

                                {/* slide item */}
                                <SwiperSlide>
                                    <Image
                                        src={lgImg2}
                                        layout="responsive"
                                        placeholder="blur" />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>

                    {/* home slider right section */}
                    <div className={`${homepageStyles["rt-sec"]} d-flex flex-wrap`}>
                        {/* item */}
                        <div className="item col-6 col-md-12 pr-1 px-md-0 mb-3">
                            <a href="/" className="inner d-block">
                                <Image
                                    src={smImg3}
                                    layout="responsive"
                                    placeholder="blur" />
                            </a>
                        </div>
                        {/* item */}
                        <div className="item col-6 col-md-12 pl-1 px-md-0">
                            <a href="/" className="inner d-block">
                                <Image
                                    src={smImg4}
                                    layout="responsive"
                                    placeholder="blur" />
                            </a>
                        </div>
                    </div>


                </div>
            </Container>
        </section>
    )
}
