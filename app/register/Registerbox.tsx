import React from "react";
import '../globals.css'

export default function RegisterBox() {
    const registerContainerStyle = {
        opacity: 0.8,
        backgroundColor: '#1D1B1B',
        borderRadius: "15px",
    };

    const errorTextStyle = { 
        minHeight: '25px',
        display: 'block',
        padding: '0px',
        fontSize: '15px',
        color: 'red',
    };

    return (
        <div 
            className="flex items-center justify-center min-h-screen" 
            style={{
                backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/login_assets/login_background.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: "100vh"
            }}
        >
            <div 
                className="w-full max-w-lg p-8 mx-4" 
                style={registerContainerStyle}
            >
                <h1 className="text-2xl font-bold mb-3 text-white">Let's get you READY!</h1>
                <p className="text-gray-300">Fill in the information below to get started.</p>

                {/* Name */}
                <div className="mb-3">
                    <p className="text-white">Name</p>
                    <input 
                        type="text" 
                        className="w-full p-2 border rounded bg-gray-800 text-white" 
                    />
                    <span style={errorTextStyle}></span>
                </div>

                {/* Username and Date of Birth */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                    <div>
                        <p className="text-white">Username</p>
                        <input 
                            type="text" 
                            className="w-full p-2 border rounded bg-gray-800 text-white" 
                        />
                        <span style={errorTextStyle}></span>
                    </div>
                    <div>
                        <p className="text-white">Date of Birth</p>
                        <input 
                            type="date" 
                            className="w-full p-2 border rounded bg-gray-800 text-white" 
                        />
                        <span style={errorTextStyle}></span>
                    </div>
                </div>

                {/* Email */}
                <div className="mb-3">
                    <p className="text-white">Email</p>
                    <input 
                        type="email" 
                        className="w-full p-2 border rounded bg-gray-800 text-white" 
                    />
                    <span style={errorTextStyle}></span>
                </div>

                {/* Phone Number */}
                <div className="mb-3">
                    <p className="text-white">Phone Number</p>
                    <input 
                        type="tel" 
                        className="w-full p-2 border rounded bg-gray-800 text-white" 
                    />
                    <span style={errorTextStyle}></span>
                </div>

                {/* Password */}
                <div className="mb-5">
                    <p className="text-white">Password</p>
                    <input 
                        type="password" 
                        className="w-full p-2 border rounded bg-gray-800 text-white" 
                    />
                    <span style={errorTextStyle}></span>
                </div>

                {/* Button */}
                <div className="flex justify-end">
                    <button 
                        className="text-white bg-red-600 px-6 py-2 rounded-full hover:bg-red-700 transition"
                    >
                        SIGN UP
                    </button>
                </div>
            </div>
        </div>
    );
}
