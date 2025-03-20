import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    const [input, setInput] = useState('');

    function handelJoin() {
        if (input.trim()) {
            navigate(`room/${input}`);
        } else {
            alert("Please enter a valid Room ID");
        }
    }

    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-r from-[#0f172a] to-[#334155]">
            <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4">
                <input
                    onChange={(e) => setInput(e.target.value)}
                    value={input}
                    type="text"
                    placeholder="Enter Room ID"
                    className="w-64 sm:w-72 md:w-80 lg:w-96 px-4 py-2 bg-gray-800 text-white border border-gray-600 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                />
                <button
                    onClick={handelJoin}
                    className="w-32 sm:w-36 md:w-40 lg:w-44 px-6 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 hover:scale-105 transition duration-300"
                >
                    Join Now
                </button>
            </div>
        </div>
    );
}

export default Home;
