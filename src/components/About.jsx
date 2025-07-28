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
  Who am I? Professionally, I've built a broad foundation across digital marketing and tech—ranging from growth and email marketing, to SEO, motion graphics, and web development. Rather than being a “jack-of-all-trades,” I like to think of myself as someone who's naturally curious, adaptable, and always eager to learn what’s next. I take pride in staying coachable, embracing new tools and challenges, and keeping pace with the ever-evolving digital landscape.
  </p>

  <p className="mt-4">
  Outside of work, I’m all about quality time with family and friends—they're truly the foundation of everything for me. (I just became an uncle, which has been a joy!) I also love being outdoors, exploring new places, and seeking out fresh perspectives whenever I can.
  </p>
</motion.div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

      <motion.div
  variants={textVariant()}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.25 }}
  className="mt-20"
>
  <p className={styles.sectionSubText}>My Personal</p>
  <h2 className={styles.sectionHeadText}>Resume Explainer Video</h2>
</motion.div>


<motion.div
  variants={fadeIn('up', 'spring', 0.3, 0.75)}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.1 }}
  className="mt-10 flex justify-center px-4"
>
  <div className="w-full max-w-[720px] aspect-video">
    <iframe
      className="w-full h-full rounded-lg"
      src="https://www.youtube.com/embed/iVNGOTlMEHw"
      title="Resume Explainer Video"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
</motion.div>




    </>
  );
};

export default SectionWrapper(About, "about");
