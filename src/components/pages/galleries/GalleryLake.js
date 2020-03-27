import React from 'react'

import GalleryPic from '../../items/GalleryPic'

function GalleryLake() {
    return (
        <div>
            <main>
                <GalleryPic height="400" width="600" href="#" desc="Lake 1" alt="Lake 1" src="../images/lakes/lake_1.jpg" />
                <GalleryPic height="400" width="600" href="#" desc="Lake 2" alt="Lake 2" src="../images/lakes/lake_2.jpg" />
                <GalleryPic height="400" width="600" href="#" desc="Lake 3" alt="Lake 3" src="../images/lakes/lake_3.jpg" />
                <GalleryPic height="400" width="600" href="#" desc="Lake 4" alt="Lake 4" src="../images/lakes/lake_4.jpg" />
                <GalleryPic height="400" width="600" href="#" desc="Lake 5" alt="Lake 5" src="../images/lakes/lake_5.jpg" />
                <GalleryPic height="400" width="600" href="#" desc="Lake 6" alt="Lake 6" src="../images/lakes/lake_6.jpg" />
                <GalleryPic height="400" width="600" href="#" desc="Lake 7" alt="Lake 7" src="../images/lakes/lake_7.jpg" />
            </main>
        </div>
    )
}

export default GalleryLake