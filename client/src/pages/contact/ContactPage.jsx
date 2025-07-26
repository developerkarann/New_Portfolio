import { useEffect, useRef, useState } from 'react';
import {
    FaEnvelope,
    FaGithub,
    FaLinkedin,
    FaMapMarkerAlt,
    FaPhone,
    FaTwitter
} from 'react-icons/fa';
import axios from 'axios'
import { toast } from 'react-toastify';

const ContactPage = () => {

    const [visibleSections, setVisibleSections] = useState(new Set());

    const sectionRefs = {
        contact: useRef(null)
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

    const contactHandler = async (e) => {
        e.preventDefault();

        const toastId = toast.loading("Sending your message...");


        const name = e.target.name.value;
        const email = e.target.email.value;
        const subject = e.target.subject.value;
        const description = e.target.description.value;

        const payload = { name, email, subject, description };
        try {
            const promise = await axios.post(`${import.meta.env.VITE_SERVER}/contact`, payload).then((res) => {
                toast.update(toastId, {
                    render: res.data.message || 'Thanks for contacting!',
                    type: 'success',
                    isLoading: false,
                    autoClose: 4000,
                    closeOnClick: true,
                })
            }).catch((err) => {
                toast.update(toastId, {
                    render: err.data.message || 'Please try again...',
                    type: 'error',
                    isLoading: false,
                    autoClose: 4000,
                    closeOnClick: true,
                })
            })

            e.target.reset();
        } catch (error) {
            // No need to toast again here — it's already handled in `toast.promise`
            console.error(error);
        }
    };
    return (
        <>
            <section id="contact" ref={sectionRefs.contact} className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 relative overflow-hidden">
                {/* Animated Background Elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
                </div>

                <div className="max-w-6xl mx-auto relative z-10">
                    <div className={`text-center mb-16 transition-all duration-1000 ${visibleSections.has('contact')
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-10'
                        }`}>
                        <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                            Let's Create Something Amazing
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"></div>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                            Ready to bring your ideas to life? I'm here to help you build innovative solutions.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Contact Information */}
                        <div className={`space-y-8 transition-all duration-1000 delay-300 ${visibleSections.has('contact')
                            ? 'opacity-100 translate-x-0'
                            : 'opacity-0 -translate-x-20'
                            }`}>
                            <div className="space-y-6">
                                {[
                                    { icon: <FaEnvelope />, title: "Email", value: "karanpal03040@gmail.com", color: "from-purple-500 to-purple-600" },
                                    { icon: <FaPhone />, title: "Phone", value: "+91 8869012507", color: "from-pink-500 to-pink-600" },
                                    { icon: <FaMapMarkerAlt />, title: "Location", value: "Uttar Pradesh, India", color: "from-blue-500 to-blue-600" }
                                ].map((contact, index) => (
                                    <div
                                        key={contact.title}
                                        className="group bg-gray-800/30 backdrop-blur-sm p-5 rounded-2xl border border-purple-500/20 hover:border-purple-500/60 transition-all duration-500 transform hover:-translate-y-2"
                                        style={{ transitionDelay: `${index * 150}ms` }}
                                    >
                                        <div className="flex items-center space-x-6">
                                            <div className={`w-16 h-16 bg-gradient-to-r ${contact.color} rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-300`}>
                                                <div className="text-white text-xl">{contact.icon}</div>
                                            </div>
                                            <div>
                                                <h4 className="text-white font-bold text-lg mb-1">{contact.title}</h4>
                                                <p className="text-gray-300">{contact.value}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Social Links */}
                            <div className="pt-8">
                                <h4 className="text-white font-bold text-lg mb-6">Follow Me</h4>
                                <div className="flex space-x-6 pt-2">
                                    <a href="https://github.com/developerkarann" target='_blank'> <FaGithub className="text-3xl text-white hover:text-purple-400 cursor-pointer transition-colors duration-300" /></a>
                                    <a href="https://www.linkedin.com/in/karan-pal-developer/" target='_blank'> <FaLinkedin className="text-3xl text-white hover:text-purple-400 cursor-pointer transition-colors duration-300" /></a>
                                    <a href="https://x.com/developerkarann" target='_blank'> <FaTwitter className="text-3xl text-white hover:text-purple-400 cursor-pointer transition-colors duration-300" /></a>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className={`relative transition-all duration-1000 delay-600 ${visibleSections.has('contact')
                            ? 'opacity-100 translate-x-0'
                            : 'opacity-0 translate-x-20'
                            }`}>
                            <div className="bg-gray-800/20 backdrop-blur-sm p-8 rounded-3xl border border-purple-500/30 shadow-2xl shadow-purple-500/10">
                                <form className="space-y-6" onSubmit={contactHandler}>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="relative group">
                                            <input
                                                type="text"
                                                placeholder="Your Name"
                                                name='name'
                                                required
                                                className="w-full bg-gray-900/50 border border-purple-500/30 rounded-xl px-6 py-4 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-all duration-300 hover:border-purple-400/60"
                                            />
                                        </div>
                                        <div className="relative group">
                                            <input
                                                type="email"
                                                name='email'
                                                required
                                                placeholder="Your Email"
                                                className="w-full bg-gray-900/50 border border-purple-500/30 rounded-xl px-6 py-4 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-all duration-300 hover:border-purple-400/60"
                                            />
                                        </div>
                                    </div>

                                    <div className="relative group">
                                        <input
                                            type="text"
                                            placeholder="Subject"
                                            name='subject'
                                            required
                                            className="w-full bg-gray-900/50 border border-purple-500/30 rounded-xl px-6 py-4 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-all duration-300 hover:border-purple-400/60"
                                        />
                                    </div>

                                    <div className="relative group">
                                        <textarea
                                            rows={6}
                                            placeholder="Tell me about your project..."
                                            name='description'
                                            required
                                            className="w-full bg-gray-900/50 border border-purple-500/30 rounded-xl px-6 py-4 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-all duration-300 resize-none hover:border-purple-400/60"
                                        ></textarea>
                                    </div>

                                    <button
                                        type='submit'
                                        className="group relative w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 rounded-xl text-white font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 overflow-hidden">
                                        <span className="relative z-10 flex items-center justify-center space-x-2">
                                            <span>Send Message</span>
                                            <div className="transform group-hover:translate-x-1 transition-transform duration-300">
                                                →
                                            </div>
                                        </span>
                                    </button>
                                </form>
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-pulse"></div>
                            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse animation-delay-2000"></div>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className={`text-center mt-20 transition-all duration-1000 delay-900 ${visibleSections.has('contact')
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-10'
                        }`}>
                        <div className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 backdrop-blur-sm p-8 rounded-3xl border border-purple-500/20">
                            <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Your Project?</h3>
                            <p className="text-gray-300 max-w-2xl mx-auto mb-6">
                                From concept to deployment, I'll help you build scalable, modern applications that exceed your expectations.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                {['Free Consultation', 'Quick Response', '100% Satisfaction'].map((feature, index) => (
                                    <div key={feature} className="flex items-center space-x-2 bg-gray-800/30 px-4 py-2 rounded-full border border-purple-500/30">
                                        <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                                        <span className="text-gray-300 text-sm">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactPage