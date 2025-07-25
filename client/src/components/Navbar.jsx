import React from 'react'
import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {

      const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const navItems = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' }
    ];


    return (
        <>

            
  <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-sm border-b border-purple-500/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            Karan Pal
                        </div>
                        
                        {/* Desktop Navigation */}
                        <div className="hidden lg:block">
                            <ul className="ml-10 flex items-baseline space-x-8">
                                {navItems.map((item) => (
                                    <li key={item.name}>
                                        <a
                                            href={item.href}
                                            className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-lg font-medium transition-all duration-300  relative group"
                                        >
                                            {item.name}
                                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Mobile/Tablet menu button */}
                        <div className="lg:hidden">
                            <button
                                onClick={toggleMenu}
                                className="text-gray-300 hover:text-white p-2 rounded-md transition-colors duration-200"
                                aria-label="Toggle menu"
                            >
                                {isMenuOpen ? (
                                    <HiX className="h-6 w-6" />
                                ) : (
                                    <HiMenu className="h-6 w-6" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile/Tablet Menu Overlay */}
            <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
                isMenuOpen 
                    ? 'opacity-100 pointer-events-auto' 
                    : 'opacity-0 pointer-events-none'
            }`}>
                {/* Backdrop */}
                <div 
                    className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
                        isMenuOpen ? 'opacity-100' : 'opacity-0'
                    }`}
                    onClick={closeMenu}
                ></div>
                
                {/* Menu Panel */}
                <div className={`absolute top-0 right-0 h-full w-full bg-gray-900/95 backdrop-blur-md border-l border-purple-500/30 transform transition-transform duration-300 ease-in-out ${
                    isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}>
                    <div className="flex flex-col h-full">
                        {/* Header */}
                        <div className="flex items-center justify-between h-16 px-4 border-b border-purple-500/30">
                            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                Alex.dev
                            </div>
                            <button
                                onClick={closeMenu}
                                className="text-gray-300 hover:text-white p-2 rounded-md transition-colors duration-200"
                                aria-label="Close menu"
                            >
                                <HiX className="h-6 w-6" />
                            </button>
                        </div>
                        
                        {/* Navigation Items */}
                        <div className="flex-1 px-4 py-8">
                            <div className="space-y-6">
                                {navItems.map((item, index) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        onClick={closeMenu}
                                        className={`block text-2xl font-medium text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 hover:bg-purple-500/20 px-4 py-3 rounded-lg animate-slide-in`}
                                        style={{
                                            animationDelay: `${index * 100}ms`,
                                            animationFillMode: 'both'
                                        }}
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="px-4 py-6 border-t border-purple-500/30">
                            <div className="text-center text-gray-400 text-sm">
                                © 2025 Alex.dev
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <style jsx>{`
                @keyframes slide-in {
                    from {
                        opacity: 0;
                        transform: translateX(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
                
                .animate-slide-in {
                    animation: slide-in 0.4s ease-out;
                }
            `}</style>
        </>
    )
}

export default Navbar