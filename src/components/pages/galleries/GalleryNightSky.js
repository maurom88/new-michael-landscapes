import React from 'react'

import GalleryPic from '../../items/GalleryPic'

function GalleryNightSky() {
    return (
        <main>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <GalleryPic divClassName="gallery-pic m-2" imgClassName="img-thumbnail" href="#"
                            desc="Night Sky 1" alt="Night Sky 1" src="../images/nightSkies/nightSky_1.jpg" />
                    </div>
                    <div className="col-sm-6">
                        <GalleryPic divClassName="gallery-pic m-2" imgClassName="img-thumbnail" href="#"
                            desc="Night Sky 2" alt="Night Sky 2" src="../images/nightSkies/nightSky_2.jpg" />
                    </div>
                </div>
            </div>
        </main >
    )
}

export default GalleryNightSky