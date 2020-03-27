import React from 'react'

import GalleryPic from '../../items/GalleryPic'

function GalleryMountain() {
    return (
        <div>
            <main>
                <GalleryPic height="400" width="600" href="#" desc="Mountain 1" alt="Mountain 1" src="../images/mountains/mountain_1.jpg" />
                <GalleryPic height="400" width="600" href="#" desc="Mountain 2" alt="Mountain 2" src="../images/mountains/mountain_2.jpg" />
            </main>
        </div>
    )
}

export default GalleryMountain