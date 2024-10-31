// DiwaliBanner.js
import React from 'react';

const DiwaliBanner = () => {
  const bannerStyle = {
    backgroundColor: 'beige', 
    color: '#ff5722',           
    textAlign: 'center',
    padding: '10px 0',
    fontWeight: 'bold',
    fontSize: '1.2em',
    boxShadow: '0px 2px 5px rgba(0,0,0,0.2)',
    margin: '-14px',
  };

  return (
    <div style={bannerStyle}>
      🎉 Happy Diwali! Wishing you joy, prosperity, and happiness! 🎉
    </div>
  );
};

export default DiwaliBanner;
