'use client';

import React, { useState } from "react";

const PasswordBox: React.FC<{ placeholder: string }> = ({ placeholder }) => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div className="relative">
            <input
                type={passwordVisible ? "text" : "password"}
                placeholder={placeholder}
                className="w-full p-2 border rounded"
                style={{ backgroundColor: '#2F2D2D' }}
            />
            <button
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                aria-label="Toggle password visibility"
            >
                {passwordVisible ? (
                    <img src="/login_assets/view.svg" alt="View password" width={20} height={20} />
                ) : (
                    <img src="/login_assets/hidden.svg" alt="Hide password" width={20} height={20} />
                )}
            </button>
        </div>
    );
}

export default PasswordBox;
