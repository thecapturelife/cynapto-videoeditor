import React from 'react';

const Newvideo = () => {
  return (
    <div style={{ textAlign: 'center', background: '#f0f2f5', minHeight: '100vh', padding: '2rem 0' }}>
      <h1 style={{ fontWeight: 'bold', marginBottom: '2rem', color: '#333' }}>Upload your Video</h1>
      <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', background: '#fff', padding: '2rem', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
        <input type="file" accept="video/*" style={{ marginBottom: '1rem', border: '1px solid #ccc', padding: '0.5rem', borderRadius: '5px' }} />
        <button 
          type="submit"
          style={{
            padding: '10px 20px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
            transition: 'background-color 0.3s ease',
          }}
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export default Newvideo;
