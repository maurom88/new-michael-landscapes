import React from 'react'
import ContactLink from './items/ContactLink'

function Header() {
    return (
        <div>
            <img alt="Michael's Landscapes" className="mainlogo" src="images/MichaelsLandscapes_White.png" />

            <div className="navbar">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <div className="dropdown">
                    <a className="dropbtn">Galleries</a>
                    <div className="dropdown-content">
                        <a href="/gallery">All Categories</a>
                        <a href="photogallery_forest.html">Forest</a>
                        <a href="photogallery_lakes.html">Lakes</a>
                        <a href="photogallery_mountains.html">Mountains</a>
                        <a href="photogallery_night.html">Night Skies</a>
                    </div>
                </div>
                <ContactLink />
            </div>
        </div>
    )
}

export default Header