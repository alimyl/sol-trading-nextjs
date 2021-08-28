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
import catImg1 from 'public/images/home-categories/img1.jpg'
import catImg2 from 'public/images/home-categories/img2.jpg'
import catImg3 from 'public/images/home-categories/img3.jpg'
import catImg4 from 'public/images/home-categories/img4.jpg'
import catImg5 from 'public/images/home-categories/img5.jpg'

export default function Categories() {
    return (
        <section id={homepageStyles["categories-wrapper"]} className="st-def-mar-B">
            <Container>
                <div className={`${homepageStyles["categories"]} d-flex flex-wrap justify-content-center mx-auto text-center`}>
                    {/* category item */}
                    <div className={`${homepageStyles.item} col d-flex justify-content-center px-2 px-lg-3 pb-2`}>
                        <Link href="/home">
                            <a className="inner text-decoration-none st-text-light">
                                <div className={`${homepageStyles["img-sec"]} mx-auto`}>
                                    <Image src={catImg1} />
                                </div>
                                <div className="text-sec mt-2">
                                    <p className="st-fs-18 st-fw-600 text-capitalize">Grinders</p>
                                </div>
                            </a>
                        </Link>
                    </div>
                    
                    {/* category item */}
                    <div className={`${homepageStyles.item} col d-flex justify-content-center px-2 px-lg-3 pb-2`}>
                        <Link href="/home">
                            <a className="inner text-decoration-none st-text-light">
                                <div className={`${homepageStyles["img-sec"]} mx-auto`}>
                                    <Image src={catImg2} />
                                </div>
                                <div className="text-sec mt-2">
                                    <p className="st-fs-18 st-fw-600 text-capitalize">batteries</p>
                                </div>
                            </a>
                        </Link>
                    </div>

                    {/* category item */}
                    <div className={`${homepageStyles.item} col d-flex justify-content-center px-2 px-lg-3 pb-2`}>
                        <Link href="/home">
                            <a className="inner text-decoration-none st-text-light">
                                <div className={`${homepageStyles["img-sec"]} mx-auto`}>
                                    <Image src={catImg3} />
                                </div>
                                <div className="text-sec mt-2">
                                    <p className="st-fs-18 st-fw-600 text-capitalize">freezable glass</p>
                                </div>
                            </a>
                        </Link>
                    </div>

                    {/* category item */}
                    <div className={`${homepageStyles.item} col d-flex justify-content-center px-2 px-lg-3 pb-2`}>
                        <Link href="/home">
                            <a className="inner text-decoration-none st-text-light">
                                <div className={`${homepageStyles["img-sec"]} mx-auto`}>
                                    <Image src={catImg4} />
                                </div>
                                <div className="text-sec mt-2">
                                    <p className="st-fs-18 st-fw-600 text-capitalize">silicone</p>
                                </div>
                            </a>
                        </Link>
                    </div>

                    {/* category item */}
                    <div className={`${homepageStyles.item} col d-flex justify-content-center px-2 px-lg-3 pb-2`}>
                        <Link href="/home">
                            <a className="inner text-decoration-none st-text-light">
                                <div className={`${homepageStyles["img-sec"]} mx-auto`}>
                                    <Image src={catImg5} />
                                </div>
                                <div className="text-sec mt-2">
                                    <p className="st-fs-18 st-fw-600 text-capitalize">storage</p>
                                </div>
                            </a>
                        </Link>
                    </div>
                </div>
            </Container>
        </section>
    )
}
