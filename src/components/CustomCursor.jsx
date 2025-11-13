import React, { useEffect, useRef, useState } from 'react';
import '../style.css';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(pointer: coarse)');
    setIsTouchDevice(mq.matches);

    const mqHandler = (e) => setIsTouchDevice(e.matches);

    if (typeof mq.addEventListener === 'function') {
      mq.addEventListener('change', mqHandler);
    } else if (typeof mq.addListener === 'function') {
      mq.addListener(mqHandler);
    }

    const cursor = cursorRef.current;

    if (!cursor || mq.matches) {
      document.documentElement.classList.remove('custom-cursor-enabled');
      return () => {
        if (typeof mq.removeEventListener === 'function') {
          mq.removeEventListener('change', mqHandler);
        } else if (typeof mq.removeListener === 'function') {
          mq.removeListener(mqHandler);
        }
      };
    }

    document.documentElement.classList.add('custom-cursor-enabled');

    let rafId = null;
    let x = 0, y = 0;

    const handleMove = (e) => {
      x = e.clientX;
      y = e.clientY;

      if (!rafId) {
        rafId = requestAnimationFrame(() => {
          cursor.style.setProperty('--cx', `${x}px`);
          cursor.style.setProperty('--cy', `${y}px`);
          rafId = null;
        });
      }
    };

    const handleDown = (e) => {
      cursor.classList.add('click');
      cursor.style.setProperty('--cx', `${x}px`);
      cursor.style.setProperty('--cy', `${y}px`);
    };

    const handleUp = (e) => {
      cursor.classList.remove('click');
      cursor.style.setProperty('--cx', `${x}px`);
      cursor.style.setProperty('--cy', `${y}px`);
    };

    const handleLoadStart = () => setLoading(true);
    const handleLoadEnd = () => setLoading(false);

    const handleHover = (e) => {
      const interactive = e.target.closest(
        'a, button, [role="button"], .social-button, .dropdown-label, .profile-pic, .resume-pic-overlay'
      );
      cursor.classList.toggle('hover', !!interactive);

      const textField = e.target.closest(
        'input[type="text"], input[type="email"], textarea, .plain-text, .subtitle, .section-title, .resume-list li, p'
      );
      cursor.classList.toggle('text-hover', !!textField && !interactive);
    };

    document.addEventListener('mousemove', handleMove, { passive: true });
    document.addEventListener('mousedown', handleDown);
    document.addEventListener('mouseup', handleUp);
    document.addEventListener('mouseover', handleHover);
    document.addEventListener('mouseout', handleHover);
    window.addEventListener('beforeunload', handleLoadStart);
    window.addEventListener('load', handleLoadEnd);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mousedown', handleDown);
      document.removeEventListener('mouseup', handleUp);
      document.removeEventListener('mouseover', handleHover);
      document.removeEventListener('mouseout', handleHover);
      window.removeEventListener('beforeunload', handleLoadStart);
      window.removeEventListener('load', handleLoadEnd);

      if (typeof mq.removeEventListener === 'function') {
        mq.removeEventListener('change', mqHandler);
      } else if (typeof mq.removeListener === 'function') {
        mq.removeListener(mqHandler);
      }

      document.documentElement.classList.remove('custom-cursor-enabled');
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor${loading ? ' loading' : ''}`}
    />
  );
}