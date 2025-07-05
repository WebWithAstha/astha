import React from "react";
import Button from "./button";
import Tag from "./tag";
import { useNavigate } from "react-router-dom";

const ProjectCard = ({ card, index }) => {
  const navigate = useNavigate(); // initialize router navigation

  const handleClick = () => {
    if (card?.path) {
      // navigate to the detail page
      navigate(card.path);
       window.scrollTo({
      top: 0,
      behavior: "auto", // or "auto"
    })
    } else if (card?.figma) {
      window.open(card.figma, "_blank"); // open Figma in new tab
    }
  };
  return (
    <div
      className={`${
        index % 2 != 0 ? "lg:flex-row-reverse" : ""
      } flex lg:flex-row flex-col-reverse justify-between group border-b lg:border-0 pb-16 border-zinc-300 lg:pb-0  lg:gap-20 md:gap-10 gap-6 items-center`}
    >
      <div className="flex flex-col gap-2 grow">
        <h1 className="text-7xl opacity-40 mb-2 font-helvetica-light">
          {card.step}
        </h1>
        <h1 className="font-semibold font-sans md:text-2xl lg:text-md mb-2 uppercase">
          {card.niche || card.title}
        </h1>
        <p className="lg:text-sm md:text-xl opacity-70">{card.desc}</p>
        {card?.stack && (
          <div className="flex gap-2 md:-mt-2 mb-2 flex-wrap">
            {card.stack
              .split(",") // split by comma to handle stacks properly
              .map((tag) => tag.trim()) // remove extra spaces
              .slice(0, 4) // show only first 5
              .map((tag, i) => (
                <Tag key={i} tag={tag} />
              ))}

            {card.stack.split(",").length > 4 && (
              <span className="text-xs text-gray-500 mt-1">
                +{card.stack.split(",").length - 4} more
              </span>
            )}
          </div>
        )}

        <Button variant="outline" onClick={handleClick}>
          {card.niche ? "View in Figma" : "View Project"}
        </Button>
      </div>
      <div className="bg-zinc-200/[0] border border-zinc-200  lg:w-[55%]  shrink-0 min-w-40 flex items-center overflow-hidden justify-center">
        <img
          className="w-full object-contain group-hover:scale-110 transition-all duration-1000"
          src={card.img}
          alt=""
        />
      </div>
    </div>
  );
};

export default ProjectCard;
