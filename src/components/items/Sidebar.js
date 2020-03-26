import React from 'react'

import ContactLink from './ContactLink'

function Sidebar() {
    return (
        <aside>
            <div className="sidebar services">
                <h2>Services</h2>
                <p>
                    Book a lesson<br />
                    Book a photoshoot
                    </p>
                <p>
                    <ContactLink />
                </p>
            </div>
        </aside>
    )
}

export default Sidebar