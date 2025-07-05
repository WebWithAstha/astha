import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const BackHeader = ({ title = "Back" }) => {
  const navigate = useNavigate();

  return (
    <div className="w-full flex items-center gap-2 text-[var(--primary)] mb-6">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-1 hover:underline text-sm font-medium"
      >
        <ArrowLeft size={18} />
        <span>{title}</span>
      </button>
    </div>
  );
};

export default BackHeader;
