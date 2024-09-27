import React from 'react';
import Navbar from './components/Navbar';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import homebg from './img/homebg.png';
import card1 from './img/card1.png';
import card2 from './img/card2.png';
import card3 from './img/card3.png';
import card4 from './img/card4.png';

const App = () => {
  return (
    <>
      <Navbar />

      <motion.div
        className="home h-screen bg-cover bg-center flex flex-col justify-center items-center text-center px-6 sm:px-10 lg:px-20"
        style={{ backgroundImage: `url(${homebg})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <motion.h1
          className="text-6xl sm:text-8xl font-semibold text-[#016BAF] mb-6"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
        >
          Lider Service
        </motion.h1>
        <motion.h3
          className="text-white bg-red-500 w-fit py-3 px-6 sm:px-12 text-3xl sm:text-5xl font-semibold rounded-xl mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          20 ildir
        </motion.h3>
        <motion.h1
          className="text-gray-800 text-3xl sm:text-5xl font-semibold"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          Xidmetinizdeyik
        </motion.h1>
      </motion.div>

      <motion.div
        className="info text-center bg-[#e7e7e9] py-16 sm:py-20 px-6 sm:px-10 lg:px-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <h1 className="text-4xl sm:text-6xl font-semibold mb-12">
          Bütün brendlərin məişət texnikasını təmir edirik!
        </h1>

        <motion.div className="cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div className="card bg-white rounded-lg shadow-md p-6" whileHover={{ scale: 1.05 }}>
            <h1 className="text-xl mb-4">Paltaryuyan</h1>
            <img src={card1} alt="Paltaryuyan" className="w-full h-48 object-cover" />
          </motion.div>

          <motion.div className="card bg-white rounded-lg shadow-md p-6" whileHover={{ scale: 1.05 }}>
            <h1 className="text-xl mb-4">Qabyuyan</h1>
            <img src={card2} alt="Qabyuyan" className="w-full h-48 object-cover" />
          </motion.div>

          <motion.div className="card bg-white rounded-lg shadow-md p-6" whileHover={{ scale: 1.05 }}>
            <h1 className="text-xl mb-4">Elektrik Sobasi</h1>
            <img src={card3} alt="Elektrik Sobasi" className="w-full h-48 object-cover" />
          </motion.div>

          <motion.div className="card bg-white rounded-lg shadow-md p-6" whileHover={{ scale: 1.05 }}>
            <h1 className="text-xl mb-4">Kondisioner</h1>
            <img src={card4} alt="Kondisioner" className="w-full h-48 object-cover" />
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="services-section bg-[#f1f1f3] py-16 sm:py-20 px-6 sm:px-10 lg:px-20 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      >
        <h2 className="text-4xl sm:text-5xl font-semibold mb-8">Xidmətlərimiz</h2>
        <p className="text-xl sm:text-2xl mb-12">
          Biz hər zaman müştərilərimiz üçün ən yaxşı xidməti təmin edirik.
        </p>
        <button className="bg-blue-500 py-3 px-8 text-xl sm:text-2xl font-semibold rounded-lg text-white hover:bg-blue-600 transition duration-300">
          Daha ətraflı
        </button>
      </motion.div>

      <motion.div
        className="cta-section text-center bg-[#016BAF] text-white py-12 px-6 sm:px-10 lg:px-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
      >
        <h2 className="text-4xl sm:text-5xl font-semibold mb-6">Xidmətlərimizdən faydalanın</h2>
        <p className="text-xl sm:text-2xl mb-8">Sizin rahatlığınız üçün hər zaman buradayıq.</p>
        <button className="bg-red-500 py-3 px-8 text-xl sm:text-2xl font-semibold rounded-lg hover:bg-red-600 transition duration-300">
          Əlaqə saxlayın
        </button>
      </motion.div>

      <motion.div
        className="contact-section bg-gray-100 py-16 sm:py-20 px-6 sm:px-10 lg:px-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.6 }}
      >
        <h2 className="text-4xl sm:text-5xl font-semibold mb-8 text-center">Əlaqə</h2>
        <div className="contact-info grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 text-center">
          <motion.div className="info-item" whileHover={{ scale: 1.1 }}>
            <FaPhoneAlt className="text-4xl text-blue-500 mb-4" />
            <p className="text-xl">+994 55 123 45 67</p>
          </motion.div>
          <motion.div className="info-item" whileHover={{ scale: 1.1 }}>
            <FaEnvelope className="text-4xl text-blue-500 mb-4" />
            <p className="text-xl">support@lider.com</p>
          </motion.div>
          <motion.div className="info-item" whileHover={{ scale: 1.1 }}>
            <FaMapMarkerAlt className="text-4xl text-blue-500 mb-4" />
            <p className="text-xl">Baku, Azerbaijan</p>
          </motion.div>
        </div>
      </motion.div>

      <motion.footer
        className="footer bg-[#2c2c2e] text-white py-10 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        <p className="text-lg">© 2024 Lider Service. Bütün hüquqlar qorunur.</p>
      </motion.footer>
    </>
  );
};

export default App;

