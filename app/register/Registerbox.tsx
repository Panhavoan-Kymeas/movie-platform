import React from "react";
import '../globals.css'
import PasswordBox from "../login/passwordBox";

export default function Registerbox() {
    const registerContainer = {
        opacity: 0.8,
        backgroundColor: '#1D1B1B',
        borderRadius: "15px",
    };
    const spanStyle = { 
        minHeight: '25px',
        display: 'block',
        padding: '0px',
        fontSize: '12px'
    }

    return (
        <div className="flex items-center justify-center min-h-screen" style={{
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/login_assets/login_background.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
        }}>
            <div className="w-[589px] h-[660px] p-8" style={registerContainer}>
                <h1 className="text-2xl font-bold mb-3">Let's get you READY!</h1>
                <p>fill up the information below to get started.</p>

                <div className="mb-2">
                    <p>Name</p>
                    <input type="text" style={{ width:513, backgroundColor: '#2F2D2D' }} className="w-full p-2 border rounded" />
                    <span style={spanStyle}></span>
                </div>

                <div className="flex justify-between mb-2">
                    <div>
                        <p>Username</p>
                        <input type="text" className="w-full p-2 border rounded" style={{ backgroundColor: '#2F2D2D' }} />
                        <span style={spanStyle}></span>
                    </div>
                    <div>
                        <p>Date of birth</p>
                        <input type="date" style={{ backgroundColor: '#2F2D2D' }} className="w-full p-2 border rounded" />
                        <span style={spanStyle}></span>
                    </div>
                </div>

                <div className="mb-2">
                    <p>Email</p>
                    <input type="text" style={{ width:513, backgroundColor: '#2F2D2D', display: 'block' }} className="w-full p-2 border rounded" />
                    <span style={spanStyle}></span>
                </div>

                <div className="mb-2">
                    <p>Phone Number</p>
                    <input type="text" style={{ width:513, backgroundColor: '#2F2D2D', display: 'block' }} className="w-full p-2 border rounded" />
                    <span style={spanStyle}></span>
                </div>

                <div className="mb-8">
                    <p>Password</p>
                    <input type="text" style={{ width:513, backgroundColor: '#2F2D2D', display: 'block' }} className="w-full p-2 border rounded" />
                    <span style={spanStyle}></span>
                </div>

                {/* Button container */}
                <div className="flex justify-end">
                    <button style={{
                        backgroundColor: "#E61414",
                        width: "120px",
                        height: "42px",
                        borderRadius: "25px"
                    }}>SIGN UP</button>
                </div>
            </div>
        </div>
    )
}
