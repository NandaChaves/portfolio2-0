import React, { useEffect, useState, useRef,lazy, Suspense } from 'react';
import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { useTranslation, Trans } from "react-i18next";
import CounterUp from "./CounterUp";
import { Tech } from './tech';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import { ExperienceTimeline } from './ExperienceTimeline';
import MyProjects from './MyProjects';
import { About } from './about';
import 'react-toastify/dist/ReactToastify.css';
import ContactSection from './ContactSection';
const Section = (props) => {
  const { children } = props;

  return (
    <motion.section className={`h-screen w-full p-4 mx-auto md:ml-40 max-w-screen-2xl flex flex-col items-start justify-center`}
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.6,
        },
      }}
    >
      {children}
    </motion.section>
  );
};

export const Interface = (props) => {
  const { t } = useTranslation();
  const { setSection } = props;
  return (
    <div className="flex flex-col items-center w-screen relative">
      <AboutSection setSection={setSection} />
      <SkillsSection className="teste"/>
      <About />
      <ExperienceTimeline />
      <MyProjects />
      <ContactSection />
    </div>
  );
};

window.addEventListener('scroll', () => { 
  if (counterRup(elementToCheck)) { 
  }
});

const AboutSection = (props) => {
  const { setSection } = props;
  const { t } = useTranslation();
  return (
    <Section>
      <h1 className="text-4xl font-extrabold leading-normal md:leading-snug md:text-6xl">
        <span className="text-animation">
          {t("greeting")}
        </span>
        <br /> <span className="bg-white px-1 italic">Fernanda Fortes</span>
      </h1>
      <motion.p
        className="text-[16px] md:text-lg text-white mt-4 main-text [text-shadow:_0_2px_4px_rgb(99_102_241_/_0.8)]"
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 1.5,
        }}
      ><Trans i18nKey="developer_bio_with_br" components={[<br className="hidden md:inline" key="desktop-br" />
  ]}/>
      </motion.p>
     
    <motion.div className="info-company mt-6">
      <div className="info-adv-box flex flex-row font-bold space-x-4 space-x-reverses uppercase mb-6 text-stone-50">
        <div className="info-item">
          <h4 className="text"> <b className='text-violet-900 text-3xl'>+</b> <span className="text-violet-900 md:text-4xl text-2xl text-shadow-lg/30"><CounterUp end={2} /></span> {t("anos_ex")} </h4>
        </div>

        <div className="info-item">
          <h4 className="text"> <span className="text-stone-50 md:text-4xl text-2xl text-shadow-lg/30"><CounterUp end={11} /></span> {t("proje")} </h4>
        </div>

        <div className="info-item">
          <h4 className="text"> <span className="text-fuchsia-800 md:text-4xl text-2xl text-shadow-lg/30"><CounterUp end={53} /></span> {t("repo")} </h4>
        </div>
      </div>
    </motion.div> 

     <motion.div className='flex flex-col md:flex-row items-center justify-center md:space-x-4 space-y-4 md:space-y-0 mt-8 md:mt-16'>
        <motion.button
        onClick={() => setSection(5)} className={`bg-indigo-600 text-white py-3 px-6 md:py-4 md:px-8 rounded-lg font-bold text-sm md:text-lg w-full md:w-auto`}
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 2,
        }} >
        {t("contact_me_button")}
      </motion.button>

      <motion.a
      href="/files/CV - Fernanda Fortes.pdf" target='_blank'
      download="Fernanda_Fortes_CV.pdf" className={`bg-indigo-600 text-white py-3 px-6 md:py-4 md:px-8 rounded-lg font-bold text-sm md:text-lg w-full md:w-auto text-center`}
      initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 2 }} >
        Download CV
      </motion.a>
  </motion.div>
    </Section>
  );
};
const languages = [
  {
    link: 'https://cdn.countryflags.com/thumbs/portugal/flag-800.png',
    title: {pt: `Português`,
      en: `Portuguese`,
      es: `Portugués`,
      fr: `Portugais`},
    level: 100,
  },
  {
    link: 'https://cdn.countryflags.com/thumbs/united-kingdom/flag-800.png',
    title: {pt: `Inglês`,
      en: `English`,
      es: `Inglés`,
      fr: `Anglais`},
    level: 90,
  },
  {
    link: 'https://cdn.countryflags.com/thumbs/spain/flag-800.png',
    title: {pt: `Espanhol`,
      en: `Spanish`,
      es: `Español`,
      fr: `Espanhol`},
    level: 90,
  },
  {
    link: 'https://cdn.countryflags.com/thumbs/france/flag-800.png',
    title: {pt: `Francês`,
      en: `French`,
      es: `Francés`,
      fr: `Français`},
    level: 40,
  },
];

const SkillsSection = () => {
  const { t, i18n } = useTranslation();
  const currentLang = (i18n.language || 'pt').split('-')[0];
  return (
    <Section>
      <motion.div whileInView={"visible"} className='relative'>
        <h2 className="text-4xl font-bold text-white md:5xl"> {t("menu_skills")}</h2>
        <div className=" mt-3">
         <Tech />
        </div>
        <div className="mt-0">
          <h2 className="text-3xl md:text-5xl font-bold mt-2 text-white">{t("idiomas")}</h2>
          <div className=" mt-2 space-y-4">
            {languages.map((lng, index) => (
              <div className="w-64" key={index}>
                <motion.h3 className="md:text-2xl md:text-xl font-bold text-gray-100 flex flex-row gap-4"
                  initial={{
                    opacity: 0,
                  }}
                  variants={{
                    visible: {
                      opacity: 1,
                      transition: {
                        duration: 1,
                        delay: 2 + index * 0.2,
                      },
                    },
                  }} >
              <img loading="lazy" src={lng.link} alt={lng.title} className="w-10 h-auto rounded shadow-md border-3 border-indigo-600"/>
              {lng.title[currentLang]} { `${lng.level}%` }
                </motion.h3>
                <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                  <motion.div
                    className="h-full bg-indigo-500 rounded-full "
                    style={{ width: `${lng.level}%` }}
                    initial={{
                      scaleX: 0,
                      originX: 0,
                    }}
                    variants={{
                      visible: {
                        scaleX: 1,
                        transition: {
                          duration: 1,
                          delay: 2 + index * 0.2,
                        },
                      },
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  );
};
/*
const ContactSection = () => {
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
       <div className="mt-3 p-6 rounded-md bg-white w-96 max-w-full">
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

*/

export default Interface;
