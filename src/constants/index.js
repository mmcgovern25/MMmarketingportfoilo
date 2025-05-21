import {

  javascript,
  connectclean,
  lewagon,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
 AE,
 beth,
 ANF,
 draft,
wedding,
gavea,
  BAr,
  LIr,
  nike,
  crypto,
  pokemon1,
  sims,
  iphone,
  habitat,
  photoshop,
  ae,
  chat,
  mailchimp,
  sitecore,
  salesforce,
  ga4,
  sem,
  hubspot,
  meta,
  illustrator,
  canva,
  responsys,
  seo,
  ga
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Marketing Professional",
    icon: LIr,
  },
  {
    title: "Traveling Enthusiast",
    icon: gavea,
  },
  {
    title: "Avid Sports Fan",
    icon: BAr,
  },
  {
    title: "Family & Friends",
    icon: wedding,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "GA4",
    icon: ga4,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "meta",
    icon: meta,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "hubspot",
    icon: hubspot,
  },
  {
    name: "Salesforce",
    icon: salesforce,
  },
  {
    name: "illustrator",
    icon: illustrator,
  },
  {
    name: "Google Analytics",
    icon: ga,
  },
  
  {
    name: "sitecore",
    icon: sitecore,
  },
  {
    name: "sem",
    icon: sem,
  },
  {
    name: "canva",
    icon: canva,
  },
  {
    name: "responsys",
    icon: responsys,
  },
  {
    name: "seo",
    icon: seo,
  },
  {
    name: "ae",
    icon:ae,
  },
  {
    name: "photoshop",
    icon: photoshop,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "chat",
    icon: chat,
  },
  {
    name: "mailchimp",
    icon: mailchimp,
  },

];

const experiences = [
  {
    title: "Email Developer/Marketer",
    company_name: "Abercrombie & Fitch",
    time_location: "Full Time - Remote (Columbus, OH)",
    icon: ANF,
    iconBg: "#E6DEDD",
    date: "Nov 2023 - Present",
    points: [
      "Lead email developer for the kids’ sector of Abercrombie & Fitch. Creating daily emails for audiences in the US, Canada,the EU, and the UK using HTML, CSS, & JavaScript.",
      "Creating daily SMS push notifications for iPhone and Android users across all brands include A&F adults, A&F kids, and Hollister. Was previously done on Braze software, but since have converted to Cordial.",
      "Successfully led our kids’ team through a software migration from Oracle Responsys to Cordial that required IP warming, sending emails using both softwares for a duration of time, and gradually increasing our send to full time using Cordial. This required learning an entire new software switching from RPL (Responsys Programming Language) to Cordial’s integrated template software.",
      "Responsible for monitoring campaign performance using heat maps and metrics such as open rates, click-through rates, and conversions in order to identify trends and areas for improvement and deliver reportings back to our analytics team.",
      "Responsible for updating excel tracking sheets on a weekly basis, and also utilizing Adobe Photoshop for editing different image or GIF assets."
    ],
  },
  {
    title: "CMS Content Manager",
    company_name: "Beth Israel Lahey Health",
    time_location: "Full Time (Contract) - Remote (Boston, MA)",
    icon: beth,
    iconBg: "#E6DEDD",
    date: "March 2023 - July 2023",
    points: [
      "Over 150 requested updates made to all Beth Israel Lahey webpages, assisting in one of the biggest hospital mergers in the country.",
      "Our team organized all of our webpages using the CMS SiteCore 10.",
      "Managed website content for over 13 hospitals and health care facilities all together, using basic HTML and Photoshop",
    ],
  },
  {
    title: "Digital Marketing Associate",
    company_name: "Animal Equality",
    time_location: "Full Time (Contract) - Remote (Austin, TX)",
    icon: AE,
    iconBg: "#E6DEDD",
    date: "Oct 2022 - Jan 2023",
    points: [
      "Assisted the US team's marketing efforts including: Facebook Ad campaigns, Google Ad campaigns, and Email Marketing, successful Facebook ad campaign that led to over 146,000 US citizens signing our petition.  ",
      "Most successful Facebook ad campaign led to over 146,000 US citizens signing our petition",
      "Set up email newsletters through EveryAction and experimented with different ways to help increase our open rates.",
      "Responsible for improving SEO through keyword research using SEMrush, and in helping brainstorm article posts for our copywriters. "
    ],
  },
  {
    title: "Digital Marketing Coordinator",
    company_name: "Habitat For Humanity ReStore",
    time_location: "Part Time - Remote (Boston, MA)",
    icon: habitat,
    iconBg: "#E6DEDD",
    date: "Oct 2022 - Jan 2023",
    points: [
      "Responsible for managing content creation calendar for all social media accounts which included: Instagram, Facebook, and Twitter.",
      "Presented a PowerPoint presentation to the ReStore why it was crucial that we invested in a digital ad strategy, how we could monitor it, and how we could benefit drastically.",
      "Ran their first marketing funnel for them which included several rounds of Facebook marketing campaigns, retargeting practices, creating a landing page, all in an attempt to ultimately bring new customers through the doors. ",
    ],
  },
  {
    title: "Customer Experience Associate",
    company_name: "DraftKings",
    time_location: "Full Time - Remote (Boston, MA)",
    icon: draft,
    iconBg: "#E6DEDD",
    date: "June 2021 - Oct 2022",
    points: [
      "Assisting customers through Twitter and Instagram direct messages.",
      "Troubleshooting issues for over 50 customers per day on average through our customer help center, and live chat features.",
      "Developed many soft skills in learning how to defuse esclating situations with an unhappy customer, and provide the best service possible.",
    ],
  },
];

const projects = [
  {
    name: "Crypto Trackers",
    description:
      "A complete initial sales page aimed to persuade the user to sign up for the service. Once the user has signed up, they will gain access to all tracking data of the top cryptocurrencies around the world. A fantastic service for those who are interested in investing, or curious in learning the history behind each coin.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "ThreeJS",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "blue-text-gradient",
      },
      {
        name: "ChartJS",
        color: "green-text-gradient",
      },
    ],
    image: crypto,
    live_link: "https://cryptotrackersworld.com",
    source_code_link: "https://github.com/mmcgovern25/crpyto-app",
  },

  {
    name: "Nike Ecommerce Store",
    description:
      "A mock version of a Nike shoe ecommerce site, with a strickly beautiful design. My personal favorite touch was the hover animation over the sneakers, that is aimed to mimick a running step, perfect for the athletic theme of the site. The site also includes a full add to cart functionality with react useState.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJS",
        color: "green-text-gradient",
      },
    ],
    image: nike,
    live_link: "https://nikestoresale.netlify.app",
    source_code_link: "https://github.com/mmcgovern25/Nike-Ecommerce/tree/main/Nike-Store",
  },
  {
    name: "Connect & Clean",
    description:
      "Connect & Clean was our final group project that myself and my batchmates created at the Le Wagon Full Stack Web Development Bootcamp. While the site is still ongoing contruction on the visual side of things, the amount of backend knowledge I gained from this project was invaluable. The intention of the site is to fill a void for Airbnb owners, and cleaners alike. That was to give them a platform where they can easily arrange cleaning job opportunities. *currently desktop only*",
    tags: [
      {
        name: "Ruby",
        color: "pink-text-gradient",
      },
      {
        name: "Ruby On Rails",
        color: "pink-text-gradient",
      },
      {
        name: "SCSS",
        color: "pink-text-gradient",
      },
    ],
    image: connectclean,
    live_link: "https://connectclean.net",
    source_code_link: "https://github.com/PSorianoR/Connect-and-Clean",
  },
  {
    name: "Alec Simonovitch CPA",
    description:
      "A complete site for one of my best friends new side huste business he plans to start. With the main focus to simply collect emails and schedule consultation calls, to see how Alec could potentially help their finianical needs. My personal favorite part is the slick logo carousel that was used to showcase his experience.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: sims,
    live_link: "https://alecsimscpa.com/",
    source_code_link: "https://github.com/mmcgovern25/AlecSimsCPA",
  },
  {
    name: "iStore Clone",
    description:
      "A beautifully designed landing page for the newest iPhone 15 Pro, made to mimik the real deal on the apple website. This landing page utilizies a variety of design tactics to give it a modern and slick design, including a bento box video collage, 3D models using ThreeJS, and scroll animations using GSAP. *currently desktop only*",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "blue-text-gradient",
      },
      {
        name: "ThreeJS",
        color: "green-text-gradient",
      },
      {
        name: "GSAP",
        color: "green-text-gradient",
      },
    ],
    image: iphone,
    live_link: "https://appleiphonesale.netlify.app",
    source_code_link: "https://github.com/mmcgovern25/iPhoneGSAP3JS",
  },
  {
    name: "Pokemon Power Rankings",
    description:
      "A complete detailed pokedex, with the functionality to rank your favorite pokemon to a variety of different lists. Your rankings are then updated with the respective spirit images. Let the debates begin!",
    tags: [
      {
        name: "Vanilla JS",
        color: "yellow-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
    ],
    image: pokemon1,
    live_link: "https://pokemonpowerrankings.com",
    source_code_link: "https://github.com/mmcgovern25/PKMN-Power-Rankings",
  },
];

export { services, technologies, experiences, projects };
