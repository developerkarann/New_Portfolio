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

const ProjectPage = () => {

    const [activeSection, setActiveSection] = useState('home');
    const [visibleSections, setVisibleSections] = useState(new Set());

    const sectionRefs = {
        projects: useRef(null),
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


    // Scroll to section
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const projects = [
        {
            id: 1,
            title: "E-Commerce Platform",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
            description: "Full-stack MERN e-commerce platform with payment integration",
            preview: "https://example.com",
            code: "https://github.com"
        },
        {
            id: 2,
            title: "Task Management App",
            image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
            description: "React-based task management with real-time collaboration",
            preview: "https://example.com",
            code: "https://github.com"
        },
        {
            id: 3,
            title: "Weather Dashboard",
            image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=250&fit=crop",
            description: "Real-time weather app with location-based forecasts",
            preview: "https://example.com",
            code: "https://github.com"
        },
        {
            id: 4,
            title: "Social Media Analytics",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
            description: "Analytics dashboard for social media performance tracking",
            preview: "https://example.com",
            code: "https://github.com"
        },
        {
            id: 5,
            title: "Crypto Portfolio Tracker",
            image: "https://images.unsplash.com/photo-1518183214770-9cffbec72538?w=400&h=250&fit=crop",
            description: "Cryptocurrency portfolio management with real-time prices",
            preview: "https://example.com",
            code: "https://github.com"
        },
        {
            id: 6,
            title: "Restaurant Management",
            image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=250&fit=crop",
            description: "Complete restaurant management system with POS integration",
            preview: "https://example.com",
            code: "https://github.com"
        }
    ];

    const ProjectsData = [

                {
            id: 1,
            title: 'CreatorsFlame',
            description: "CreatorsFlame is a crowdfunding platform built with Next.js, featuring Razorpay integration and secure Google and GitHub authentication.",
            image: '/projects/creatorsflame.png',
            preview: 'https://creatorsflame.vercel.app/',
            code: 'https://github.com/developerkarann/CreatorsFlame',
        },

        {
            id: 2,
            title: 'Vedic Store E-commerce',
            description: "Vedic Store is a full-stack e-commerce site offering products with features like cart, multi-stage checkout, search, and filtering.",
            image: '/projects/vedicstore.png',
            preview: 'https://vedicstore.vercel.app',
            code: 'https://github.com/developerkarann/VedicStore',
        },
        {
            id: 3,
            title: 'Writo.tech',
            description: "Writo is an educational platform offering certification courses, with a Node.js and Express.js backend supporting forms and functionality. ",
            image: '/projects/writo.png',
            preview: 'https://writo.tech/',
            code: 'https://writo.tech/',

        },
        {

            id: 4,
            title: 'ZapChat - Realtime Chat App',
            tech: ' React.js, Node.js, Express.js, MongoDb',
            description: "ZapChat is a real-time chat application enabling instant messaging with live updates, built for fast and seamless communication.",
            image: '/projects/zapchat.png',
            preview: 'https://zapchat-karandev.vercel.app',
            code: 'https://github.com/developerkarann/ZapChat_realtime-chat-application',
        },
          {
            
            id: 5,
            title: 'Gyaanta - Ed-Tech App',
            description: "Gyaanta! is an educational website offering diverse courses and interactive learning experiences for students and curious learners alike.",
            image: '/projects/gyaanta.png',
            preview: 'https://gyaanta.netlify.app/',
            code: 'https://github.com/jainsarwang/ProjectBright',
        },

        // {
        //     id: 6,
        //     title: 'MySpotify - Music App',
        //     description: "MySpotify is a music streaming website which provide sevaral playlist accrouding to the mood by them user can listen songs without dowanload them and without any intruption. This project is build in HTMl, CSS and JavaScript",
        //     image: '/projects/spotify.png',
        //     preview: 'https://developerkarann.github.io/myspotify',
        //     code: 'https://github.com/developerkarann/myspotify',
        // },
        // {
        //     id: 7,
        //     title: 'Magic Notes',
        //     tech: ' React.js, Node.js, Express.js, MongoDb',
        //     description: "Gyaanta! It's an education website that offers a wide range of courses and interactive learning experiences. Whether you're a student or just curious to learn new things, Gyaanta has you covered.",
        //     image: '/projects/notes.png',
        //     preview: 'https://developerkarann.github.io/notes',
        //     code: 'https://github.com/developerkarann/notes',
        // },

    ]

    return (
        <>

            <section id="projects" ref={sectionRefs.projects} className="min-h-screen px-4 sm:px-6 lg:px-8 py-20">
                <div className="max-w-7xl mx-auto">
                    <div className={`text-center mb-16 transition-all duration-1000 ${visibleSections.has('projects')
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-10'
                        }`}>
                        <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                            My Projects
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"></div>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Here are some of my recent projects that showcase my skills in full-stack development
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {ProjectsData.map((project, index) => (
                            <div
                                key={project.id}
                                className={`group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-purple-500/30 hover:border-purple-500/60 transition-all duration-1000 transform hover:-translate-y-2 ${visibleSections.has('projects')
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 translate-y-20'
                                    }`}
                                style={{ transitionDelay: `${index * 150}ms` }}
                            >
                                <div className="relative overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>

                                <div className="p-5">
                                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                    <p className="text-gray-400 mb-4">{project.description}</p>

                                    <div className="flex flex-col sm:flex-row gap-3">
                                        <button className="flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-4 py-2 rounded-lg text-white text-sm font-medium transition-all duration-300 transform hover:scale-105">
                                            <FaExternalLinkAlt />
                                            <span>Preview</span>
                                        </button>
                                        <button className="flex items-center justify-center space-x-2 border border-purple-500 hover:bg-purple-500 px-4 py-2 rounded-lg text-purple-400 hover:text-white text-sm font-medium transition-all duration-300">
                                            <FaCode />
                                            <span>Code</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProjectPage