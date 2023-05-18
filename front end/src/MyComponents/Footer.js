import React from 'react';

const Footer = () => {
  return (
    <div className='wrapper' style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div className='footer' style={{ backgroundColor: 'black', color: '#fff', padding: '10px', textAlign: 'center', width: '100%', marginTop: 'auto' }}>
        <p className="text-center my-2">
          Course-App-React &copy; {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
};

export default Footer;
