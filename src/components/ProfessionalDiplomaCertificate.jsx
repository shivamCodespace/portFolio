import React, { useEffect } from 'react';
import styled from 'styled-components';
import backgroundImage from '../assets/background2.jpg';

const CertificateContainer = styled.div`
  position: relative;
  width: 800px;
  height: 600px;
  background: url(${backgroundImage}) no-repeat center center/cover;
  overflow: hidden;
  border: 10px solid #fff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  margin: 20px auto;
`;

const AnimatedLine = styled.div`
  position: absolute;
  background: #ff0000;
  animation: moveLine 4s infinite ease-in-out;
  @keyframes moveLine {
    0% { transform: translateX(-100%); }
    50% { transform: translateX(100%); }
    100% { transform: translateX(-100%); }
  }
`;

const ShiningStar = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  background: #ff4444;
  border-radius: 50%;
  animation: shine 2s infinite alternate;
  @keyframes shine {
    0% { box-shadow: 0 0 5px #ff4444; }
    100% { box-shadow: 0 0 20px #ff4444, 0 0 30px #ff6666; }
  }
`;

const TextContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  text-align: center;
  font-family: 'Arial', sans-serif;
  text-shadow: 2px 2px 4px #000;
  animation: fadeIn 3s ease-in-out;
  @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
`;

const ProfessionalDiplomaCertificate = () => {
  useEffect(() => {
    const stars = document.querySelectorAll('.star');
    stars.forEach((star, index) => {
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
    });
  }, []);

  return (
    <CertificateContainer>
      <AnimatedLine style={{ top: '10%', left: '0', width: '2px', height: '80%' }} />
      <AnimatedLine style={{ top: '20%', left: '0', width: '100%', height: '2px' }} />
      <ShiningStar className="star" style={{ animationDelay: '0s' }} />
      <ShiningStar className="star" style={{ animationDelay: '0.5s' }} />
      <ShiningStar className="star" style={{ animationDelay: '1s' }} />
      <TextContent>
        <h1>CERTIFICATE OF EXCELLENCE</h1>
        <p>This certificate is awarded to</p>
        <h2>Shivam Shukla</h2>
        <p>For successfully completing the</p>
        <h3>PROFESSIONAL DIPLOMA IN COMPUTER APPLICATION & OFFICE MANAGEMENT</h3>
        <p>at Janvi Infotech, Shuklaganj, Unnao</p>
        <p>Date: 11-Dec-23</p>
      </TextContent>
    </CertificateContainer>
  );
};

export default ProfessionalDiplomaCertificate;