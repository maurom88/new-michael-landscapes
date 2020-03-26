import React from 'react'

import Sidebar from '../items/Sidebar'

function About() {
    return (
        <div>
            <main>
                <div className="about-container">
                    <h2>Michael Lewis</h2>
                    <p>
                        I fell in love with photography when I was teenager.
                        Back then it was  with film, and now I’ve gone digital… well, we have an open relationship,
                        I continuously switch between.
                    </p>
                    <p>
                        I grew up in nature, and fell in love with its beauty. I love the never ending challenge of trying to portray ‘that feeling’, you know, the warm evenings at twilight, the sense of isolation when you have a mountain to yourself, the sound of waves lapping the shore of a secluded lake.
                    </p>
                    <p>
                        My landscape are all about the outdoors and telling a story.
                    </p>
                    <p>
                        <img className="mainlogo" src="images/michael_lewis_portrait.jpg" alt="Michael Lewis Self Portrait" />
                    </p>
                </div>
            </main>

            <Sidebar />

        </div>
    )
}

export default About