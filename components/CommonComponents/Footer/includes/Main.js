import React from 'react'

// nextjs - link
import Link from 'next/link'

// bootstrap
import {
    Container,
    Row,
    Col,
    Form,
} from 'react-bootstrap';

// icons : feather
import FeatherIcon from 'feather-icons-react';

// footer styles
import footerStyles from '../styles/footer.module.scss'

export default function Main() {
    return (
        <div id={footerStyles["footer-main-wrapper"]} className="st-bg-footer-main py-3 py-lg-4">
            <Container>
                <Row className={footerStyles["footer-main"]}>
                    {/* footer main item */}
                    <Col xs={12} sm={6} md={4} lg={2} className="footer-main-item one mb-2">
                        <div className="inner">
                            <p className="head st-text-light st-fs-17 st-fw-600 mb-3">CONTACT US</p>
                            {/* link */}
                            <a href="/" className="footer-main-link text-decoration-none st-text-light d-inline-flex mb-2">
                                <FeatherIcon
                                    icon="phone"
                                    size="15"
                                    className="icon me-2 mt-1" />
                                <span>Contact Us</span>
                            </a> <br />

                            {/* link */}
                            <a href="/" className="footer-main-link text-decoration-none st-text-light d-inline-flex mb-2">
                                <FeatherIcon
                                    icon="smartphone"
                                    size="15"
                                    className="icon me-2 mt-1" />
                                <span>Mobile</span>
                            </a> <br />

                            {/* link */}
                            <a href="/" className="footer-main-link text-decoration-none st-text-light d-inline-flex mb-2">
                                <FeatherIcon
                                    icon="printer"
                                    size="15"
                                    className="icon me-2 mt-1" />
                                <span>Fax</span>
                            </a> <br />

                            {/* link */}
                            <a href="/" className="footer-main-link text-decoration-none st-text-light d-inline-flex mb-2">
                                <FeatherIcon
                                    icon="mail"
                                    size="15"
                                    className="icon me-2 mt-1" />
                                <span>Send Mail</span>
                            </a> <br />
                        </div>
                    </Col>

                    {/* footer main item */}
                    <Col xs={12} sm={6} md={4} lg={2} className="footer-main-item two mb-2">
                        <div className="inner">
                            <p className="head st-text-light st-fs-17 st-fw-600 mb-3">CUSTOMER SERVICE</p>
                            {/* link */}
                            <Link href="/home">
                                <a className="footer-main-link text-decoration-none st-text-light d-inline-flex mb-2">
                                    <span>My Account</span>
                                </a>
                            </Link> <br />
                            <Link href="/home">
                                <a className="footer-main-link text-decoration-none st-text-light d-inline-flex mb-2">
                                    <span>View Cart</span>
                                </a>
                            </Link> <br />
                            <Link href="/home">
                                <a className="footer-main-link text-decoration-none st-text-light d-inline-flex mb-2">
                                    <span>Log In</span>
                                </a>
                            </Link> <br />
                            <Link href="/home">
                                <a className="footer-main-link text-decoration-none st-text-light d-inline-flex mb-2">
                                    <span>Register</span>
                                </a>
                            </Link> <br />
                        </div>
                    </Col>

                    {/* footer main item */}
                    <Col xs={12} sm={6} md={4} lg={2} className="footer-main-item three mb-2">
                        <div className="inner">
                            <p className="head st-text-light st-fs-17 st-fw-600 mb-3">USEFUL LINKS</p>
                            <Link href="/home">
                                <a className="footer-main-link text-decoration-none st-text-light d-inline-flex mb-2">
                                    <span>About Us</span>
                                </a>
                            </Link> <br />
                            <Link href="/home">
                                <a className="footer-main-link text-decoration-none st-text-light d-inline-flex mb-2">
                                    <span>Help / FAQs</span>
                                </a>
                            </Link> <br />
                        </div>
                    </Col>

                    {/* footer main item */}
                    <Col xs={12} sm={6} md={4} lg={2} className="footer-main-item four mb-2">
                        <div className="inner">
                            <p className="head st-text-light st-fs-17 st-fw-600 mb-3">COMPANY INFO</p>
                            <Link href="/content/privacy-policy">
                                <a className="footer-main-link text-decoration-none st-text-light d-inline-flex mb-2">
                                    <span>Privacy Policy</span>
                                </a>
                            </Link> <br />
                            <Link href="/content/terms-and-conditions">
                                <a className="footer-main-link text-decoration-none st-text-light d-inline-flex mb-2">
                                    <span>Terms & Conditions</span>
                                </a>
                            </Link> <br />
                        </div>
                    </Col>
                    
                    {/* footer main item */}
                    <Col xs={12} sm={12} md={8} lg={4} className="footer-main-item five mb-2">
                        <div className="inner">
                            <div className="head-wrapper mb-3">
                                <p className="head st-text-light st-fs-17 st-fw-600 mb-1">SUBSCRIBE TO OUR NEWSLETTER</p>
                                <p className="desc st-text-light st-fs-13">Signup to receive our latest news and promotion. We never send spam!</p>
                            </div>

                            <div className="footer-main-newsletter-form pe-lg-4">
                                <Form.Group className="st-form st-form-rounded st-form-with-icon-right position-relative">
                                    <Form.Control type="text" placeholder="Your email address" />
                                    <button type="submit" className="no-browser-style icon position-absolute cursor-pointer" style={{ lineHeight: 0 }}>
                                        <FeatherIcon
                                            icon="send"
                                            size="16" />
                                    </button>
                                </Form.Group>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
