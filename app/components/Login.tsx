import React from "react";
import '../globals.css'
import Image from "next/image";
import Link from "next/link";
import PasswordBox from "./passwordBox";

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
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/login_assets/login_background.jpg')", // Use the path from the public folder
            backgroundSize: 'cover', // Cover the entire area
            backgroundPosition: 'center', // Center the image
            height: '100vh',
        }}>
            
            <div className="relative w-[241px] h-[600px] overflow-hidden" style={loginImage}>
                <Image 
                    src='/login_assets/login_image_container.jpg'
                    alt="water tower image"
                    width={241}
                    height={600}
                    style={{ objectFit: 'cover' }}
                />
            </div>
            <div className="w-[603px] h-[600px] p-8" style={loginContainer}>
                <h2 className="text-2xl font-bold mb-6 text-center text-white">Welcome, CINEMAers!</h2>
                {/* Don't forget to add proper link to register page */}
                <p>Let's grab some popcorn. shall we? Don't have an account?  <Link href="/" className="text-red-500 hover:underline">register one</Link></p>
                <div className="mt-10">
                    <input type="text" placeholder="Email / Phone Number" className="w-full p-2 mb-4 border rounded mb-5" style={{backgroundColor: '#2F2D2D'}} />
                    <PasswordBox placeholder="Password"/>
                    <div className="flex justify-between">
                        <div></div>
                        <Link href="/" className="hover:underline" style={{color: "#E79C11"}}>forgot password?</Link>
                    </div>
                    <div className="flex justify-center mt-3 mb-5">
                        <button className="p-2 bg-red-600 text-white rounded" style={{height: '42px', width: '119px', borderRadius: "45px"}}>LOGIN</button>
                </div>
                    <div className="flex items-center justify-center">
                        <hr className="flex-grow border-t border-gray-500 w-20" />
                        <span className="mx-4 text-white">or login with</span>
                        <hr className="flex-grow border-t border-gray-500 w-20" />
                    </div>
                </div>
                <div className="mt-10">
                    <button className="w-full flex items-center relative justify-center rounded hover:underline" style={{ backgroundColor: "#2F2D2D", padding: '10px', borderRadius: '20px' }}>
                    {/* Icon positioned on the left */}
                        <div className="absolute left-5">
                            <Image src="/login_assets/google_icon.svg" alt="Google icon" width={20} height={20} />
                        </div>
                        {/* Text centered */}
                        <span className="flex-grow text-center">Continue with Google</span>
                    </button>
                    <button className="w-full mt-5 flex items-center relative justify-center rounded hover:underline" style={{ backgroundColor: "#2F2D2D", padding: '10px', borderRadius: '20px' }}>
                    {/* Icon positioned on the left */}
                        <div className="absolute left-5">
                            <Image src="/login_assets/facebook_icon.svg" alt="Facebook icon" width={20} height={20} />
                        </div>
                        {/* Text centered */}
                    <span className="flex-grow text-center">Continue with Facebook</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
