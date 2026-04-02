import React from 'react';
import { Book, Lightbulb, Atom, Ruler, FlaskRound as Triangle } from 'lucide-react';
import Features from '../componets/Features';
import Footer from '../componets/Footer_FIn';
import BackToTopButton from '../componets/BackToTopButton';
import HowToUseV from '../componets/HowToUseV';
import NavBar from '../componets/NavBar';
import TotalUsers from '../componets/TotalUsers';
import Notworking from './Notworking';
// Reusable floating icon component
function FloatingIcon({ children, className }: { children: React.ReactNode; className: string }) {
    return (
        <div className={`absolute text-blue-600/80 animate-float ${className}`}>
            {children}
        </div>
    );
}

const indexCss = () => {

};
indexCss();


function Home2Page() {
    // Testimonial data
    const testimonials = [
        {
            name: "T Sri Santoosh",
            role: "2nd Year CSE",
            text: "SARA AI is literally a one-stop solution for students! I can access topic-wise summaries, watch related YouTube tutorials, and even get mental health support when I feel stressed. It’s the smartest tool I’ve used so far."
        },
        {
            name: "M Venkat Pavan",
            role: "2nd Year DS",
            text: "The website is super user-friendly and works great. I love how everything — from subject modules to mental health tips — Everything has a Perfect Flow. SARA really understands students."
        },
        {
            name: "G Rukrut Raj",
            role: "3rd Year CSE",
            text: "With SARA AI, I no longer struggle to find the right material. The Smart Study Guide, curated YouTube videos, and the option to get emotional support in one platform makes it stand out from all other tools I’ve tried"
        }
    ];

    return (
        <>
            <NavBar />
            {/* <Notworking /> */}
            <div className="min-h-screen bg-gradient-to-b from-[#8494e9] to-white dark:from-[#4c5bd4] to-white transition-colors duration-300 ease-in-out">
                {/* Hero Section */}
                <div className="bg-[#8494e9] dark:bg-[#4c5bd4] transition-all duration-300 ease-in-out relative overflow-hidden">
                    <FloatingIcon className="top-16 md:top-20 left-1/2 md:left-1/3 dark:text-[#000000]  hover:text-transparent dark:hover:text-transparent duration-2 00 ease-in-out"><Book className="w-10 h-10 md:w-12 md:h-12" /></FloatingIcon>
                    <FloatingIcon className="bottom-24 md:bottom-32 left-1/4 dark:text-[#000000] hover:text-transparent dark:hover:text-transparent duration-200 ease-in-out">
                        <Lightbulb className="w-10 h-10 md:w-12 md:h-12" />
                    </FloatingIcon>
                    <FloatingIcon className="bottom-0 md:bottom-1 left-8 md:left-32 dark:text-[#000000] hover:text-transparent dark:hover:text-transparent duration-200 ease-in-out"><Atom className="w-10 h-10 md:w-12 md:h-12" /></FloatingIcon>
                    <FloatingIcon className="bottom-0 md:bottom-1 right-1/4 dark:text-[#000000] hover:text-transparent dark:hover:text-transparent duration-200 ease-in-out"><Ruler className="w-10 h-10 md:w-12 md:h-12" /></FloatingIcon>
                    <FloatingIcon className="bottom-1/4 right-1/2 dark:text-[#000000] hover:text-transparent dark:hover:text-transparent duration-200 ease-in-out"><Triangle className="w-10 h-10 md:w-12 md:h-12" /></FloatingIcon>

                    <div className="container mx-auto px-6 pt-16 md:pt-20 pb-24 md:pb-32 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        {/* Text content */}
                        <div className="flex flex-col justify-center">
                            <h1 className="text-4xl md:text-6xl font-bold mb-4">
                                <span className="text-white dark:text-black transition all duration-300 ease-in-out">The Best</span><br />
                                <span className="text-black dark:text-white transition all duration-300 ease-in-out">Choice For</span>
                                <span className="text-white dark:text-black transition all duration-300 ease-in-out"> Future</span>
                            </h1>
                            <p className="text-lg md:text-2xl text-white dark:text-white transition all duration-300 ease-in-out  mb-6 md:mb-8 leading-relaxed">
                                Sara is your AI-powered educational companion, designed to make learning smarter and more personalized. From study guides to career mentorship, Sara supports every aspect of student life — helping you grow, succeed, and thrive. Let's shape the future of education together!
                            </p>
                            <div className="flex  space-x-4 md:space-x-6">
                                <a href='#Features'>
                                    <button className="bg-black text-white dark:text-black dark:bg-white px-6 md:px-8 py-2 md:py-3 rounded-full  flex items-center group transform transition-all duration-300 ease-in-out hover:-translate-y-1  hover:scale-105">
                                        Explore
                                        <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </a>
                                <a href='#Tutorial'>
                                    <button  className="bg-white text-black dark:text-white dark:bg-black px-6 md:px-8 py-2 md:py-3 rounded-full  flex items-center group transform transition-all duration-300 ease-in-out hover:-translate-y-1  hover:scale-105">
                                        How to Use It ?
                                        <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </a>
                            </div>
                        </div>
                        {/* Image */}
                        <div className="relative">
                            <div className="bg-[#8494e9] dark:bg-[#4c5bd4] transition-all duration-300 ease-in-out  ">
                                <img
                                    src="/har.png"
                                    alt="AI Education Illustration"
                                    className="w-full h-auto rounded-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tutorial Section */}
                <HowToUseV />


                {/* Features Section */}
                <Features />
        
                <TotalUsers />

                {/* Testimonials Section */}
                <div className="py-16 md:py-24 bg-white dark:bg-[#1f1f1f] transition-all duration-300 ease-in-out">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-12 md:mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-[#d4d4d4] transition-all duration-300 ease-in-out">What Student's Say</h2>
                            <p className="text-gray-600 dark:text-[#d4d4d4] transition-all duration-300 ease-in-out"></p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className="bg-white dark:bg-[#262626] rounded-xl shadow-lg p-4 md:p-6 hover:shadow-2xl transition-shadow">
                                    <p className="text-gray-600 mb-4 md:mb-6 italic dark:text-[#d4d4d4]">"{testimonial.text}"</p>
                                    <div className="flex items-center space-x-4">
                                        
                                        <div>
                                            <h4 className="font-semibold dark:text-white">{testimonial.name}</h4>
                                            <p className="text-gray-500 text-sm dark:text-[#d4d4d4]">{testimonial.role}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <Footer />
                {/* Back to top button */}
                <BackToTopButton />
            </div>
        </>
    );
}

export default Home2Page;
