import React from 'react'

function Home() {
    return (
        <div>
            <main>
                <div class="container">
                    <p>
                        "We come from Nature. We are connected to it throughout our whole lives,
                        there is an importance to it.
                        If we destroy nature, we will ultimately destroy ourselves"<br />
                        <span class="quote">- Michael</span>
                    </p>
                </div>
            </main>

            <aside>
                <div class="sidebar services">
                    <h2>Services</h2>
                    <p>
                        Book a lesson<br />
                        Book a photoshoot
                    </p>
                    <p><a href="contactus.html">Contact Michael</a></p>
                </div>
            </aside>

            <aside>
                <div class="recentwork">
                    <h2>Recent Work</h2>
                    <img src="images/lakes/lakes_22.jpg" width="100%" alt="Lake" />
                    <img src="images/forest/forest_22.jpg" width="100%" alt="Forest" />
                    <img src="images/nightSky/nightsky_22.jpg" width="100%" alt="Night Sky" />
                </div>
            </aside>
        </div>
    )
}

export default Home