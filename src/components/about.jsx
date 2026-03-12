import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { SERVICES } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { useTranslation, Trans } from "react-i18next";
// Service Card
const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="xs:w-[250px]" >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card" >
        <div className="bg-tertiary rounded-[20px] py-5 px-8 md:px-12 min-h-[200px] md:min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-20 h-20 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

// About
export const About = () => {
   const { t } = useTranslation();
  return (
    <SectionWrapper idName="about">
      <>
        {/* Title */}
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>{t("intro")}</p>
          <h2 className={styles.sectionHeadText}>{t("about_me")}</h2>
        </motion.div>

        {/* Body */}
        <motion.p variants={fadeIn(undefined, undefined, 0.1, 1)}
          className="p-4 text-justify md:text-left tracking-[.02em] empty-4 text-secondary text-[15px] lg:text-[17px] max-w-3xl leading-[23px] lg:leading-[30px]" >
         {t("about_me_text")}
        </motion.p>

        {/* Service Card */}
        <div className="lg:mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} index={i} {...service} />
          ))}
        </div>
      </>
    </SectionWrapper>
  );
};
