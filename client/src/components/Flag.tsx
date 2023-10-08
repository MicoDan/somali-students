import React from 'react';
import somali from '/src/somali.png';

export const Flag: React.FC = () => {
  return (
    <img
      className='h-6 w-6'
      src={somali}
      alt="Somali flag"
    />
  );
};
