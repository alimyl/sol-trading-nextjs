import React from 'react'

// bootstrap
import {
    Container,
} from 'react-bootstrap';

// breadcrumbs styles
import pageBannerStyles from './styles/pageBanner.module.scss'

// default banner
import defaultPageBanner from 'public/images/page-banner-default.jpg'

export default function PageBanner(props) {
    const { pageImageUrl, pageTitle } = props

    return (
        <section id={pageBannerStyles["page-banner-wrapper"]} style={{backgroundImage: `url("${defaultPageBanner}")`}}>
            <Container fluid className="px-0">
                <div className={`${pageBannerStyles['page-banner']} d-flex align-items-center justify-content-center`}>
                    <div className={`${[pageBannerStyles["content"]]}`}>
                        <p className="mb-0">{pageTitle ?? "Sol Trading"}</p>
                    </div>
                </div>
            </Container>
        </section>
    )
}
