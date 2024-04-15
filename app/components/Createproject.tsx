'use client'
import React from 'react';
import { FiScissors } from 'react-icons/fi';
import { BsCameraVideo } from "react-icons/bs";
import { MdLiveTv } from "react-icons/md";
import { FcAdvertising } from "react-icons/fc";
import Link from 'next/link';
const CreateProject: React.FC = () => {

  return (
    <div style={{ display: 'flex', marginTop: '5rem' }}>

      <Link  href="/editor" >
       <button style={{ display: 'flex', alignItems: 'center', padding: '10px 20px', backgroundColor: 'transparent', color: 'black', border: '1px solid black', borderRadius: '5px', cursor: 'pointer', marginLeft: '3rem', transition: 'background-color 0.3s ease' }} className="create-project-button" onMouseEnter={(e) => { e.target.style.backgroundColor = 'black'; e.target.style.color = 'white'; }} onMouseLeave={(e) => { e.target.style.backgroundColor = 'transparent'; e.target.style.color = 'black'; }}>
        <div style={{ backgroundColor: 'white', padding: '8px', borderRadius: '50%', marginRight: '8px' }}>
          <FiScissors style={{ color: 'black', fontSize: '20px' }} />
        </div>
        <span>Create Project</span>
        </button>
      </Link>
      <button style={{ display: 'flex', alignItems: 'center', padding: '10px 20px', backgroundColor: 'transparent', color: 'black', border: '1px solid black', borderRadius: '5px', cursor: 'pointer', marginLeft: '3rem', transition: 'background-color 0.3s ease' }} className="create-project-button" onMouseEnter={(e) => { e.target.style.backgroundColor = 'black'; e.target.style.color = 'white'; }} onMouseLeave={(e) => { e.target.style.backgroundColor = 'transparent'; e.target.style.color = 'black'; }}>
        <div style={{ backgroundColor: 'white', padding: '8px', borderRadius: '50%', marginRight: '8px' }}>
          <BsCameraVideo style={{ color: 'black', fontSize: '20px' }} />
        </div>
        <span>Record Video</span>
      </button>
      <button style={{ display: 'flex', alignItems: 'center', padding: '10px 20px', backgroundColor: 'transparent', color: 'black', border: '1px solid black', borderRadius: '5px', cursor: 'pointer', marginLeft: '3rem', transition: 'background-color 0.3s ease' }} className="create-project-button" onMouseEnter={(e) => { e.target.style.backgroundColor = 'black'; e.target.style.color = 'white'; }} onMouseLeave={(e) => { e.target.style.backgroundColor = 'transparent'; e.target.style.color = 'black'; }}>
        <div style={{ backgroundColor: 'white', padding: '8px', borderRadius: '50%', marginRight: '8px' }}>
          <MdLiveTv style={{ color: 'black', fontSize: '20px' }} />
        </div>
        <span>Go Live</span>
      </button>
      <button style={{ display: 'flex', alignItems: 'center', padding: '10px 20px', backgroundColor: 'transparent', color: 'black', border: '1px solid black', borderRadius: '5px', cursor: 'pointer', marginLeft: '3rem', transition: 'background-color 0.3s ease' }} className="create-project-button" onMouseEnter={(e) => { e.target.style.backgroundColor = 'black'; e.target.style.color = 'white'; }} onMouseLeave={(e) => { e.target.style.backgroundColor = 'transparent'; e.target.style.color = 'black'; }}>
        <div style={{ backgroundColor: 'white', padding: '8px', borderRadius: '50%', marginRight: '8px' }}>
          <FcAdvertising style={{ color: 'black', fontSize: '20px' }} />
        </div>
        <span>Record Podcast</span>
      </button>
    </div>
  );
};

export default CreateProject;
