'use client'
import React, { useState } from 'react';
import { MdDoneOutline } from "react-icons/md";
import { FaTools } from "react-icons/fa";
import Link from 'next/link';

const Editor: React.FC = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
        const target = e.target as HTMLButtonElement;
        target.style.backgroundColor = '#333';
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
        const target = e.target as HTMLButtonElement;
        target.style.backgroundColor = 'black';
    };

    return (
        <div>
            <div>
                <h1 style={{marginTop :"1rem"}}><b>Project Settings</b></h1>
                <Link href="/protools">
                    <button 
                        style={{ 
                            padding: '10px 20px',
                            backgroundColor: isHovered ? '#7C3AED' : 'darkgrey',
                            color: 'white',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            fontSize: '16px',
                            position: 'absolute', 
                            top: '10px', 
                            right: '10px', 
                            display: 'flex', 
                            alignItems: 'center', 
                            marginTop: '5rem',
                            transition: 'background-color 0.3s ease',
                        }}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        Pro Tools
                        <FaTools style={{ marginLeft: '0.5rem' }} />
                    </button>
                </Link>
            </div>
            <div>
                <div style={{ position: 'relative', marginRight: '4rem' }}>
                    <video controls width="auto" height="200" style={{width:"40rem"}}>
                        <source src="WhatsApp.mp4" type="video/mp4" />
                    </video>
                    <Link href='/done'>
                        <button
                            style={{
                                padding: '10px 20px',
                                backgroundColor: isHovered ? '#333' : 'black',
                                color: 'white',
                                border: 'none',
                                borderRadius: '5px',
                                cursor: 'pointer',
                                fontSize: '16px',
                                transition: 'background-color 0.3s ease',
                                position: 'absolute',
                                top: '10px',
                                right: '40px',
                            }}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <span style={{ marginRight: '5px' }}><MdDoneOutline /></span> Done
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Editor;
