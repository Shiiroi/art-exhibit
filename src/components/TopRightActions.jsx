import React from "react";
import { FiRefreshCw, FiHelpCircle } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const TopRightActions = ({ visible = false }) => {
  const navigate = useNavigate();
  if (!visible) return null;

  return (
    <div className="fixed top-6 right-6 flex gap-4 z-50">
      {/* Retry Button */}
      <button
        onClick={() => {
          window.scrollTo(0, 0);
          window.location.reload();
        }}
        className="bg-yellow-400 hover:bg-yellow-300 transition-colors shadow-[0_0_12px_2px_rgba(250,204,21,0.7)] rounded-full w-12 h-12 flex items-center justify-center"
        aria-label="Retry"
      >
        <FiRefreshCw size={28} color="#111" />
      </button>
      {/* Help Button */}
      <button
        onClick={() => navigate("/references")}
        className="bg-yellow-400 hover:bg-yellow-300 transition-colors shadow-[0_0_12px_2px_rgba(250,204,21,0.7)] rounded-full w-12 h-12 flex items-center justify-center"
        aria-label="Help"
      >
        <FiHelpCircle size={28} color="#111" />
      </button>
    </div>
  );
};

export default TopRightActions;