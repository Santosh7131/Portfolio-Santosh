'use client';

import * as React from 'react';
import { motion } from 'motion/react';

interface TypingTextProps {
  text: string;
  duration?: number;
  className?: string;
}

function TypingText({ text, duration = 100, className }: TypingTextProps) {
  const [displayedText, setDisplayedText] = React.useState('');

  React.useEffect(() => {
    let currentIndex = 0;
    const timeoutIds: Array<ReturnType<typeof setTimeout>> = [];

    const type = () => {
      if (currentIndex <= text.length) {
        setDisplayedText(text.substring(0, currentIndex));
        currentIndex++;
        const id = setTimeout(type, duration);
        timeoutIds.push(id);
      }
    };

    type();

    return () => {
      timeoutIds.forEach(clearTimeout);
    };
  }, [text, duration]);

  return (
    <motion.span
      style={{
        color: 'white',
        fontSize: '2rem',
        display: 'block',
        textAlign: 'center',
        margin: '0 auto',
      }}
      className={className}
    >
      {displayedText}
    </motion.span>
  );
}

export { TypingText, type TypingTextProps };
