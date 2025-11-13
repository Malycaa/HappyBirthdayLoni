import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { playAudio } from '../audio'; // import fungsi play dari audio.js

function Home() {
  const [visibleCount, setVisibleCount] = useState(1);
  const navigate = useNavigate();
  const sentences = [
    "Hi Ilo <3",
    "I have something to show you:)"
  ];

  const handleClick = () => {
    if (visibleCount < sentences.length) {
      setVisibleCount(visibleCount + 1);
    } else {
      // saat pindah ke /pictures, putar lagunya dulu
      playAudio();
      navigate('/pictures');
    }
  };

  return (
    <div
      className="flex flex-col min-h-screen cursor-pointer w-full items-center justify-center overflow-clip"
      onClick={handleClick}
    >
      <div className="w-[90%] max-w-[400px] px-8">
        {sentences.slice(0, visibleCount).map((sentence, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="text-4xl font-bold text-customBlue drop-shadow-lg"
          >
            {sentence}
          </motion.p>
        ))}
      </div>
    </div>
  );
}

export default Home;
