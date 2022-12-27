import manoaxchange from '../images/manoaxchange.png';
import hacc from '../images/hacc.png';
import phonebook from '../images/phonebook.png';
import sketch from '../images/sketch.png';

const projects = [
  {
    title: 'ManoaXchange',
    tech: ['React', 'Bootstrap', 'Express', 'Meteor', 'MongoDB', 'Gmail API', 'Cloudinary API'],
    description: 'An application designed to help UH Manoa students and faculty repurpose goods.',
    image: manoaxchange,
    link: '/projects/manoaxchange',
  },
  {
    title: 'DOELT - Department of Education Legislative Tracker',
    tech: ['React', 'Bootstrap', 'cheerio', 'Express', 'MongoDB', 'Meteor'],
    description: 'Won 2nd place award at the Hawaii Annual Code Challenge 2022 by building a modern legislative tracker with a scraper and interactive dashboards.',
    image: hacc,
    link: '/projects/doelt',
  },
  {
    title: 'Phonebook',
    tech: ['React', 'CSS', 'Express', 'MongoDB'],
    description: 'A phonebook in the form of a CRUD application.',
    image: phonebook,
    link: '/projects/phonebook',
  },
  {
    title: 'Sketch',
    tech: ['HTML', 'CSS', 'Javascript'],
    description: 'A web version of Etch-A-Sketch built through the Odin Project.',
    image: sketch,
    link: '/projects/sketch',
  },
];

export default projects;
