
import { useEffect, useRef, useState } from 'react';
import {
    FaEnvelope,
    FaMapMarkerAlt,
    FaPhone
} from 'react-icons/fa';
const AboutPage = () => {

    const [visibleSections, setVisibleSections] = useState(new Set());

    const sectionRefs = {
        about: useRef(null),
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

    const technologies = [
        "Full Stack Development", "Frontend Development" , "Backend Development" ,  "RESTful API", "State Management", "User Authentications", "Version Control", "Deployment"
     ]

    return (
        <>

            <section id="about" ref={sectionRefs.about} className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
                <div className="max-w-6xl mx-auto">
                    <div className={`text-center mb-16 transition-all duration-1000 ${visibleSections.has('about')
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-10'
                        }`}>
                        <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                            About Me
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className={`space-y-6 transition-all duration-1000 delay-300 ${visibleSections.has('about')
                            ? 'opacity-100 translate-x-0'
                            : 'opacity-0 -translate-x-20'
                            }`}>
                            <h3 className="text-3xl font-bold text-white mb-4">
                                I'm a passionate Full Stack Developer
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                                With hands on experience in web development, I specialize in the MERN stack
                                (MongoDB, Express.js, React, Node.js) and have a solid foundation in JavaScript.
                                I'm passionate about creating scalable, efficient, and user-friendly applications.
                            </p>
                            <p className="text-gray-400 leading-relaxed">
                                I bring creativity,  problem-solving skills, and a dedication to clean, efficient code to every project I undertake. 
                                
                            </p>
                            <p className="text-gray-400 leading-relaxed"> 
                                Let's bring your ideas to life!
                            </p>

                            <div className="grid grid-cols-3 sm:grid-cols-3 gap-6 pt-6">
                                <div>
                                    <h4 className="text-purple-400 font-semibold mb-2">Frontend</h4>
                                    <ul className="text-gray-400 space-y-1">
                                        <li>• React & Next.js</li>
                                        <li>• JavaScript</li>
                                        <li>• Tailwind CSS</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-purple-400 font-semibold mb-2">Backend</h4>
                                    <ul className="text-gray-400 space-y-1">
                                        <li>• Node.js & Express</li>
                                        <li>• MongoDB & MySQL</li>
                                        <li>• RESTful APIs</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-purple-400 font-semibold mb-2">Tools</h4>
                                    <ul className="text-gray-400 space-y-1">
                                        <li>• Git & Github</li>
                                        <li>• Vercel & Render</li>
                                        <li>• Postman</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className={`relative transition-all duration-1000 delay-600 ${visibleSections.has('about')
                            ? 'opacity-100 translate-x-0'
                            : 'opacity-0 translate-x-20'
                            }`}>
                            <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 p-8 rounded-2xl border border-purple-500/30 backdrop-blur-sm">
                                <h4 className="text-2xl font-bold text-white mb-6">Quick Facts</h4>
                                <div className="space-y-4">
                                    <div className="flex items-center space-x-3">
                                        <FaMapMarkerAlt className="text-purple-400" />
                                        <span className="text-gray-300">Uttar Pradesh, India</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <FaEnvelope className="text-purple-400" />
                                        <span className="text-gray-300">karanapal03040@gmail.com</span>
                                    </div>
                                    {/* <div className="flex items-center space-x-3">
                                        <FaPhone className="text-purple-400" />
                                        <span className="text-gray-300">+91 8869012507</span>
                                    </div> */}
                                </div>

                                <div className="mt-8">
                                    <h5 className="text-lg font-semibold text-white mb-4">Skilled In</h5>
                                    <div className="flex flex-wrap gap-2">
                                        { technologies.map((skill) => (
                                            <span key={skill} className="bg-purple-600/30 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/50">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutPage