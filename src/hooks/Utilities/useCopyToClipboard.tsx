const useCopyToClipboard = () => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return copyToClipboard;
};

export default useCopyToClipboard;
