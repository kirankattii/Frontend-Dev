import React from "react";

const ClipboardApi = () => {
  const handleClipboard = () => {
    navigator.clipboard.writeText("Copied from the React");
  };
  return (
    <div>
      <button
        className="rounded-xl p-2 text-xl bg-gray-300 border border-blue-300"
        onClick={handleClipboard}
      >
        Copy
      </button>
    </div>
  );
};

export default ClipboardApi;
