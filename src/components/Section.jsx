import { motion } from "framer-motion";

export const Section = (props) => {
  const { children, mobileNoCenter } = props;

  return (
    <motion.section 
      className={`mt-5 h-screen w-full p-6 md:p-8 
        max-w-screen-2xl mx-auto 
        flex flex-col items-start justify-center 
        relative z-10 box-border`}
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