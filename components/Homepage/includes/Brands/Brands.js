import React from 'react'

// nextjs - link
import Link from 'next/link'
// nextjs - image
import Image from 'next/image'

// bootstrap
import {
    Container,
} from 'react-bootstrap'

// styles
import homepageStyles from "../../styles/Homepage.module.scss"

// images
import brandImg1 from 'public/images/our-brands/brand-img1.jpg'
import brandImg2 from 'public/images/our-brands/brand-img2.jpg'
import brandImg3 from 'public/images/our-brands/brand-img3.jpg'
import brandImg4 from 'public/images/our-brands/brand-img4.jpg'
import brandImg5 from 'public/images/our-brands/brand-img5.jpg'
import brandImg6 from 'public/images/our-brands/brand-img6.jpg'
import brandImg7 from 'public/images/our-brands/brand-img7.jpg'
import brandImg8 from 'public/images/our-brands/brand-img8.jpg'
import brandImg9 from 'public/images/our-brands/brand-img9.jpg'
import brandImg10 from 'public/images/our-brands/brand-img10.jpg'
import brandImg11 from 'public/images/our-brands/brand-img11.jpg'
import brandImg12 from 'public/images/our-brands/brand-img12.jpg'
import brandImg13 from 'public/images/our-brands/brand-img13.jpg'

// Swiper core and required modules
import SwiperCore, { Autoplay } from 'swiper'
// Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// installing Swiper modules
SwiperCore.use([Autoplay])

export default function Brands() {
    return (
        <section id={homepageStyles["our-brands-wrapper"]} className="st-def-mar-TB">
            <Container>
                <div className={`${homepageStyles["our-brands"]} d-flex flex-wrap`}>
                    <Swiper
                        slidesPerView={6}
                        spaceBetween={10}
                        autoplay={{
                            delay: 3000,
                            pauseOnMouseEnter: true,
                            reverseDirection: true,
                        }}
                        className="ourBrandsSlider">
                        {/* slide item */}
                        <SwiperSlide className={`${homepageStyles["swiper-slide-item"]} d-flex align-items-center justify-content-center`}>
                            <Link href="/home">
                                <a className={`${homepageStyles.inner} d-block`}>
                                    <Image
                                        src={brandImg1}
                                        // layout="responsive"
                                        placeholder="blur"
                                        height={100}
                                        width={100} />
                                </a>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide className={`${homepageStyles["swiper-slide-item"]} d-flex align-items-center justify-content-center`}>
                            <Link href="/home">
                                <a className={`${homepageStyles.inner} d-block`}>
                                    <Image
                                        src={brandImg2}
                                        // layout="responsive"
                                        placeholder="blur"
                                        height={100}
                                        width={100} />
                                </a>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide className={`${homepageStyles["swiper-slide-item"]} d-flex align-items-center justify-content-center`}>
                            <Link href="/home">
                                <a className={`${homepageStyles.inner} d-block`}>
                                    <Image
                                        src={brandImg3}
                                        // layout="responsive"
                                        placeholder="blur"
                                        height={100}
                                        width={100} />
                                </a>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide className={`${homepageStyles["swiper-slide-item"]} d-flex align-items-center justify-content-center`}>
                            <Link href="/home">
                                <a className={`${homepageStyles.inner} d-block`}>
                                    <Image
                                        src={brandImg4}
                                        // layout="responsive"
                                        placeholder="blur"
                                        height={100}
                                        width={100} />
                                </a>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide className={`${homepageStyles["swiper-slide-item"]} d-flex align-items-center justify-content-center`}>
                            <Link href="/home">
                                <a className={`${homepageStyles.inner} d-block`}>
                                    <Image
                                        src={brandImg5}
                                        // layout="responsive"
                                        placeholder="blur"
                                        height={100}
                                        width={100} />
                                </a>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide className={`${homepageStyles["swiper-slide-item"]} d-flex align-items-center justify-content-center`}>
                            <Link href="/home">
                                <a className={`${homepageStyles.inner} d-block`}>
                                    <Image
                                        src={brandImg6}
                                        // layout="responsive"
                                        placeholder="blur"
                                        height={100}
                                        width={100} />
                                </a>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide className={`${homepageStyles["swiper-slide-item"]} d-flex align-items-center justify-content-center`}>
                            <Link href="/home">
                                <a className={`${homepageStyles.inner} d-block`}>
                                    <Image
                                        src={brandImg7}
                                        // layout="responsive"
                                        placeholder="blur"
                                        height={100}
                                        width={100} />
                                </a>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide className={`${homepageStyles["swiper-slide-item"]} d-flex align-items-center justify-content-center`}>
                            <Link href="/home">
                                <a className={`${homepageStyles.inner} d-block`}>
                                    <Image
                                        src={brandImg8}
                                        // layout="responsive"
                                        placeholder="blur"
                                        height={100}
                                        width={100} />
                                </a>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide className={`${homepageStyles["swiper-slide-item"]} d-flex align-items-center justify-content-center`}>
                            <Link href="/home">
                                <a className={`${homepageStyles.inner} d-block`}>
                                    <Image
                                        src={brandImg9}
                                        // layout="responsive"
                                        placeholder="blur"
                                        height={100}
                                        width={100} />
                                </a>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide className={`${homepageStyles["swiper-slide-item"]} d-flex align-items-center justify-content-center`}>
                            <Link href="/home">
                                <a className={`${homepageStyles.inner} d-block`}>
                                    <Image
                                        src={brandImg10}
                                        // layout="responsive"
                                        placeholder="blur"
                                        height={100}
                                        width={100} />
                                </a>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide className={`${homepageStyles["swiper-slide-item"]} d-flex align-items-center justify-content-center`}>
                            <Link href="/home">
                                <a className={`${homepageStyles.inner} d-block`}>
                                    <Image
                                        src={brandImg11}
                                        // layout="responsive"
                                        placeholder="blur"
                                        height={100}
                                        width={100} />
                                </a>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide className={`${homepageStyles["swiper-slide-item"]} d-flex align-items-center justify-content-center`}>
                            <Link href="/home">
                                <a className={`${homepageStyles.inner} d-block`}>
                                    <Image
                                        src={brandImg12}
                                        // layout="responsive"
                                        placeholder="blur"
                                        height={100}
                                        width={100} />
                                </a>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide className={`${homepageStyles["swiper-slide-item"]} d-flex align-items-center justify-content-center`}>
                            <Link href="/home">
                                <a className={`${homepageStyles.inner} d-block`}>
                                    <Image
                                        src={brandImg13}
                                        // layout="responsive"
                                        placeholder="blur"
                                        height={100}
                                        width={100} />
                                </a>
                            </Link>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </Container>
        </section>
    )
}
