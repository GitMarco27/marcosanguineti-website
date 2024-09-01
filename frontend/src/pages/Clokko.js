import React, { useState, useEffect } from 'react';

// Use relative paths to media in the public directory
const casioWatchSrc = '/casio_watch.png'; // Path to image in public directory
const alarmSoundSrc = '/clokko_1s.mp3'; // Path to sound in public directory

const Clokko = () => {
  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState(new Date());
  const [containerDimensions, setContainerDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (!isActive) return;

    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, [isActive]);

  useEffect(() => {
    if (!isActive) return;

    const currentFormattedTime = formatTime(time);
    // Assuming alarmTime was removed, you might want to set this based on some condition if needed
    const alarmTime = "14:01:00"; // Example fixed alarm time
    if (currentFormattedTime === alarmTime) {
        playAlarm(time.getHours());
    }
  }, [time, isActive]); // Removed alarmTime dependency

  useEffect(() => {
    const handleResize = () => {
      setContainerDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const formatTime = (time) => {
    const hours = String(time.getHours()).padStart(2, '0');
    const minutes = String(time.getMinutes()).padStart(2, '0');
    const seconds = String(time.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  const playAlarm = async (repeatCount) => {
    for (let i = 0; i < repeatCount; i++) {
      const audio = new Audio(alarmSoundSrc);
      audio.play();

      await new Promise(resolve => {
        audio.onended = resolve;
      });
    }
  };

  const containerStyle = {
    position: 'relative',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    "margin-top": "25px"
  };

  const imageStyle = {
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'contain'
  };

  const clockStyle = {
    position: 'absolute',
    top: '48%',
    left: '49.5%',
    transform: 'translate(-50%, -50%)',
    fontFamily: 'Digital-7, sans-serif', // You might want to use a digital-style font
    fontSize: `${Math.min(containerDimensions.width, containerDimensions.height) * 0.06}px`, // Adjust size based on container
    color: 'gray' // Adjust color as needed
  };

  return (
    <div style={containerStyle}>
      {!isActive ? (
        <button onClick={() => setIsActive(true)}>🤗 Activate App 🤗</button>
      ) : (
        <>
          <img src={casioWatchSrc} alt="Casio Watch" style={imageStyle} />
          <div style={clockStyle}>{formatTime(time)}</div>
        </>
      )}
    </div>
  );
};

export default Clokko;
