import React from 'react'

// INCLUDES
import HeaderMessageBar from './includes/HeaderMessageBar'
import HeaderTopBar from './includes/HeaderTopBar'
import HeaderMenu from './includes/HeaderMenu'

// main component function
function Header() {
    return (
        <header>
            {/* header - message bar */}
            <HeaderMessageBar />

            {/* header - top bar */}
            <HeaderTopBar />

            {/* header - top bar */}
            <HeaderMenu />
            

        </header>
    )
}

export default Header