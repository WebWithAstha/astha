import React from "react";

const DetailSkeleton = () => {
  return (
    <div className="animate-pulse p-6 lg:px-40 md:px-16 w-full flex flex-col items-center gap-6 pt-16 md:pt-20 lg:pt-24">
      {/* Back Button Placeholder */}
      <div className="w-full mb-6">
        <div className="w-32 h-4 bg-zinc-200 rounded" />
      </div>

      {/* Title */}
      <div className="h-6 w-3/4 bg-zinc-200 rounded" />
      {/* Buttons */}
      <div className="flex gap-4">
        <div className="h-8 w-8 bg-zinc-200 rounded-full" />
        <div className="h-8 w-8 bg-zinc-200 rounded-full" />
      </div>
      {/* Status */}
      <div className="h-4 w-24 bg-zinc-200 rounded" />

      {/* Image Placeholder */}
      <div className="w-full h-[60vh] bg-zinc-200 rounded" />

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-5 w-16 bg-zinc-200 rounded" />
        ))}
      </div>

      {/* Bullets */}
      <div className="space-y-2 w-full max-w-3xl">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="h-4 w-full bg-zinc-200 rounded" />
        ))}
      </div>
    </div>
  );
};

export default DetailSkeleton;
