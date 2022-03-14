import React from 'react'
import '../css/popup.css'
import { useTranslation } from 'gatsby-plugin-react-i18next'


const Popup = ({type, show}) => {
const {t} = useTranslation();
  return (
    <div className={`popup ${type === 'success' ? 'popup_success':'popup_error'} ${show ? 'popup-in':'popup-out'}`}>
        {
            type === 'success'
            ? <p>{t('popup.success')}</p>
            : <p>{t('popup.error')}</p>
        }
    </div>
  )
}

export default Popup