import React from 'react'

import Sidebar from '../items/Sidebar'
import GalleryPic from '../items/GalleryPic'

function Home() {
    return (
        <div>

            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-8">
                        <main className="main-content">
                            <p>
                                "We come from Nature. We are connected to it throughout our whole lives,
                                there is an importance to it.
                                If we destroy nature, we will ultimately destroy ourselves"<br />
                                <span className="quote">- Michael</span>
                            </p>
                        </main>
                    </div>

                    <div className="col-sm-4">
                        <Sidebar />
                    </div>
                </div>
            </div>

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

        </div >
    )
}

export default Home