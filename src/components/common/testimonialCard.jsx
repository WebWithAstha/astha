import React from "react";

const TestimonialCard = ({ name, role, feedback, image }) => {
  return (
    <div className="border border-zinc-200 rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition-all duration-200 max-w-md mx-auto flex flex-col gap-4">
      <p className="text-sm text-zinc-600 leading-relaxed">“{feedback}”</p>

      <div className="flex items-center gap-3 mt-2">
        {image && (
          <img
            src={image}
            alt={name}
            className="w-10 h-10 rounded-full object-cover"
          />
        )}
        <div>
          <p className="font-semibold text-[var(--primary)]">{name}</p>
          <p className="text-xs text-zinc-500">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
