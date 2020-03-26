import React from 'react'

import GalleryPic from '../../items/GalleryPic'

function GalleryMain() {
    return (
        <div>
            <main>
                <GalleryPic height="400" width="600" href="/galleries/forest" desc="Forest Pictures" alt="Forests" src="images/forests/forest_1.jpg" />
                <GalleryPic height="400" width="600" href="/galleries/lake" desc="Lakes Pictures" alt="Lakes" src="images/lakes/lakes_1.jpg" />
                <GalleryPic height="400" width="600" href="/galleries/nightSky" desc="Night Skies Pictures" alt="Night Skies" src="images/mountains/mountain_1.jpg" />
                <GalleryPic height="400" width="600" href="/galleries/mountain" desc="Mountain Pictures" alt="Mountains" src="images/nightSkies/nightsky_1.jpg" />
            </main>
        </div>
    )
}

export default GalleryMain