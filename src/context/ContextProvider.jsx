import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: 'Frankline Osoro',
    role: 'Full Stack Software Developer',
    experience: '3 years',
    skills: ['JavaScript', 'ReactJS', 'Node.js', 'AI training'],
    bio: `Frankline Osoro is a Full Stack Software Developer with 3 years of experience in JavaScript, ReactJS, Node.js, and AI training. He has a proven track record in delivering scalable, secure, and efficient code with a 90% success rate. He is experienced in front-end technologies (JavaScript, React, Next.js, Redux, HTML5, CSS3, TypeScript, Tailwind CSS, Bootstrap, Responsive Web Design) and back-end technologies (Ruby on Rails, NodeJS, Express, MongoDB, PostgreSQL). He is also skilled in tools and methods such as Git, GitHub, Heroku, Netlify, Mobile/Responsive Development, RSpec, TDD (Jest, React Testing Library), and Chrome Dev Tools. Frankline has professional experience in remote pair-programming, teamwork, and mentoring. He is skilled in multilingual problem-solving and experienced in SCRUM methodology, both remote and on-site. Frankline is proficient in remote work, team collaboration, attention to detail, effective communication, problem-solving, adaptability, customer-centric mindset, and learning and development.`,
  });
  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

const useUserContext = () => useContext(UserContext);

export { ContextProvider, useUserContext };
