import React from 'react'

import ContactLink from './ContactLink'

function Sidebar() {
    return (
        <div className="sidebar-services">
            <aside>
                <h2>Services</h2>
                <p>
                    Book a lesson<br />
                    Book a photoshoot
                    </p>
                <p>
                    <ContactLink />
                </p>
            </aside>
        </div>
    )
}

export default Sidebar