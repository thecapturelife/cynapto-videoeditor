'use client'
import React, { useState } from 'react';
import { MdDoneOutline } from "react-icons/md";
import { FaTools } from "react-icons/fa";
import Link from 'next/link';


const Editor: React.FC = () => {
    const [isHovered, setIsHovered] = useState(false);

  const containerStyle = {
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'center',
    flexDirection: 'row', 
  };
  const rowStyle = {
    border: '1px solid black',
    padding: '10px',
    marginBottom: '10px',
    minHeight: '4rem',
    position: 'relative',
  };

  const firstRowStyle = {
    ...rowStyle,
    flex: '1',
    width: '25%', 
  };

  const centerRowStyle = {
    ...rowStyle,
    fontSize: '20px',
    flex: '3', 
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: 'darkgrey',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s ease',
    position: 'absolute', 
    top: '10px', 
    right: '10px', 
    display: 'flex', 
    alignItems: 'center', 
  };

  const iconStyle = {
    marginRight: '5px', 
  };

  return (
    <div style={containerStyle}>
      <div style={firstRowStyle}>
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
      
      <div style={centerRowStyle}>
        <div style={{position: 'relative', width: '100%'}}>
          <video controls width="auto" height="200" style={{width:"40rem"}}>
            <source src="WhatsApp.mp4" type="video/mp4" />
          </video>
          <Link href='/done'>
          <button
            style={buttonStyle}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#333';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'black';
            }}
          >
            <span style={iconStyle}><MdDoneOutline /></span> Done
          </button>
          </Link>
        </div>
        
      </div>
    </div>
  );
};

export default Editor;
