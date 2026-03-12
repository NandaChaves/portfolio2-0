import { motion } from "framer-motion";
import { VerticalTimeline,VerticalTimelineElement,} from "react-vertical-timeline-component";
import { EXPERIENCES } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { useTranslation, Trans } from "react-i18next";
import { Section } from "./Section";
import "react-vertical-timeline-component/style.min.css";

const ExperienceCard = ({ experience }) => {
  const { i18n } = useTranslation();
  const currentPoints = experience.points[i18n.language] || experience.points['pt'];
  return (
    <VerticalTimelineElement
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={experience.date[i18n.language]}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img src={experience.icon}  alt={experience.company_name} className="w-[60%] h-[60%] object-contain" />
      </div>
    } >
    <div>
      <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
      <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }} >
        {experience.company_name}
      </p>
    </div>

    {/* Experience Points */}
    <ul className="mt-4 list-disc ml-5 space-y-2">
      {currentPoints.map((point, i) => (
        <li key={`experience-point-${i}`} className="text-white-100 text-[10px] md:text-[13.5px] tracking-wider">
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
  )
};

export const ExperienceTimeline = () => {
  const { t } = useTranslation();
  return (
      <SectionWrapper idName="work">
      <>
        <div variants={textVariant()} className="flex flex-col mb-4">
          <p className={styles.subtitle_work}>{t("subtitle_work")}</p>
          <h2 className={styles.sectionHeadText}>{t("title_work")}</h2>
        </div>

        <div className="w-full mt-4 overflow-visible">
          <VerticalTimeline layout="1-column">
            {EXPERIENCES.map((experience, i) => (
              <ExperienceCard key={i} experience={experience} />
            ))}
          </VerticalTimeline>  
        </div>
      </>
    </SectionWrapper>
  );
};
