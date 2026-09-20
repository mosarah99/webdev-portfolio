import React from 'react';

const useCopyToClipboard = () => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return copyToClipboard;
};

export default useCopyToClipboard;
