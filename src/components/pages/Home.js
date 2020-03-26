import React from 'react'

import Sidebar from '../items/Sidebar'

function Home() {
    return (
        <div>
            <main>
                <div className="container">
                    <p>
                        "We come from Nature. We are connected to it throughout our whole lives,
                        there is an importance to it.
                        If we destroy nature, we will ultimately destroy ourselves"<br />
                        <span className="quote">- Michael</span>
                    </p>
                </div>
            </main>

            <Sidebar />

            <aside>
                <div className="recentwork">
                    <h2>Recent Work</h2>
                    <img src="images/lakes/lakes_22.jpg" width="100%" alt="Lake" />
                    <img src="images/forests/forest_22.jpg" width="100%" alt="Forest" />
                    <img src="images/nightSkies/nightsky_22.jpg" width="100%" alt="Night Sky" />
                </div>
            </aside>
        </div>
    )
}

export default Home