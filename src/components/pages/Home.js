import React from 'react'

import Sidebar from '../items/Sidebar'
import RecentWork from '../RecentWork'

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

            <RecentWork />

        </div >
    )
}

export default Home