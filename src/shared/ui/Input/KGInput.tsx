import React, { InputHTMLAttributes } from 'react';

interface KGInputProps extends InputHTMLAttributes<HTMLInputElement> {
  value?: string | number | undefined;
}

const KGInput: React.FC<KGInputProps> = (props) => {
  return (
    <input
      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
      {...props}
    />
  );
};

export default KGInput;
