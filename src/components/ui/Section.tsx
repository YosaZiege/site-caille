import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  bgColor?: string;
}

const Section = ({
  children,
  className = '',
  id,
  bgColor = 'bg-transparent',
}: SectionProps) => {
  return (
    <section id={id} className={`py-16 md:py-24 ${bgColor} ${className}`}>
      {children}
    </section>
  );
};

export default Section;
