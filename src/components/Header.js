import React from 'react'

function Header() {
    return (
        <div>
            <img alt="Michael's Landscapes" class="mainlogo" src="images/MichaelsLandscapes_White.png" />

            <div class="navbar">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <div class="dropdown">
                    <a class="dropbtn">Galleries</a>
                    <div class="dropdown-content">
                        <a href="/gallery">All Categories</a>
                        <a href="photogallery_forest.html">Forest</a>
                        <a href="photogallery_lakes.html">Lakes</a>
                        <a href="photogallery_mountains.html">Mountains</a>
                        <a href="photogallery_night.html">Night Skies</a>
                    </div>
                </div>
                <a href="contact_me">Contact</a>
            </div>
        </div>
    )
}

export default Header