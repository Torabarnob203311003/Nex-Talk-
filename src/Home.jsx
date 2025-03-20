import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function Home() {
    const navigate = useNavigate();
    const [input, setInput] = useState('');

    function handleJoin() {
        if (input.trim()) {
            navigate(`room/${input}`);
        } else {
            alert("Please enter a valid Room ID");
        }
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-[#0f172a] to-[#334155] text-white">
            {/* Logo and tagline with animation */}
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center mb-8"
            >
                <motion.h1
                    className="text-5xl font-extrabold tracking-wider text-blue-500"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    NexTalk
                </motion.h1>
                <motion.p
                    className="mt-2 text-lg font-medium text-gray-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                >
                    A new way to connect.
                </motion.p>
            </motion.div>

            {/* Input and button */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4"
            >
                <input
                    onChange={(e) => setInput(e.target.value)}
                    value={input}
                    type="text"
                    placeholder="Enter a Random Room ID [1254698]"
                    className="w-64 sm:w-72 md:w-80 lg:w-96 px-4 py-2 bg-gray-800 text-white border border-gray-600 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                />
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleJoin}
                    className="w-32 sm:w-36 md:w-40 lg:w-44 px-6 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 transition duration-300"
                >
                    Join Now
                </motion.button>
            </motion.div>

            {/* Footer with social media icons */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="mt-8 text-gray-400 text-sm flex flex-col items-center"
            >
                <p>© 2025 Abu Torab. All rights reserved.</p>
                <div className="flex space-x-4 mt-2">
                    <a
                        href="https://www.linkedin.com/in/abu-torab-arnob-482a15202"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-500 transition duration-300"
                    >
                        <FaLinkedin size={24} />
                    </a>
                    <a
                        href="https://github.com/Torabarnob203311003"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-gray-300 transition duration-300"
                    >
                        <FaGithub size={24} />
                    </a>
                </div>
            </motion.div>
        </div>
    );
}

export default Home;
