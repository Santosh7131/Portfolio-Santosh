import * as React from 'react';

type Props = {
  texts: string[];
  className?: string;
  interval?: number;
};

export default function LocalMorphingText({ texts, className = '', interval = 2000 }: Props) {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % texts.length);
    }, interval);
    return () => clearInterval(id);
  }, [texts.length, interval]);

  return (
    <div className={className} style={{ height: '1.5em', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {texts.map((t, i) => (
        <span
          key={t + i}
          style={{
            transition: 'opacity 400ms, transform 400ms',
            opacity: i === index ? 1 : 0,
            transform: `translateY(${i === index ? 0 : 6}px)`,
            position: i === index ? 'relative' : 'absolute',
            whiteSpace: 'nowrap',
          }}
        >
          {t}
        </span>
      ))}
    </div>
  );
}
