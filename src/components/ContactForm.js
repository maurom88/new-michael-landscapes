import React from 'react'

function ContactForm() {
    return (
        <div>
            <main>
                <div class="container">
                    <h2>Get in touch</h2>
                    <p>I'd love to hear from you! I'll get back to you as soon as I can.</p>
                    <form action="" target="_self" method="POST">
                        <div class="form-container">
                            <div class="row">
                                <div class="col-narrow">
                                    <label for="name">Name: </label>
                                </div>
                                <div class="col-wide">
                                    <input type="text" name="name" placeholder="John Smith" required /><br />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-narrow">
                                    <label for="phone">Phone #: </label>
                                </div>
                                <div class="col-wide">
                                    <input type="tel" name="phone" placeholder="xxx-xxx-xxxx" /><br />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-narrow">
                                    <label for="email">Email address: </label>
                                </div>
                                <div class="col-wide">
                                    <input type="email" name="email" placeholder="name@example.com" required /><br />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-narrow">
                                    <label for="subject">Subject: </label>
                                </div>
                                <div class="col-wide">
                                    <input type="text" name="subject" required /><br />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-narrow">
                                    <label for="message">Your message: </label>
                                </div>
                                <div class="col-wide">
                                    <textarea rows="10" cols="30" name="message" required></textarea><br />
                                </div>
                            </div>
                            <div class="row col-narrow">
                                <input type="submit" value="Send message" />
                                <input type="reset" value="Reset" />
                            </div>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    )
}

export default ContactForm