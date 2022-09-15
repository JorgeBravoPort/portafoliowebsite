import React, { useRef } from "react";
import '/Users/jorgeandresbravo/portafoliowebsite/frontend/src/styles/components/pages/ContactMe.scss';
import emailjs from "@emailjs/browser";

const ContactMe = (props) => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm(
            'service_3a8rw95',
            'template_b8hlqmd',
            form.current,
            'EShldKNXksLeavM2K',
        )
            .then((result) => {
                alert('Message succesfully sent!')
                window.location.reload(false)
            }, () => {
                alert('Message failed!')
            },
            )
    }

    return (

        <div className="containercontact-page">

            <h1>Contact Me</h1>
            <p className="contact-p">
                Let's stay in touch!
            </p>
            <div className="contact-form">
                <form ref={form} onSubmit={sendEmail}>
                    <ul>
                        <li className="half">
                            <input type="text" name="name" placeholder="Name" required />
                        </li>
                        <li className="half">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                required
                            />
                        </li>
                        <li>
                            <input placeholder="Subject" type="text" name="subject" required />
                        </li>
                        <textarea
                            placeholder="Message"
                            name="message"
                            required
                        />
                        <li>
                            <input type="submit" className="flat-button" value="SEND" />
                        </li>
                    </ul>
                </form>
            </div>

        </div>
        // comentario

    )
};


export default ContactMe;