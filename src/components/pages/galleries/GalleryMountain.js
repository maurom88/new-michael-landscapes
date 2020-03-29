import React from 'react'

import GalleryPic from '../../items/GalleryPic'

function GalleryMountain() {
    return (
        <main>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <GalleryPic href="#" divClassName="gallery-pic m-2" imgClassName="img-thumbnail" 
                            desc="Mountain 1" alt="Mountain 1" src="../images/mountains/mountain_1.jpg" />
                    </div>
                    <div className="col-sm-6">
                        <GalleryPic href="#" divClassName="gallery-pic m-2" imgClassName="img-thumbnail"
                            desc="Mountain 2" alt="Mountain 2" src="../images/mountains/mountain_2.jpg" />
                    </div>
                </div>
            </div>
        </main >
    )
}

export default GalleryMountain