import React from 'react'

import GalleryPic from '../../items/GalleryPic'

function GalleryForest() {
    return (
        <main>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <GalleryPic divClassName="gallery-pic m-2" imgClassName="img-thumbnail" href="#"
                        desc="Forest 1" alt="Forest 1" src="../images/forests/forest_1.jpg" />
                    </div>
                    <div className="col-sm-6">
                        <GalleryPic  divClassName="gallery-pic m-2" imgClassName="img-thumbnail" href="#"
                            desc="Forest 2" alt="Forest 2" src="../images/forests/forest_2.jpg" />
                    </div>
                </div>
            </div>
        </main >
    )
}

export default GalleryForest