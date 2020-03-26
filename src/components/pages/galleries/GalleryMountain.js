import React from 'react'

import GalleryPic from '../../items/GalleryPic'

function GalleryMountain() {
    return (
        <div>
            <main>
                <GalleryPic height="400" width="600" href="#" desc="Forest 1" alt="Forest 1" src="images/forests/forest_1.jpg" />
                <GalleryPic height="400" width="600" href="#" desc="Forest 2" alt="Forest 2" src="images/forests/forest_2.jpg" />
            </main>
        </div>
    )
}

export default GalleryMountain