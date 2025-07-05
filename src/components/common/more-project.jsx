import { useNavigate } from "react-router-dom";

const truncate = (text, limit = 30) =>
  text.length > limit ? text.slice(0, limit) + "..." : text;

const MoreProjects = ({ others }) => {
  const navigate = useNavigate();

  const handleClick = (card) => {
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
  }

  return (
    <div className="pt-10 border-t border-zinc-300 mt-10 flex flex-col gap-6">
      <h2 className="text-lg font-bold text-zinc-800">Other Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
        {others.map((proj, i) => (
          <div
            key={i}
            onClick={() => handleClick(proj)}
            className="border border-zinc-200 w-full p-4 rounded-lg hover:shadow-md transition cursor-pointer"
          >
            <h3 className="font-semibold text-lg break-words">
              {truncate(proj.title)}
            </h3>
            <img
              className="h-40 w-full object-cover mt-3 rounded-md"
              src={proj.img}
              alt={proj.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoreProjects;
