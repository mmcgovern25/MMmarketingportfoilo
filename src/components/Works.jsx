import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { github, play } from '../assets/';
import { SectionWrapper } from '../hoc';
import { projects, projects2, projects3, projects4 } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({ index, name, description, tags, image, live_link }) => {
  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.5, 0.75)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className='bg-tertiary rounded-2xl p-5 sm:w-[340px] w-full'
    >
      <div className='relative w-full h-[230px]'>
        <img
          src={image}
          alt={name}
          className='w-full h-full object-cover rounded-2xl'
        />
        <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
        <div
  onClick={() => window.open(live_link, '_blank')}
  className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:shadow-navy-hover hover:scale-105 transition-transform'
>
  <img
    src={play}
    alt='play'
    className='w-2/5 h-2/5 object-contain'
  />
</div>
        </div>
      </div>
      <div className='mt-5'>
        <h3 className='text-white font-bold text-[24px]'>{name}</h3>
        <p className='mt-2 text-secondary text-[14px]'>{description}</p>
      </div>
      <div className='mt-4 flex flex-wrap gap-2'>
        {tags.map((tag) => (
          <p key={tag.name} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </motion.div>
  );
};

const ProjectCard2 = ({ index, name, description, tags, image, source_code_link, live_link }) => {
  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.5, 0.75)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className='bg-tertiary rounded-2xl p-5 sm:w-[340px] w-full'
    >
      <div className='relative w-full h-[230px]'>
        <img
          src={image}
          alt={name}
          className='w-full h-full object-cover rounded-2xl'
        />
        <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
        <div
  onClick={() => window.open(live_link, '_blank')}
  className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:shadow-navy-hover hover:scale-105 transition-transform'
>
  <img
    src={play}
    alt='play'
    className='w-2/5 h-2/5 object-contain'
  />
</div>
<div
  onClick={() => window.open(source_code_link, '_blank')}
  className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:shadow-navy-hover hover:scale-105 transition-transform'
>
  <img
    src={github}
    alt='github'
    className='w-1/2 h-1/2 object-contain'
  />
</div>

        </div>
      </div>
      <div className='mt-5'>
        <h3 className='text-white font-bold text-[24px]'>{name}</h3>
        <p className='mt-2 text-secondary text-[14px]'>{description}</p>
      </div>
      <div className='mt-4 flex flex-wrap gap-2'>
        {tags.map((tag) => (
          <p key={tag.name} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </motion.div>
  );
};

const ProjectCard4 = ({ index, name, description, tags, image, live_link }) => {
  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.5, 0.75)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className='bg-tertiary rounded-2xl p-5 sm:w-[340px] w-full'
    >
      <div className='relative w-full h-[230px]'>
        <img
          src={image}
          alt={name}
          className='w-full h-full object-cover rounded-2xl'
        />
        <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
        <div
  onClick={() => window.open(live_link, '_blank')}
  className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:shadow-navy-hover hover:scale-105 transition-transform'
>
  <img
    src={play}
    alt='play'
    className='w-2/5 h-2/5 object-contain'
  />
</div>
        </div>
      </div>
      <div className='mt-5'>
        <h3 className='text-white font-bold text-[24px]'>{name}</h3>
        <p className='mt-2 text-secondary text-[14px]'>{description}</p>
      </div>
      <div className='mt-4 flex flex-wrap gap-2'>
        {tags.map((tag) => (
          <p key={tag.name} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </motion.div>
  );
};

const ProjectCard3 = ({ index, name, description, tags, image }) => {
  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.5, 0.75)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className='bg-tertiary rounded-2xl p-5 sm:w-[340px] w-full'
    >
      <div className='relative w-full'>
        <img
          src={image}
          alt={name}
          className='w-full h-full object-cover rounded-2xl'
        />
        <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>

        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }} variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My Leaning</p>
        <h2 className={`${styles.sectionHeadText}`}>Courses & Certifications.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className='mt-3 mb-10 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
         Lifelong learning has always been a core value of mine. Inspired by the Japanese philosophy of Kaizen, the idea of becoming 1% better every day, I’m committed to continuous growth across multiple disciplines.
My goal is to become as well-rounded as possible; not only to build more versatile projects, but also to collaborate more effectively across teams. Whether I’m working with developers, designers, or marketers, I want to speak their language and contribute meaningfully to the process.
        </motion.p>
      </div>

      <div className='mt-2 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className='mt-3 mb-10 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Last but not least, here are some examples of the current work I am doing at A&F. Building emails and SMS notications across all brands, and delivering those performance analytics back to our team!
        </motion.p>
      </div>

      <div className='mt-2 flex flex-wrap gap-7'>
        {projects4.map((project, index) => (
          <ProjectCard4
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>

      <motion.div initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }} variants={textVariant()}>
        <p className={`mt-24 ${styles.sectionSubText}`}>My personal programming</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>
      

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className='mt-3 mb-10 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          The three projects below are a few of my favorite that I created in order further solidify my knowledge of a few different programming languages. While yes, they are unrelated to marketing, I still did want to highlight them as they served as an integral part of my growth as a working professional. Crypto Trackers utilizes an API to provide real time analysis of the performance of all the different coins. The mock Nike website was my favorite from a design standpoint replicating one of my favorite companies. While the recreation of the apple website was the most difficult!
        </motion.p>
      </div>

      <div className='mt-2 flex flex-wrap gap-7'>
        {projects2.map((project, index) => (
          <ProjectCard2
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>

      <motion.div initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }} variants={textVariant()}>
        <p className={`mt-24 ${styles.sectionSubText}`}>My current work at</p>
        <h2 className={`${styles.sectionHeadText}`}>Abercrombie & Fitch.</h2>
      </motion.div>

    

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className='mt-3 mb-10 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Last but not least, here are some examples of the current work I am doing at A&F. Building emails and SMS notications across all brands, and delivering those performance analytics back to our team!
        </motion.p>
      </div>

      <div className='mt-2 flex flex-wrap gap-7'>
        {projects3.map((project, index) => (
          <ProjectCard3
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "")
