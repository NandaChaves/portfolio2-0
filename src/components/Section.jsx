import { motion } from "framer-motion";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

export const Section = (props) => {
  const { children, mobileNoCenter } = props;

  return (
    <motion.section 
      className={`h-screen w-full p-8 max-w-screen-2xl md:ml-10 flex flex-col items-start justify-center md:justify-center box-border`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 1, delay: 0.6 },
      }}
    >
      {children}
    </motion.section>
  );
};