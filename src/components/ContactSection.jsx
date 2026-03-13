
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import React, { useEffect, useState, useRef,lazy, Suspense } from 'react';
import { useTranslation, Trans } from "react-i18next";
import { Section} from './Section';

export default function ContactSection () {

  const { t } = useTranslation();
  const formRef = useRef();
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    let tempErrors = {};
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (name.trim().length < 3) tempErrors.name = true;
    if (!emailRegex.test(email.toLowerCase().trim())) tempErrors.email = true;
    if (message.trim().length < 5) tempErrors.message = true;

    setErrors(tempErrors);
  
    return Object.keys(tempErrors).length === 0;
  };

const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error(t('Por favor, preencha os campos corretamente.'));
      return;
    }

    setLoading(true);
    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID, 
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
      formRef.current, 
       import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
        toast.success(t('success'));
        setName('');
        setEmail('');
        setMessage('');
        setErrors({});
    })
    .catch((error) => {
        console.error('Falha ao enviar:', error);
        toast.error("Erro ao enviar mensagem.");
    })
    .finally(() => setLoading(false));
  };
  return (
    <Section isContact={true}>
      <h2 className="text-3xl md:text-5xl font-bold text-gray-200">{t("contact_me_title")}</h2>
      <div className="mt-4 p-8 rounded-md bg-white w-96 max-w-full">
        <form ref={formRef} onSubmit={handleSubmit} method='POST'>
          <label htmlFor="name" className="font-medium text-gray-900 block mb-1"> {t("form_name_label")}  </label>
          <input type="text" id="name" value={name} name="from_name" onChange={(e) => setName(e.target.value)} placeholder="What's your name"
            className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
          />
          {errors.name && <span className="text-red-500 text-sm mt-1 italic">{t("error_name")}</span>}
          <label htmlFor="email" className="font-medium text-gray-900 block mb-1 mt-8">
             {t("form_email_label")}
          </label>
          <input type="email" id="email" name="from_email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email"
            className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
          />
          {errors.email && <span className="text-red-500 text-sm mt-1 italic">{t("error_email")}</span>}
          <label htmlFor="email" className="font-medium text-gray-900 block mb-1 mt-8">
             {t("form_message_label")}
          </label>
          {errors.message && <span className="text-red-500 text-sm mt-1 italic">{t("error_message")}</span>}
          <textarea name="from_message" id="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Write your message"
            className="h-32 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"/>
          <button  type="submit" disabled={loading} className="bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold text-lg mt-12 submit">
            {loading ? t("send") : t("form_submit_button")}
          </button>
        </form>
      </div>
    </Section>
  );
};