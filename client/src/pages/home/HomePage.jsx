import { useEffect, useRef, useState } from 'react';
import {
    FaGithub,
    FaLinkedin,
    FaTwitter
} from 'react-icons/fa';

import { Typewriter } from 'react-simple-typewriter'


const HomePage = () => {

    const [activeSection, setActiveSection] = useState('home');
    const [experienceCount, setExperienceCount] = useState({ years: 0, projects: 0, clients: 0 });
    const [visibleSections, setVisibleSections] = useState(new Set());

    const sectionRefs = {
        home: useRef(null),
        about: useRef(null),
        projects: useRef(null),
        skills: useRef(null),
        contact: useRef(null)
    };

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
                        clients: prev.clients < 10 ? prev.clients + 1 : 10
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

            <section id="home" ref={sectionRefs.home} className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left side - Text content */}
                    <div className={`space-y-6 transition-all duration-1000 ${visibleSections.has('home')
                        ? 'opacity-100 translate-x-0'
                        : 'opacity-0 -translate-x-20'
                        }`}>
                        <div className="space-y-2">
                            <p className="text-purple-400 text-lg font-medium">Hello, I'm</p>
                            <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                Karan Pal
                            </h1>
                            <h2 className="text-2xl lg:text-3xl text-gray-200 font-light">
                                <Typewriter
                                    words={['Software Developer', 'Software Engineer', 'MERN Stack Developer', 'Frontend Developer', 'Backend Developer']}
                                    loop={5}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={50}
                                    deleteSpeed={30}
                                    delaySpeed={3000}
                                />
                            </h2>
                        </div>

                        <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                            Passionate MERN stack developer with expertise in creating modern, scalable web applications.
                            I bring ideas to life with clean code and intuitive user experiences.
                        </p>

                        <div className="flex space-x-6 pt-2">
                            <a href="https://github.com/developerkarann" target='_blank'> <FaGithub className="text-3xl text-gray-400 hover:text-purple-400 cursor-pointer transition-colors duration-300" /></a>
                            <a href="https://www.linkedin.com/in/karan-pal-developer/" target='_blank'> <FaLinkedin className="text-3xl text-gray-400 hover:text-purple-400 cursor-pointer transition-colors duration-300" /></a>
                            <a href="https://x.com/developerkarann" target='_blank'> <FaTwitter className="text-3xl text-gray-400 hover:text-purple-400 cursor-pointer transition-colors duration-300" /></a>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">

                            <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-3 rounded-full text-white font-medium transition-all duration-300 transform hover:scale-105">
                                <a href="https://drive.google.com/file/d/12pEQ16Z-mTHjYBH0Qu9VDngrlGozo5G1/view?usp=sharing" target='_blank'>
                                    Download CV
                                </a>
                            </button>

                            <button
                                onClick={() => scrollToSection('contact')}
                                className="border border-purple-500 hover:bg-purple-500 px-8 py-3 rounded-full text-purple-400 hover:text-white font-medium transition-all duration-300"
                            >
                                Contact Me
                            </button>
                        </div>
                    </div>

                    {/* Right side - Developer photo */}
                    <div className={`flex justify-center transition-all duration-1000 delay-300 ${visibleSections.has('home')
                        ? 'opacity-100 translate-x-0'
                        : 'opacity-0 translate-x-20'
                        }`}>
                        <div className="relative">
                            <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-purple-500 shadow-2xl shadow-purple-500/25">
                                <img
                                    // src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                                    src='./profile.jpg'
                                    alt="Developer"
                                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
                            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-bounce"></div>
                        </div>
                    </div>
                </div>

                {/* Experience Stats */}
                {/* <div className={`absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-600 ${visibleSections.has('home')
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                    }`}>
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-12  backdrop-blur-sm px-8 py-4 rounded-2xl border border-purple-500/30">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-purple-400">{experienceCount.years}+</div>
                            <div className="text-gray-400 text-sm">Years Experience</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-purple-400">{experienceCount.projects}+</div>
                            <div className="text-gray-400 text-sm">Projects Completed</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-purple-400">{experienceCount.clients}+</div>
                            <div className="text-gray-400 text-sm">Happy Clients</div>
                        </div>
                    </div>
                </div> */}
            </section >
        </>
    )
}

export default HomePage