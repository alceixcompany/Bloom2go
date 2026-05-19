'use client'

import React from 'react';

type LocationTriggerButtonProps = {
  children: React.ReactNode;
  className?: string;
  onOpen?: () => void;
};

const LocationTriggerButton = ({ children, className, onOpen }: LocationTriggerButtonProps) => {
  const handleClick = () => {
    window.dispatchEvent(new Event('open-location-modal'));
    onOpen?.();
  };

  return (
    <button type="button" onClick={handleClick} className={className}>
      {children}
    </button>
  );
};

export default LocationTriggerButton;
