import React from 'react'

// bootstrap
import {
    Container,
    Row,
    Col,
} from 'react-bootstrap';

// icons : feather
import FeatherIcon from 'feather-icons-react';
// icons : fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
    faCcMastercard,
    faCcVisa,
    faCcAmex,
    faCcDiscover
} from '@fortawesome/free-brands-svg-icons'

// footer styles
import footerStyles from '../styles/footer.module.scss'

export default function BottomBar() {
    return (
        <div id="footer-bottom-bar" className="st-bg-black py-3">
            <Container>
                <Row className="footer-bottom-bar align-items-center">
                    {/* footer bootom bar item */}
                    <Col xs={12} md={4} className="footer-bottom-bar-item">
                        <div className="inner">
                            <p className="text-white st-fs-14 mb-0">
                                2021 &copy; Sol Trading. ALL Rights Reserved.
                            </p>
                        </div>
                    </Col>

                    {/* footer bootom bar item */}
                    <Col xs={12} md={4} className="footer-bottom-bar-item">
                        <div className="inner">
                            <div className="footer-social-icons d-flex justify-content-center">
                                {/* link */}
                                <a href="/" target="_blank" className="d-inline-flex text-white mx-2" title="Twitter">
                                    <FeatherIcon
                                        icon="twitter"
                                        size="17"
                                        className="icon" />
                                </a>
                                {/* link */}
                                <a href="/" target="_blank" className="d-inline-flex text-white mx-2" title="Facebook">
                                    <FeatherIcon
                                        icon="facebook"
                                        size="17"
                                        className="icon" />
                                </a>
                                {/* link */}
                                <a href="/" target="_blank" className="d-inline-flex text-white mx-2" title="Linkedin">
                                    <FeatherIcon
                                        icon="linkedin"
                                        size="17"
                                        className="icon" />
                                </a>
                                {/* link */}
                                <a href="/" target="_blank" className="d-inline-flex text-white mx-2" title="Youtube">
                                    <FeatherIcon
                                        icon="youtube"
                                        size="17"
                                        className="icon" />
                                </a>
                            </div>
                        </div>
                    </Col>

                    {/* footer bootom bar item */}
                    <Col xs={12} md={4} className="footer-bottom-bar-item">
                        <div className="inner">
                            <div className="footer-payment-icons d-flex justify-content-end">
                                {/* link */}
                                <a href="/" target="_blank" className="d-inline-flex text-white mx-2" title="Master Card">
                                    <FontAwesomeIcon icon={faCcMastercard} size="lg" />
                                </a>
                                {/* link */}
                                <a href="/" target="_blank" className="d-inline-flex text-white mx-2" title="Visa">
                                    <FontAwesomeIcon icon={faCcVisa} size="lg" />
                                </a>
                                {/* link */}
                                <a href="/" target="_blank" className="d-inline-flex text-white mx-2" title="Amex">
                                    <FontAwesomeIcon icon={faCcAmex} size="lg" />
                                </a>
                                {/* link */}
                                <a href="/" target="_blank" className="d-inline-flex text-white mx-2" title="Discover">
                                    <FontAwesomeIcon icon={faCcDiscover} size="lg" />
                                </a>

                            </div>
                        </div>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}
