import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  thinkskill,
  evaluatehealth,
  remedo,
  vlabs,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  leader,
  communication,
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
    title: "Software Developer",
    icon: web,
  },
  {
    title: "Leadership",
    icon: leader,
  },
  {
    title: "Communication",
    icon: communication,
  },
  {
    title: "Problem Solving",
    icon: creator,
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
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
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
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Developer Intern",
    company_name: "Remedo",
    icon: remedo,
    iconBg: "#383E56",
    date: "June 2023 - September 2023",
    points: [
      "Built a linting tool used in software development of the organization to analyze source code for potential issues, errors, and violations of coding conventionsby creating a custom eslint plugin.",
      "The primary purpose of a linter was to enforce consistent coding style and to catch common programming mistakes early in the development process and to automate the process of identifying and fixing issues releiving the developers from the burden of manual code review.",
      "This made sure that the automation process of website building was not affected due to versatile coding styles of different developers.",
    ],
  },
  {
    title: "Mobile application Developer Intern",
    company_name: "Evaluate Health",
    icon: evaluatehealth,
    iconBg: "#E6DEDD",
    date: "June 2023 - September 2023",
    points: [
      "Developed a mobile application using React Native and Redux for the company's flagship product, which is a platform for doctors to manage their patients and appointments.",
      "Implemented a custom calendar using React Native's Animated API to display appointments in a timeline view.",
      "Integrated the application with the company's backend APIs to fetch data and update the application's state.",
      "Developed a custom component to display a patient's medical history in a timeline view.",
    ],
  },
  {
    title: "Frontend Developer Intern",
    company_name: "Thinkskill",
    icon: thinkskill,
    iconBg: "#383E56",
    date: "Feb 2023 - March 2023",
    points: [
      "Spearheaded the creation of a revolutionary React web app aimed at enhancing restaurant tip management.",
      "Orchestrated the entire system's architecture, seamlessly integrating Firebase Cloud Messaging for real-time notifications and constructing ExpressJS APIs to streamline data retrieval from SQL databases.",
      ],
  },
  {
    title: "Software Developer Intern",
    company_name: "Virtual Labs",
    icon: vlabs,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Urvish proved me wrong.",
    name: "Anirudh Syal",
    designation: "CEO",
    company: "Thinkskill",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Urvish does.",
    name: "Manik Malhotra",
    designation: "CTO",
    company: "Thinkskill",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Urvish optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Anirudh Malhotra",
    designation: "COO",
    company: "Thinkskill",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
