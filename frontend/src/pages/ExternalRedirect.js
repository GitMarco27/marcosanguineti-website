import { useEffect } from 'react';

const LinkedinRedirect = () => {
  useEffect(() => {
    window.location.href = 'https://www.linkedin.com/in/marco-sanguineti/';
  }, []);

  return null; // This component doesn’t render anything
};

export default LinkedinRedirect;
