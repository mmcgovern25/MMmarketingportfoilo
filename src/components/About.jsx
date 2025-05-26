import React from "react";

import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { Tilt } from "react-tilt";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='hidden md:flex xs:w-[240px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='h-56 rounded-[20px] object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>

      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.div variants={fadeIn("", "", 0.1, 1)} className="mt-4 max-w-3xl leading-[30px] text-secondary text-[17px]">
  <p>
    Who am I? Well, from a professional stand point, I've somehow managed to become more a jack-of-all-trades. With experiences ranging from growth marketing, to email marketing, to SEO, to
    motion graphics, to web development, and to everything in between. I pride myself in always remaining coachable, being able to adapt on the fly, and never stop learning new skills along the way.
    Things are changing fast in the digital marketing space and I want to be right there at the forefront.
  </p>

  <p className="mt-4">
    Outside of work, I really enjoy spending quality time with family & friends. They are like the backbone to my life! I also just became an uncle! On top of that who loves to explore the outdoors and travel to new cities
    in search of new perspectives and self-peace. 
  </p>
</motion.div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
