import React from "react";

export default function SliderBarItem({ name, active, handleClick }) {
  return (
    <button
      className={`sidebar-item ${active ? "active" : ""}`}
      onClick={handleClick}
    >
      {name}
    </button>
  );
}
