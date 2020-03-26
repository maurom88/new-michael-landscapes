import React from 'react'

function ContactForm() {
    return (
        <form action="" target="_self" method="POST">
            <div className="form-container">
                <div className="row">
                    <div className="col-narrow">
                        <label for="name">Name: </label>
                    </div>
                    <div className="col-wide">
                        <input type="text" name="name" placeholder="John Smith" required /><br />
                    </div>
                </div>
                <div className="row">
                    <div className="col-narrow">
                        <label for="phone">Phone #: </label>
                    </div>
                    <div className="col-wide">
                        <input type="tel" name="phone" placeholder="xxx-xxx-xxxx" /><br />
                    </div>
                </div>
                <div className="row">
                    <div className="col-narrow">
                        <label for="email">Email address: </label>
                    </div>
                    <div className="col-wide">
                        <input type="email" name="email" placeholder="name@example.com" required /><br />
                    </div>
                </div>
                <div className="row">
                    <div className="col-narrow">
                        <label for="subject">Subject: </label>
                    </div>
                    <div className="col-wide">
                        <input type="text" name="subject" required /><br />
                    </div>
                </div>
                <div className="row">
                    <div className="col-narrow">
                        <label for="message">Your message: </label>
                    </div>
                    <div className="col-wide">
                        <textarea rows="10" cols="30" name="message" required></textarea><br />
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