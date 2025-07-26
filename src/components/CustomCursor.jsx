import React, { useEffect, useRef, useState } from 'react';
import '../style.css';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(pointer: coarse)');
    setIsTouchDevice(mq.matches);

    const handler = e => setIsTouchDevice(e.matches);
    mq.addEventListener('change', handler);

    const cursor = cursorRef.current;
    if (!cursor || isTouchDevice) return;

    const handleMove = e => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    const handleDown = () => cursor.classList.add('click');
    const handleUp = () => cursor.classList.remove('click');

    const handleLoadStart = () => setLoading(true);
    const handleLoadEnd = () => setLoading(false);

    const handleHover = e => {
      const interactive = e.target.closest(
        'a, button, [role="button"], .social-button, .dropdown-label, .profile-pic, .resume-pic-overlay'
      );
      cursor.classList.toggle('hover', !!interactive);

      const textField = e.target.closest(
        'input[type="text"], input[type="email"], textarea, .plain-text, .subtitle, .section-title, .resume-list li, p'
      );
      cursor.classList.toggle('text-hover', !!textField && !interactive);
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
      mq.removeEventListener('change', handler);
    };
  }, [isTouchDevice]);

  if (isTouchDevice) return null;

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor${loading ? ' loading' : ''}`}
    />
  );
}