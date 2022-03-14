import React, { useState, useEffect } from 'react';
import '../css/contact.css';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import Popup from './Popup';

const Contact = () => {
    const { t } = useTranslation();
    const [isLoading, setIsLoading] = useState(false)
    const [popupParams, setPopupParams] = useState({
        type: '',
        show: false
    })
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })


    useEffect(() => {
        const timer = setTimeout(() => {
            setPopupParams({
                ...popupParams,
                show: false
            })
        }, 3000);
        return () => clearTimeout(timer);
    }, [popupParams]);

    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const sendEmail = (e) => {
        e.preventDefault()
        setIsLoading(true)
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...formData })
        })
            .then(() => {
                setIsLoading(false)
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                })
                setPopupParams({
                    type: 'success',
                    show: true
                })
            })
            .catch(error => {
                console.log(error)
                setIsLoading(false)
                setPopupParams({
                    type: 'error',
                    show: true
                })
            });
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
                        <button type="submit">
                            {
                                isLoading
                                    ? <i className="fa-solid fa-spinner loader"></i>
                                    : t("contact.btnsend")
                            }
                        </button>
                    </div>
                </form>
            </div>
            <Popup type={popupParams.type} show={popupParams.show} />
        </section>
    )
}

export default Contact;