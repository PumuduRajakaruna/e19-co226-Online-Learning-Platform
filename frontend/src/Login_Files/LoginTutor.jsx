import React, { useState } from 'react';

import { useNavigate } from "react-router-dom";

function LoginTutor() {

    const navigate = useNavigate();

    const homePath = "/"

    const navigateHome = (path) => {
        navigate(path);
    }

    const [tutorEmail, setTutorEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:9081/tutor/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ tutorEmail, password }),
            });

            if (response.ok) {
                alert('Login successful!');
                localStorage.setItem('tutorEmail', tutorEmail);
                navigate("/tutor/dashboard")
            } else {
                // Handle login failure, e.g., show error message
                alert('Login failed. Please check your credentials.');
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="max-w-md mx-auto">
                        <div>
                            <h1 className="text-2xl font-semibold">
                                Log In - Tutor
                            </h1>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="divide-y divide-gray-200">

                                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                    <div className="relative">
                                        <input
                                            autoComplete="off"
                                            id="userId"
                                            name="userId"
                                            type="text"
                                            className="mb-4 peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                                            placeholder="Tutor ID"
                                            value={tutorEmail}
                                            onChange={(e) => setTutorEmail(e.target.value)}
                                            required
                                        />
                                        <label
                                            htmlFor="userId"
                                            className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                                        >
                                            Tutor ID
                                        </label>
                                    </div>
                                    <div className="relative">
                                        <input
                                            autoComplete="off"
                                            id="password"
                                            name="password"
                                            type="password"
                                            className=" peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                                            placeholder="Password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                        <label
                                            htmlFor="password"
                                            className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                                        >
                                            Password
                                        </label>
                                    </div>

                                    {/* Submit Button */}
                                    <div className="relative">
                                        <button
                                            className="mt-3 bg-blue-500 text-white rounded-md px-5 py-1 w-full hover:bg-blue-700"
                                            type='submit'>
                                            Submit
                                        </button>
                                    </div>

                                    {/* Back To Home Button */}
                                    <div className="relative">
                                        <button
                                            className="bg-green-400 text-white rounded-md px-5 py-1 w-full hover:bg-green-600"
                                            onClick={() => navigateHome(homePath)}>
                                            Back to Home
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginTutor;
