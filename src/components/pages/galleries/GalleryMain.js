import React from 'react'

import GalleryPic from '../../items/GalleryPic'

function GalleryMain() {
    return (
        <main>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <GalleryPic divClassName="gallery-pic m-2" imgClassName="img-thumbnail" href="/galleries/forest"
                            desc="Forest Pictures" alt="Forests" src="images/forests/forest_22.jpg" />
                        <GalleryPic divClassName="gallery-pic m-2" imgClassName="img-thumbnail" href="/galleries/lake"
                            desc="Lakes Pictures" alt="Lakes" src="images/lakes/lake_22.jpg" />
                    </div>
                    <div className="col-sm-6">
                        <GalleryPic divClassName="gallery-pic m-2" imgClassName="img-thumbnail" href="/galleries/nightSky"
                            desc="Night Skies Pictures" alt="Night Skies" src="images/mountains/mountain_1.jpg" />
                        <GalleryPic divClassName="gallery-pic m-2" imgClassName="img-thumbnail" href="/galleries/mountain"
                            desc="Mountains Pictures" alt="Mountains" src="images/nightSkies/nightsky_22.jpg" />
                    </div>
                </div>
            </div>
        </main >
    )
}

export default GalleryMain