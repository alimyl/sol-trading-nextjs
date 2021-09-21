import React from "react";

// nextjs - link
import Link from "next/link";

// bootstrap
import { Container } from "react-bootstrap";

// page styles
import pageNotFoundStyles from "./styles/pagenotfound.module.scss";

export default function PageNotFound() {
    return (
        <div className="st-wrapper">
            <section
                id={pageNotFoundStyles["page-not-found-wrapper"]}
                className=""
            >
                <Container>
                    <div className={`${pageNotFoundStyles["page-not-found"]} text-center st-def-pad-TB d-flex align-items-center justify-content-center`}>
                        <div className="inner">
                            <p className={`${pageNotFoundStyles["heading"]} st-fw-700 st-text-primary`}>Page not found</p>
                            <p className={`${pageNotFoundStyles["desc"]} st-text-light`}>The page you are looking for could not be found</p>
                            <Link href="/home">
                                <a href="#" className={`${pageNotFoundStyles["link"]}`}>
                                    Go back to Home
                                </a>
                            </Link>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
}
