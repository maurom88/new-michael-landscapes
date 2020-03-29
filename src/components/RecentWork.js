import React from 'react'

import GalleryPic from './items/GalleryPic'

function RecentWork() {
    return (
        <aside>
            <div className="container mt-5">
                <div className="row my-3">
                    <div className="col-sm-12">
                        <h2>Recent Work</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4 px-1">
                        <GalleryPic divClassName="gallery-pic m-2" imgClassName="img-thumbnail"
                            href="/galleries/lake" alt="Lake"
                            src="images/lakes/lake_22.jpg" />
                    </div>

                    <div className="col-sm-4 px-1">
                        <GalleryPic divClassName="gallery-pic m-2" imgClassName="img-thumbnail"
                            href="/galleries/forest" alt="Forest"
                            src="images/forests/forest_22.jpg" />
                    </div>

                    <div className="col-sm-4 px-1">
                        <GalleryPic divClassName="gallery-pic m-2" imgClassName="img-thumbnail"
                            href="/galleries/nightSky" alt="Night Sky"
                            src="images/nightSkies/nightsky_22.jpg" />
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default RecentWork