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
  si,
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
    title: "Frontend Developer Intern",
    company_name: "Remedo",
    icon: remedo,
    iconBg: "#383E56",
    date: "June 2023 - October 2023",
    points: [
      "Built a linting tool used in software development of the organization to analyze source code for potential issues, errors, and violations of coding conventionsby creating a custom eslint plugin.",
      "The primary purpose of a linter was to enforce consistent coding style and to catch common programming mistakes early in the development process and to automate the process of identifying and fixing issues releiving the developers from the burden of manual code review.",
      "This made sure that the automation process of website building was not affected due to versatile coding styles of different developers.",
    ],
  },
  {
    title: "Backend Developer Intern",
    company_name: "Single Interface",
    icon: si,
    iconBg: "#383E56",
    date: "February 2024 - April 2024",
    points: [
      "Designed the backend architecture for a company's expense tracking web application, ensuring efficient management of all important transactions.",
      "Developed APIs for CRUD operations on expenses, enabled users to set monthly and yearly budgets, and implemented email notifications for budget exceedance.",
      "Created features for plotting graphs to visualize expenses using Python and SQL, enhancing data insights and user experience.",
    ],
  },
  {
    title: "Mobile application Developer Lead",
    company_name: "Evaluate Health",
    icon: evaluatehealth,
    iconBg: "#383E56",
    date: "January 2023 - March 2023",
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
    date: "May 2023 - June 2023",
    points: [
      "Developed and designed responsive frontend templates for various website domains, including e-commerce, portfolios, and clones, as part of a dynamic team at ThinkSkill.",
      "Demonstrated proficiency in creating visually appealing and user-friendly interfaces, ensuring a seamless user experience across multiple platforms and devices.",
      "Collaborated effectively with team members to deliver high-quality frontend solutions, meeting diverse client requirements and industry standards.",
      ],
  },
  {
    title: "Software Developer Intern",
    company_name: "Virtual Labs",
    icon: vlabs,
    iconBg: "#383E56",
    date: "Jan 2022 - April 2022",
    points: [
      "Developed a software on the V-Labs-platform for students to access experiments for practical learning in Digital Logic Design.",
      "Crafted a software that shows animation of the simulation of the circuit and the output of the circuit using Anime.js and GSAP libraries.",
      "Designed and implemented a user-friendly interface for students to interact with the experiments, drag and drop components, and simulate circuits.",
      "Integrated the software with the V-Labs platform to store student data and track their progress in the experiments.",

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
    name: "SplitMate",
    description:
      "Mobile application that allows users to manage their expenses efficiently. It includes features like real time notification and emails, payment integration, multi currency support, simplify debts, timely expense tracking.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "recharts",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/jayghevariya/Splitwise-Mobile",
  },
  {
    name: "Campus Life Website",
    description:
      "Web application for smooth coordination and two-way interaction between college authorities and the campus life committee. It includes functions like team editing, invoice submission, budget approval, stats analysis, and role-based access levels.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "docker",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/urvish-pujara/clc_website",
  },
  {
    name: "C-shell",
    description:
      "An interactive user defined bash-like Shell which supports semicolon separated list of commands. Functionalities implemented: supports I/O redirection, piping, process management and signal handling. Technologies used: C, Operating System, Piping.",
    tags: [
      {
        name: "C",
        color: "blue-text-gradient",
      },
      {
        name: "Operating System",
        color: "green-text-gradient",
      },
      {
        name: "Piping",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/urvish-pujara/c-shell",
  },
];

export { services, technologies, experiences, testimonials, projects };
