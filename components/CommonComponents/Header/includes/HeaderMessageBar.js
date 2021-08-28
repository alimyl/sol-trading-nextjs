import React from 'react'

// bootstrap
import {
    Container,
} from 'react-bootstrap';

// header styles
import headerStyles from '../styles/header.module.scss'

// main component function
function HeaderMessageBar() {
    return (
        <div id={headerStyles['message-bar-wrapper']} className="st-bg-black">
            <Container>
                <div className={`${headerStyles['message-bar']} text-center py-2`}>
                    <p className="text-uppercase text-white st-fw-700 mb-0">
                        warning: all products sold on this website are for
                        tobacco use
                        only
                    </p>
                </div>
            </Container>
        </div>
    )
}


export default HeaderMessageBar