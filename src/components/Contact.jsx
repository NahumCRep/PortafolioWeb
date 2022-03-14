import React, {useState} from 'react';
import '../css/contact.css';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import axios from "axios"
import * as qs from "query-string"

const Contact = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        message:''
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const sendEmail = (e) => {
        e.preventDefault()
        
    }

    return (
        <section id="section-contact" className="Contact-Container">
            <div className="Cct-form">
                <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={e => sendEmail(e)} >
                    <input type="hidden" name="form-name" value="contact" />
                    <h3>{t("contact.cctitle")}</h3>
                    <input type="text" aria-label='name' name='name' placeholder={t("contact.phname")} onChange={handleChange} required />
                    <input type="email" aria-label='email' name='email' placeholder={t("contact.phemail")} onChange={handleChange} required />
                    <textarea name='message' onChange={handleChange} required></textarea>
                    <div className="form-btns">
                        <button type="submit"
                        >{t("contact.btnsend")}</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact;