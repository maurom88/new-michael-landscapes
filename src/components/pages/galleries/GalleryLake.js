import React from 'react'

import GalleryPic from '../../items/GalleryPic'

function GalleryLake() {
    return (
        <main>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <GalleryPic divClassName="gallery-pic m-2" imgClassName="img-thumbnail" href="#"
                            desc="Lake 1" alt="Lake 1" src="../images/lakes/lake_1.jpg" />
                    </div>
                    <div className="col-sm-6">
                        <GalleryPic divClassName="gallery-pic m-2" imgClassName="img-thumbnail" href="#"
                            desc="Lake 2" alt="Lake 2" src="../images/lakes/lake_2.jpg" />
                    </div>
                    <div className="col-sm-6">
                        <GalleryPic divClassName="gallery-pic m-2" imgClassName="img-thumbnail" href="#"
                            desc="Lake 3" alt="Lake 3" src="../images/lakes/lake_3.jpg" />
                    </div>
                    <div className="col-sm-6">
                        <GalleryPic divClassName="gallery-pic m-2" imgClassName="img-thumbnail" href="#"
                            desc="Lake 4" alt="Lake 4" src="../images/lakes/lake_4.jpg" />
                    </div>
                    <div className="col-sm-6">
                        <GalleryPic divClassName="gallery-pic m-2" imgClassName="img-thumbnail" href="#"
                            desc="Lake 5" alt="Lake 5" src="../images/lakes/lake_5.jpg" />
                    </div>
                    <div className="col-sm-6">
                        <GalleryPic divClassName="gallery-pic m-2" imgClassName="img-thumbnail" href="#"
                            desc="Lake 6" alt="Lake 6" src="../images/lakes/lake_6.jpg" />
                    </div>
                    <div className="col-sm-6">
                        <GalleryPic divClassName="gallery-pic m-2" imgClassName="img-thumbnail" href="#"
                            desc="Lake 7" alt="Lake 7" src="../images/lakes/lake_7.jpg" />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default GalleryLake