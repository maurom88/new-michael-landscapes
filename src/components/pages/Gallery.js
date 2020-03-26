import React from 'react'

function Gallery() {
    return (
        <div>
            <main>
                <div class="gallery">
                    <a href="photogallery_forest.html">
                        <img alt="Forest" height="400" src="Images/Forest/forest_1.jpg" width="600" />
                    </a>
                    <div class="desc">Forest Pictures</div>
                </div>

                <div class="gallery">
                    <a href="photogallery_lakes.html">
                        <img alt="Lakes" height="400" src="Images/Lakes/lakes_1.jpg" width="600" />
                    </a>
                    <div class="desc">Lakes Pictures</div>
                </div>

                <div class="gallery">
                    <a href="photogallery_mountains.html">
                        <img alt="Northern Lights" height="400" src="Images/Mountain/mountain_1.jpg" width="600" />
                    </a>
                    <div class="desc">Mountains Pictures</div>
                </div>

                <div class="gallery">
                    <a href="photogallery_night.html">
                        <img alt="Mountains" height="400" src="Images/NightSky/nightsky_1.jpg" width="600" />
                    </a>
                    <div class="desc">NightSky Gallery</div>
                </div>
            </main>
        </div>
    )
}

export default Gallery