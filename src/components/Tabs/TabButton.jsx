import React from "react";

function TabButton({ isActive, title, onClick }) {
  return (
    <button
      className={`px-5 py-2 rounded text-sm font-semibold  ${
        isActive
          ? "bg-blue-800 text-white hover:bg-blue-600"
          : "hover:bg-gray-200 "
      }`}
      onClick={onClick}
    >
      {title}
    </button>
  );
}

export default TabButton;
