import { FaHome, FaUser, FaFolderOpen, FaEnvelopeOpen, FaBriefcase, FaGraduationCap, FaCode } from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';
import { IoLink } from "react-icons/io5";

  
import Work1 from './assets/Tea.jpg';
import Work2 from './assets/pepsi.jpg';
import Work3 from './assets/editing.jpg';
import Work4 from './assets/single.jpg';
import Work5 from './assets/home.jpg';
import Work6 from './assets/project-6.jpg';
  
import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';
  
  export const links = [
    {
      id: 1,
      name: 'Home',
      icon: <FaHome className='nav__icon' />,
      path: '/',
    },
  
    {
      id: 2,
      name: 'About',
      icon: <FaUser className='nav__icon' />,
      path: '/about',
    },
  
    {
      id: 3,
      name: 'Portfolio',
      icon: <FaFolderOpen className='nav__icon' />,
      path: '/portfolio',
    },
  
    {
      id: 4,
      name: 'Contact',
      icon: <FaEnvelopeOpen className='nav__icon' />,
      path: '/contact',
    },
  ];
  
  export const personalInfo = [
    {
      id: 1,
      title: 'First Name : ',
      description: 'Snehil',
    },
  
    {
      id: 2,
      title: 'Last Name : ',
      description: 'Chourasiya',
    },
  
    {
      id: 3,
      title: 'Age : ',
      description: '24 Years',
    },
  
    {
      id: 4,
      title: 'Nationality : ',
      description: 'Indian',
    },
  
    {
      id: 5,
      title: 'Freelance : ',
      description: 'Available',
    },
  
    {
      id: 6,
      title: 'Address : ',
      description: 'Hyderabad',
    },
  
    {
      id: 7,
      title: 'Phone : ',
      description: '+91 9983735517',
    },
  
    {
      id: 8,
      title: 'Email : ',
      description: 'snehil2024@gmail.com',
    },
  
    {
      id: 9,
      title: 'Insta : ',
      description: '_snehil02',
    },
  
    {
      id: 10,
      title: 'Languages : ',
      description: 'English, Hindi',
    },
  ];
  
  export const stats = [
    {
      id: 1,
      no: '1',
      title: 'SDFC Banking <br />Project',
      icon: <a href="https://github.com/02snehil/SDFC_Banking"><IoLink /></a>
    },
  
    {
      id: 2,
      no: '2',
      title: 'Completed <br /> Portfolios',
    },

    {
      id: 3,
      no: '3',
      title: 'Completed <br /> Eductional Site with ReactJs',
      icon: <a href="https://webpage1-dun.vercel.app/"><IoLink /></a>,
    },
  
    {
      id: 4,
      no: 'Fresher',
      title: 'Java <br /> Developer ',
    },
  
    {
      id: 5,
      no: 'Fresher',
      title: ' Frontend <br /> Developer',
    },
  ];
  
  export const resume = [
    {
      id: 1,
      category: 'experience',
      icon:<FaBriefcase />,
      year: '2024 - PRESENT',
      title:' Web Developer <span>Fresher</span>',
      desc: 'Developed a dynamic educational website using React.js, featuring user authentication, course management, interactive lessons, progress tracking, and an admin dashboard..',
    }, 
  
    {
      id: 2,
      category: 'experience',
      icon: <FaBriefcase />,
      year: '2023-2024',
      title: 'UI/UX Designer <span> Fresher </span>',
      desc: 'Experience in UI/UX disining tools like figma.',
    },
  
    {
      id: 3,
      category: 'experience',
      icon: <FaBriefcase />,
      year: '2022-2023',
      title: 'Training period <span> Java </span>',
      desc: 'Completed a 6-month full-stack Java Developer training program at Sathya Technologies.',
    },
  
    {
      id: 4,
      category: 'education',
      icon: <FaGraduationCap />,
      year: '2023',
      title: 'Engineering Degree <span> Samtat Ashok Technological Institute, Vidisha (M.P.)</span>',
      desc: 'I completed a B.Tech in Electronics and Communication Engineering in 2024 with an overall CGPA of 8.14.',
    },
  
    {
      id: 5,
      category: 'education',
      icon: <FaGraduationCap />,
      year: '2018',
      title: 'Intermediate <span> Sunrise School of Excellence</span>',
      desc: 'I have completed my intermediate in 2018 with a score of 66%. ',
    },
  
    {
      id: 6,
      category: 'education',
      icon: <FaGraduationCap />,
      year: '2016',
      title: '10th <span> Servite Convent Senior Secondary School </span>',
      desc: 'I have completed my high school in 2016 with a score of 7 CGPA.',
    },
  ];
  
  export const skills = [
    {
      id: 1,
      title: 'Html',
      percentage: '75',
    },
  
    {
      id: 2,
      title: 'Javascript',
      percentage: '65',
    },
  
    {
      id: 3,
      title: 'CSS',
      percentage: '70',
    },
  
    {
      id: 4,
      title: 'Java',
      percentage: '80',
    },
  
    {
      id: 5,
      title: 'Springboot',
      percentage: '85',
    },
  
    {
      id: 6,
      title: 'MongoDB',
      percentage: '75',
    },
  
    {
      id: 7,
      title: 'Rest API',
      percentage: '60',
    },
  
    {
      id: 8,
      title: 'React JS',
      percentage: '75',
    },

    {
      id: 9,
      title: 'Node JS',
      percentage: '65',
    },
  ];
  
  export const portfolio = [
    {
      id: 1,
      img: Work1,
      title: 'Photo Editing',
      details: [
        {
          icon: <FiFileText />,
          title: 'Project : ',
          desc: 'Photo',
        },
        {
          icon: <FiUser />,
          title: 'Client : ',
          desc: 'Dribble',
        },
        {
          icon: <FaCode />,
          title: 'Language : ',
          desc: 'Adobe Photoshop',
        },
        {
          icon: <FiExternalLink />,
          title: 'Preview : ',
          desc: 'www.dribble.com',
        },
      ],
    },
  
    {
      id: 2,
      img: Work2,
      title: 'Website Design',
      details: [
        {
          icon: <FiFileText />,
          title: 'Project : ',
          desc: 'Website',
        },
        {
          icon: <FiUser />,
          title: 'Educational Site : ',
          desc: 'Completed Eductional Site with ReactJs',
        },
        {
          icon: <FaCode />,
          title: 'Language : ',
          desc: 'React JS',
        },
        {
          icon: <a href='https://webpage1-dun.vercel.app/'><FiExternalLink /> </a>,
          title: 'Preview : ',
          desc: 'Educational Site',
        },
      ],
    },
  
    {
      id: 3,
      img: Work3,
      title: 'Video Editing',
      details: [
        {
          icon: <FiFileText />,
          title: 'Project : ',
          desc: 'Video',
        },
        {
          icon: <FiUser />,
          title: 'Client : ',
          desc: 'Dribble',
        },
        {
          icon: <FaCode />,
          title: 'Language : ',
          desc: 'Adobe Premium',
        },
        {
          icon: <FiExternalLink />,
          title: 'Preview : ',
          desc: 'www.dribble.com',
        },
      ],
    },
  
    {
      id: 4,
      img: Work4,
      title: 'Video Editing',
      details: [
        {
          icon: <FiFileText />,
          title: 'Project : ',
          desc: 'Video',
        },
        {
          icon: <FiUser />,
          title: 'Client : ',
          desc: 'Dribble',
        },
        {
          icon: <FaCode />,
          title: 'Language : ',
          desc: 'Adobe Premium',
        },
        {
          icon: <FiExternalLink />,
          title: 'Preview : ',
          desc: 'www.dribble.com',
        },
      ],
    },
  
    {
      id: 5,
      img: Work5,
      title: 'Landing Page',
      details: [
        {
          icon: <FiFileText />,
          title: 'Project : ',
          desc: 'Website',
        },
        {
          icon: <FiUser />,
          title: 'Client : ',
          desc: 'Landing Page of Educational Site',
        },
        {
          icon: <FaCode />,
          title: 'Language : ',
          desc: 'React JS, Node JS',
        },
        {
          icon: <a href='https://webpage1-dun.vercel.app/landing'> <FiExternalLink /> </a>,
          title: 'Preview : ',
          desc: 'Landing Page',
        },
      ],
    },
  
    {
      id: 6,
      img: Work6,
      title: 'SDFC Banking Project',
      details: [
        {
          icon: <FiFileText />,
          title: 'Project : ',
          desc: 'Photo',
        },
        {
          icon: <FiUser />,
          title: 'Client : ',
          desc: 'Myself',
        },
        {
          icon: <FaCode />,
          title: 'Language : ',
          desc: 'Java, SpringBoot, JSP, MySQL, ',
        },
        {
          icon: <a href='https://github.com/02snehil/SDFC_Banking'><FiExternalLink /> </a>,
          title: 'Preview : ',
          desc: 'https://github.com/02snehil/SDFC_Banking',
        },
      ],
    },
  ];
  
  export const themes = [
    {
      id: 1,
      img: Theme1,
      color: 'hsl(252, 35%, 51%)',
    },
  
    {
      id: 2,
      img: Theme2,
      color: 'hsl(4, 93%, 54%)',
    },
  
    {
      id: 3,
      img: Theme3,
      color: 'hsl(271, 76%, 53%)',
    },
  
    {
      id: 4,
      img: Theme4,
      color: 'hsl(225, 73%, 57%)',
    },
  
    {
      id: 5,
      img: Theme5,
      color: 'hsl(43, 74%, 49%)',
    },
  
    {
      id: 6,
      img: Theme6,
      color: 'hsl(339, 81%, 66%)',
    },
  
    {
      id: 7,
      img: Theme7,
      color: 'hsl(80, 61%, 50%)',
    },
  
    {
      id: 8,
      img: Theme8,
      color: 'hsl(19, 96%, 52%)',
    },
  
    {
      id: 9,
      img: Theme9,
      color: 'hsl(88, 65%, 43%)',
    },
  
    {
      id: 10,
      img: Theme10,
      color: 'hsl(42, 100%, 50%)',
    },
  ];
  