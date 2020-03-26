import React, { useState } from 'react'

function ContactForm() {
    const [name, setName] = useState()
    const [phone, setPhone] = useState()
    const [email, setEmail] = useState()
    const [subject, setSubject] = useState()
    const [message, setMessage] = useState()

    // On form submission
    function handleSubmit(event) {
        event.preventDefault()

        // For debugging purposes
        console.log(name, email)

        // Need to define an API for posting form
        let url = ""

        // Use fetch to post the content of the form to the url above
        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, phone, email, subject, message })
        })
            .then(res => res.json())
            .then(res => console.log(res))

            .catch(error => console.log(error))
    }

    function handleNameInput(event) {
        setName(event.target.value)
    }

    function handlePhoneInput(event) {
        setPhone(event.target.value)
    }

    function handleEmailInput(event) {
        setEmail(event.target.value)
    }

    function handleSubjectInput(event) {
        setSubject(event.target.value)
    }

    function handleMessageInput(event) {
        setMessage(event.target.message)
    }

    return (
        <form id="contactForm" onSubmit={handleSubmit}>
            <div className="form-container">
                <div className="row">
                    <div className="col-narrow">
                        <label htmlFor="name">Name: </label>
                    </div>
                    <div className="col-wide">
                        <input onChange={handleNameInput} type="text" name="name" placeholder="John Smith" required /><br />
                    </div>
                </div>
                <div className="row">
                    <div className="col-narrow">
                        <label htmlFor="phone">Phone #: </label>
                    </div>
                    <div className="col-wide">
                        <input onChange={handlePhoneInput} type="tel" name="phone" placeholder="xxx-xxx-xxxx" /><br />
                    </div>
                </div>
                <div className="row">
                    <div className="col-narrow">
                        <label htmlFor="email">Email address: </label>
                    </div>
                    <div className="col-wide">
                        <input onChange={handleEmailInput} type="email" name="email" placeholder="name@example.com" required /><br />
                    </div>
                </div>
                <div className="row">
                    <div className="col-narrow">
                        <label htmlFor="subject">Subject: </label>
                    </div>
                    <div className="col-wide">
                        <input onChange={handleSubjectInput} type="text" name="subject" required /><br />
                    </div>
                </div>
                <div className="row">
                    <div className="col-narrow">
                        <label htmlFor="message">Your message: </label>
                    </div>
                    <div className="col-wide">
                        <textarea onChange={handleMessageInput} rows="10" cols="30" name="message" required></textarea><br />
                    </div>
                </div>
                <div className="row col-narrow">
                    <input type="submit" value="Send message" />
                    <input type="reset" value="Reset" />
                </div>
            </div>
        </form>
    )
}

export default ContactForm