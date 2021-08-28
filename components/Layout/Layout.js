import React, { Children } from 'react'

// header and footer
import Header from 'components/CommonComponents/Header'
import Footer from 'components/CommonComponents/Footer'

export default function Layout(props) {
    const { headerProps, footerProps, children } = props

    return (
        <React.Fragment>
            <Header headerProps={headerProps} />
            {children}
            <Footer footerProps={footerProps} />
        </React.Fragment>
    )
}
