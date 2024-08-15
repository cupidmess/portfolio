// src/pages/LandingPage.js
import React, { useEffect, useState } from 'react';
import './index2.css'; // Import the CSS for transitions
import PartA from './PartA';

function LandingPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger the fade-in effect after component mounts
    setIsVisible(true);
  }, []);

  return (
    <div className={`landing-page ${isVisible ? 'fade-in' : ''}`}>
     <PartA/>
    </div>
  );
}

export default LandingPage;
