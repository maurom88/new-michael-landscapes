import React from 'react'

import ContactForm from '../ContactForm'

function ContactMe() {
    return (
        <main>
            <div className="container">
                <h2>Get in touch</h2>
                <p>
                    I'd love to hear from you! <br />
                    I'll get back to you as soon as I can.
                </p>
                <ContactForm />
            </div>
        </main>
    )
}

export default ContactMe