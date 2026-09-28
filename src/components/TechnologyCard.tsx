import type { Technology } from "../types/Technology";

type TechnologyCardProps = {
  technology: Technology;
  onAddToStack: (technology: Technology) => void;
  isAdded: boolean;
};

const TechnologyCard = ({
  technology,
  onAddToStack,
  isAdded,
}: TechnologyCardProps) => {
  return (
    <div className="group border border-gray-200 rounded-2xl p-6 bg-white shadow-sm hover:shadow-lg transition duration-300">

      {/* Top */}
      <div className="flex items-start justify-between">

        <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center">
          <img
            src={technology.icon}
            alt={technology.name}
            className="w-8 h-8 object-contain"
          />
        </div>

        <span className="px-3 py-1 text-xs font-medium rounded-full bg-pink-50 text-pink-500">
          {technology.badge}
        </span>

      </div>

      {/* Technology Name */}
      <h2 className="mt-5 text-xl font-bold text-gray-900">
        {technology.name}
      </h2>

      {/* Description */}
      <p className="mt-2 text-sm text-gray-500 leading-6 min-h-[48px]">
        {technology.description}
      </p>

      {/* Information */}
      <div className="mt-5 flex flex-wrap items-center gap-2">

        <span className="px-2.5 py-1 bg-gray-100 rounded-md text-xs text-gray-600">
          {technology.category}
        </span>

        <span className="px-2.5 py-1 bg-gray-100 rounded-md text-xs text-gray-600">
          {technology.difficulty}
        </span>

        <span className="text-xs text-gray-600 ml-auto">
          ⭐ {technology.rating}
        </span>

      </div>

      {/* Button */}
      <button
        onClick={() => onAddToStack(technology)}
        disabled={isAdded}
        className={`mt-6 w-full py-2.5 rounded-xl text-sm font-medium transition ${
          isAdded
            ? "bg-gray-200 text-gray-500 cursor-not-allowed"
            : "bg-gray-900 text-white hover:bg-gray-800"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>

    </div>
  );
};

export default TechnologyCard;