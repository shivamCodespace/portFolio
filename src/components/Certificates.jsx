import React from 'react';
import AI from '../assets/AI.jpg';
import ML from '../assets/Ml.jpg';
import Lycos from '../assets/Lycos.jpg';
import Background from '../assets/background2.jpg';

const Certificates = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className="container mx-auto py-10 px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">Certificates</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white bg-opacity-80 p-4 rounded-lg shadow-lg">
            <img src={AI} alt="AI Certificate" className="w-full h-64 object-cover rounded" />
          </div>
          <div className="bg-white bg-opacity-80 p-4 rounded-lg shadow-lg">
            <img src={ML} alt="ML Certificate" className="w-full h-64 object-cover rounded" />
          </div>
          <div className="bg-white bg-opacity-80 p-4 rounded-lg shadow-lg">
            <img src={Lycos} alt="Lycos Certificate" className="w-full h-64 object-cover rounded" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;