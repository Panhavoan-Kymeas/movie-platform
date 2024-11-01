import React from "react";
import '../globals.css'
import Image from "next/image";

export default function Login() {

    const loginContainer = { borderTopRightRadius: '15px', 
                            borderBottomRightRadius: '15px',
                            opacity: 0.8,
                            backgroundColor: '#1D1B1B'
                        };
    const loginImage = { borderTopLeftRadius: '15px' ,
                         borderBottomLeftRadius: '15px',
                        }

    return (
        <div className="flex items-center justify-center min-h-screen" style={{
            backgroundImage: "url('/login_background.jpg')", // Use the path from the public folder
            backgroundSize: 'cover', // Cover the entire area
            backgroundPosition: 'center', // Center the image
            height: '100vh'
        }}>
            <div className="relative w-[241px] h-[600px] overflow-hidden" style={loginImage}>
                <Image 
                    src='/login_image_container.jpg'
                    alt="water tower image"
                    width={241}
                    height={600}
                    style={{ objectFit: 'cover' }}
                />
            </div>
            <div className="w-[603px] h-[600px] p-8" style={loginContainer}>
                <h2 className="text-2xl font-bold mb-6 text-center text-white">Welcome, CINEMAers!</h2>
                <p>Let's grab some popcorn. shall we? Don't have an account?  register one.</p>
            </div>
        </div>
    );
}
