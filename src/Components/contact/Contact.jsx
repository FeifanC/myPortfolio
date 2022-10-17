import React from 'react'
import "./contact.css"
import { MdOutlineEmail } from "react-icons/md"
import { RiMessengerLine } from "react-icons/ri"
import { BsWhatsapp } from "react-icons/bs"
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import { useState } from 'react'


const Contact = () => {
    const form = useRef();
    const [sent, setSent] = useState(false)


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_f4tb9z6', 'template_tgb9kji', form.current, 'EA5D-IaRrec2cYCaZ')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset()
    };

    return (
        <section id='contact'>
            <h2>Let's Connect</h2>
            <div className="container contact_container">
                <div className="contact_options">
                    <article className='contact_option'>
                        <MdOutlineEmail className='icon' />
                        <h4>Email</h4>
                        <h5>AlexBPontello@gmail.com</h5>
                        <a href="mailto: AlexBPontello@gmail.com" target="_blank">Send a Message</a>
                    </article>
                    <article className='contact_option'>
                        <RiMessengerLine className='icon' />
                        <h4>messenger</h4>
                        <h5>Feifan_P</h5>
                        <a href="" target="_blank">Send a Message</a>
                    </article>
                    <article className='contact_option'>
                        <BsWhatsapp className='icon' />
                        <h4>WhatsApp</h4>
                        <h5>+13219615924</h5>
                        <a href="" target="_blank">Send a Message</a>
                    </article>
                </div>

                {/* form below ---------------------------- */}
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your Full Name' required />
                    <input type="email" name='email' placeholder='Your Email' required />
                    <textarea name="message" rows="7" placeholder='Your Message' required />
                    <button type='submit' className='btn btn-primary' onClick={() => setSent(!sent)}>Send Message</button>
                    <span className={sent ? "sent" : "notSent"}>Message sent successfully</span>
                </form>
            </div>
        </section>
    )
}

export default Contact