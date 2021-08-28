import React, { useState } from 'react'

// bootstrap
import {
    Container,
    Nav,
    Tab,
} from 'react-bootstrap';

// styles
import homepageStyles from "../../styles/Homepage.module.scss"

// tabs components
import FeaturedProducts from './includes/FeaturedProducts'
import NewProducts from './includes/NewProducts'

export default function Products() {
    const [currentSelected, setCurrentSelected] = useState("featuredProducts")

    return (
        <section id={homepageStyles["products-wrapper"]} className="st-def-mar-T">
            <Container>
                <div className={homepageStyles["products"]}>
                    <Tab.Container
                        id="home-products-tab"
                        defaultActiveKey="featuredProducts"
                        // mountOnEnter={true}
                        // unmountOnExit={true}
                        onSelect={ev => setCurrentSelected(ev)}
                    >
                        {/* tab links */}
                        <Nav variant="tabs" className="justify-content-center border-0">
                            {/* nav item : Featured Products */}
                            <Nav.Item className={homepageStyles["nav-item-in-prods"]}>
                                <Nav.Link
                                    eventKey="featuredProducts"
                                    className={`${homepageStyles["nav-link-in-prods"]} ${currentSelected === "featuredProducts" ? homepageStyles["current-active"] : ""} text-uppercase st-fw-600 border-0 mx-2`}>
                                    <span>Featured</span> Products
                                </Nav.Link>
                            </Nav.Item>

                            {/* nav item : New Products */}
                            <Nav.Item className={homepageStyles["nav-item-in-prods"]}>
                                <Nav.Link
                                    eventKey="newProducts"
                                    className={`${homepageStyles["nav-link-in-prods"]} ${currentSelected === "newProducts" ? homepageStyles["current-active"] : ""} text-uppercase st-fw-600 border-0 mx-2`}>
                                    <span>New</span> Products
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>

                        {/* tab content */}
                        <Tab.Content className="mt-3">
                            {/* tab page : featured products */}
                            <Tab.Pane eventKey="featuredProducts">
                                <FeaturedProducts />
                            </Tab.Pane>

                            {/* tab page : featured products */}
                            <Tab.Pane eventKey="newProducts">
                                <NewProducts />
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                </div>
            </Container>
        </section>
    )
}
