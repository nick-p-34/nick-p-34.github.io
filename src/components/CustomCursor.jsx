import React, { useEffect, useRef, useState } from 'react';
import '../style.css';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;

    const handleMove = e => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    const handleDown = () => cursor.classList.add('click');
    const handleUp = () => cursor.classList.remove('click');

    const handleLoadStart = () => setLoading(true);
    const handleLoadEnd = () => setLoading(false);

    const handleHover = e => {
      const interactive = e.target.closest('a, button, [role="button"], .social-button, .dropdown-label, .profile-pic, .resume-pic-overlay');
       cursor.classList.toggle('hover', !!interactive);

       const textInput = e.target.closest('input[type="text"], textarea, p, span, h1, h2, h3, h4, h5, h6, li');
       const isPlainText = textInput && !interactive;
       cursor.classList.toggle('text-hover', !!isPlainText);
    };

    document.addEventListener('mousemove', handleMove);
    document.addEventListener('mousedown', handleDown);
    document.addEventListener('mouseup', handleUp);
    document.addEventListener('mouseover', handleHover);
    document.addEventListener('mouseout', handleHover);
    window.addEventListener('beforeunload', handleLoadStart);
    window.addEventListener('load', handleLoadEnd);

    return () => {
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mousedown', handleDown);
      document.removeEventListener('mouseup', handleUp);
      document.removeEventListener('mouseover', handleHover);
      document.removeEventListener('mouseout', handleHover);
      window.removeEventListener('beforeunload', handleLoadStart);
      window.removeEventListener('load', handleLoadEnd);
    };
  }, []);

  return <div ref={cursorRef} className={`custom-cursor${loading ? ' loading' : ''}`} />;
}