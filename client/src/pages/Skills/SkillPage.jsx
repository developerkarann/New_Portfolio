import React, { useState, useEffect, useRef } from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaExternalLinkAlt,
  FaCode
} from 'react-icons/fa';
const SkillPage = () => {

  const [activeSkillTab, setActiveSkillTab] = useState('frontend');

  const [visibleSections, setVisibleSections] = useState(new Set());

  const sectionRefs = {
    skills: useRef(null),
  };


  const skillCategories = {
    frontend: [
      {
        name: "HTML",
        level: 95,
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/htmx/htmx-original.svg",
        color: "from-green-400 to-emerald-500"
      },
      {
        name: "CSS",
        level: 75,
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css",
        color: "from-green-400 to-emerald-500"
      },
      {
        name: "JavaScript",
        level: 95,
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        color: "from-yellow-400 to-orange-400"
      },
      {
        name: "React",
        level: 95,
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        color: "from-blue-400 to-cyan-400"
      },
      {
        name: "Redux",
        level: 95,
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
        color: "from-blue-400 to-cyan-400"
      },
      
      {
        name: "Tailwind CSS",
        level: 90,
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
        color: "from-teal-400 to-blue-500"
      },
      {
        name: "Next.js",
        level: 88,
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        color: "from-gray-400 to-gray-600"
      },
      {
        name: "Node.js",
        level: 92,
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        color: "from-green-500 to-green-600"
      },
      {
        name: "Express",
        level: 90,
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        color: "from-gray-500 to-gray-700"
      },
      {
        name: "MongoDB",
        level: 88,
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        color: "from-green-600 to-green-700"
      },
      {
        name: "MySql",
        level: 75,
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
        color: "from-blue-600 to-indigo-600"
      },

      {
        name: "Github",
        level: 85,
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
        color: "from-orange-500 to-red-500"
      },
      {
        name: "Git",
        level: 95,
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        color: "from-orange-500 to-red-500"
      },

      {
        name: "VS Code",
        level: 98,
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
        color: "from-blue-500 to-blue-600"
      },
      {
        name: "Figma",
        level: 85,
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
        color: "from-purple-500 to-pink-500"
      },
     
    ],
    backend: [
      {
        name: "Node.js",
        level: 92,
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        color: "from-green-500 to-green-600"
      },
      {
        name: "Express",
        level: 90,
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        color: "from-gray-500 to-gray-700"
      },
      {
        name: "MongoDB",
        level: 88,
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        color: "from-green-600 to-green-700"
      },
      {
        name: "PostgreSQL",
        level: 85,
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        color: "from-blue-600 to-indigo-600"
      },
      {
        name: "Python",
        level: 80,
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        color: "from-yellow-500 to-blue-500"
      },
      {
        name: "Redis",
        level: 78,
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
        color: "from-red-500 to-red-600"
      }
    ],
    devops: [
      {
        name: "Docker",
        level: 85,
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        color: "from-blue-500 to-blue-600"
      },
      {
        name: "AWS",
        level: 82,
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
        color: "from-orange-400 to-yellow-500"
      },
      {
        name: "Kubernetes",
        level: 75,
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
        color: "from-blue-600 to-purple-600"
      },
      {
        name: "Git",
        level: 95,
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        color: "from-orange-500 to-red-500"
      },
      {
        name: "Linux",
        level: 88,
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
        color: "from-gray-600 to-gray-800"
      },
      {
        name: "Jenkins",
        level: 80,
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
        color: "from-blue-400 to-blue-500"
      }
    ],
    tools: [
      {
        name: "VS Code",
        level: 98,
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
        color: "from-blue-500 to-blue-600"
      },
      {
        name: "Figma",
        level: 85,
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
        color: "from-purple-500 to-pink-500"
      },
      {
        name: "Webpack",
        level: 82,
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg",
        color: "from-blue-400 to-blue-500"
      },
      {
        name: "Sass",
        level: 88,
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
        color: "from-pink-500 to-pink-600"
      },
      {
        name: "GraphQL",
        level: 80,
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
        color: "from-pink-500 to-purple-500"
      },
      {
        name: "Firebase",
        level: 85,
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
        color: "from-yellow-400 to-orange-500"
      }
    ]
  };

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSections(prev => new Set([...prev, entry.target.id]));

          // Trigger active section change
          if (entry.intersectionRatio > 0.6) {
            setActiveSection(entry.target.id);
          }
        }
      });
    }, observerOptions);

    // Observe all sections
    Object.values(sectionRefs).forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  // Animate experience counters when home section is visible
  useEffect(() => {
    if (visibleSections.has('home')) {
      const timer = setTimeout(() => {
        const interval = setInterval(() => {
          setExperienceCount(prev => ({
            years: prev.years < 5 ? prev.years + 1 : 5,
            projects: prev.projects < 50 ? prev.projects + 2 : 50,
            clients: prev.clients < 25 ? prev.clients + 1 : 25
          }));
        }, 100);

        setTimeout(() => clearInterval(interval), 3000);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [visibleSections]);

  // Scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section id="skills" ref={sectionRefs.skills} className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className={`text-center mb-16 transition-all duration-1000 ${visibleSections.has('skills')
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
            }`}>
            <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              Skills & Technologies
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Technologies I use to build amazing digital experiences
            </p>
          </div>

          {/* Mobile-friendly Tab Selection */}
          {/* <div className={`flex justify-center mb-12 transition-all duration-1000 delay-300 ${
            visibleSections.has('skills') 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}>
            <div className="bg-gray-800/50 backdrop-blur-sm p-1 rounded-2xl border border-purple-500/30 w-full max-w-md overflow-x-auto">
              <div className="flex space-x-1 min-w-max">
                {Object.keys(skillCategories).map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveSkillTab(category)}
                    className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 whitespace-nowrap ${
                      activeSkillTab === category
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div> */}

          {/* Skills Grid with Technology Images */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {skillCategories[activeSkillTab].map((skill, index) => (
              <div
                key={skill.name}
                className={`group relative bg-gray-800/20 backdrop-blur-sm p-6 rounded-2xl border border-purple-500/20 hover:border-purple-500/60 transition-all duration-1000 transform hover:-translate-y-3 hover:shadow-2xl hover:shadow-purple-500/20 ${visibleSections.has('skills')
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-20'
                  }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Technology Image/Icon */}
                <div className="flex justify-center mb-4">
                  <div className="relative">
                    <img
                      src={skill.image}
                      alt={skill.name}
                      className="w-16 h-16 transform group-hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    {/* Fallback icon container */}
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl  items-center justify-center text-white text-2xl font-bold hidden">
                      {skill.name.charAt(0)}
                    </div>

                    {/* Glowing effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-20 rounded-xl blur-md transition-opacity duration-300`}></div>
                  </div>
                </div>

                {/* Skill Name */}
                <div className="text-center mb-3">
                  <h3 className="text-white font-bold text-sm group-hover:text-purple-300 transition-colors duration-300">
                    {skill.name}
                  </h3>
                </div>

                {/* Progress Bar */}
                {/* <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-400">Proficiency</span>
                    <span className="text-xs text-purple-300 font-bold">{skill.level}%</span>
                  </div>
                  <div className="bg-gray-700/30 h-1.5 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000`}
                      style={{
                        width: visibleSections.has('skills') ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 100 + 500}ms`
                      }}
                    ></div>
                  </div>
                </div> */}

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>
              </div>
            ))}
          </div>

          {/* Floating Animation Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/5 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-pink-500/5 rounded-full blur-xl animate-pulse animation-delay-2000"></div>
        </div>
      </section>
    </>
  )
}

export default SkillPage