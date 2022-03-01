import React from 'react';
import '../css/contact.css';
import { useTranslation } from 'gatsby-plugin-react-i18next';

const Contact = () => {
    const {t} = useTranslation();

    return(
        <section id="section-contact" className="Contact-Container">
            <div className="Cct-form">
                <form>
                    <h3>{t("contact.cctitle")}</h3>
                    <input type="text" aria-label='name' placeholder={t("contact.phname")} required/>
                    <input type="email" aria-label='email' placeholder={t("contact.phemail")} required/>
                    <textarea required></textarea>
                    <div className="form-btns">
                        {/* <button
                            onClick={()=>window.open("../static/pdf/curriculum.pdf")}
                        >cv</button> */}
                        <button type="submit"
                            onSubmit={(e)=>{
                                e.preventDefault();
                                alert("hola");
                            }}
                        >{t("contact.btnsend")}</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact;