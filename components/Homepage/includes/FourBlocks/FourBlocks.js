import React from 'react'

// nextjs - image
import Image from 'next/image'

// bootstrap
import {
    Container,
    Row,
    Col,
} from 'react-bootstrap';

// styles
import homepageStyles from "../../styles/Homepage.module.scss"

// images
import imgCreditCard from 'public/images/icons/icon__credit-card.jpg'
import imgMessages from 'public/images/icons/icon__messages.jpg'
import imgShield from 'public/images/icons/icon__shield.jpg'
import imgThumbsup from 'public/images/icons/icon__thumbs-up.jpg'

export default function FourBlocks() {
    return (
        <section id={homepageStyles["four-blocks-section-wrapper"]} className="st-def-mar-TB">
            <Container>
                <Row className={homepageStyles["four-blocks-section"]}>
                    {/* item */}
                    <Col xs={6} md={3} className="item text-center mb-2">
                        <div className="inner">
                            {/* img sec */}
                            <div className="img-sec">
                                <Image src={imgCreditCard} />
                            </div>
                            {/* text sec */}
                            <div className="text-sec mt-2">
                                <p className="text-capitalize st-text-light st-fs-17">Secure Payment</p>
                            </div>
                        </div>
                    </Col>

                    {/* item */}
                    <Col xs={6} md={3} className="item text-center mb-2">
                        <div className="inner">
                            {/* img sec */}
                            <div className="img-sec">
                                <Image src={imgShield} />
                            </div>
                            {/* text sec */}
                            <div className="text-sec mt-2">
                                <p className="text-capitalize st-text-light st-fs-17">High Quality Products</p>
                            </div>
                        </div>
                    </Col>

                    {/* item */}
                    <Col xs={6} md={3} className="item text-center mb-2">
                        <div className="inner">
                            {/* img sec */}
                            <div className="img-sec">
                                <Image src={imgMessages} />
                            </div>
                            {/* text sec */}
                            <div className="text-sec mt-2">
                                <p className="text-capitalize st-text-light st-fs-17">24/7 customer care</p>
                            </div>
                        </div>
                    </Col>

                    {/* item */}
                    <Col xs={6} md={3} className="item text-center mb-2">
                        <div className="inner">
                            {/* img sec */}
                            <div className="img-sec">
                                <Image src={imgThumbsup} />
                            </div>
                            {/* text sec */}
                            <div className="text-sec mt-2">
                                <p className="text-capitalize st-text-light st-fs-17">100% satisfation</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
