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
            <div className="form-group">
                <label htmlFor="name">Name: </label>
                <input onChange={handleNameInput} className="form-control"  type="text" name="name" placeholder="John Smith" required /><br />
            </div>
            <div className="form-group">
                <label htmlFor="phone">Phone #: </label>
                <input onChange={handlePhoneInput} className="form-control" type="tel" name="phone" placeholder="xxx-xxx-xxxx" /><br />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email address: </label>
                <input onChange={handleEmailInput} className="form-control" type="email" name="email" placeholder="name@example.com" required /><br />
            </div>
            <div className="form-group">
                <label htmlFor="subject">Subject: </label>
                <input onChange={handleSubjectInput} className="form-control" type="text" name="subject" required /><br />
            </div>
            <div className="form-group">
                <label htmlFor="message">Your message: </label>
                <textarea onChange={handleMessageInput} className="form-control" rows="10" cols="30" name="message" required></textarea><br />
            </div>
                <input className="btn btn-primary mx-2 mb-2" type="submit" value="Send message" />
                <input className="btn btn-primary mx-2 mb-2" type="reset" value="Reset" />
        </form>
    )
}

export default ContactForm