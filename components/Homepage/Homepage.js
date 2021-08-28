import React from 'react'

// includes
import Slider from './includes/Slider'
import Brands from './includes/Brands'
import Categories from './includes/Categories'
import Slider2 from './includes/Slider2'
import Products from './includes/Products'
import Slider3 from './includes/Slider3'
import FourBlocks from './includes/FourBlocks'

// main component function
export default function Homepage() {
    return (
        // ST WRAPPER
        <div className="st-wrapper">
            {/* section :  slider */}
            <Slider />

            {/* section :  brands */}
            <Brands />

            {/* section :  categories */}
            <Categories />

            {/* section :  slider2 */}
            <Slider2 />

            {/* section :  products */}
            <Products />

            {/* section :  slider3 */}
            <Slider3 />

            {/* section :  fourblocks */}
            <FourBlocks />
        </div>
    )
}
