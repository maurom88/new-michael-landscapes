import React from 'react'

import ContactForm from '../ContactForm'

function ContactMe() {
    return (
        <main>
            <div className="container">
                <div className="row">
                    <div className="col-sm-8 mx-auto">
                        <h2>Get in touch</h2>
                        <p>
                            I'd love to hear from you! <br />
                    I'll get back to you as soon as I can.
                </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-8 mx-auto">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ContactMe