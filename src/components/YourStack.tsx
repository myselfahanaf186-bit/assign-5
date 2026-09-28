import type { Technology } from "../types/Technology";

type YourStackProps = {
  stack: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
};

const YourStack = ({
  stack,
  onRemove,
  onRemoveAll,
}: YourStackProps) => {
  return (
    <div className="border border-gray-200 rounded-2xl bg-white p-6 shadow-sm sticky top-24">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-900">
            Your Stack
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            {stack.length} Technologies Selected
          </p>
        </div>

        {/* Remove All */}
        {stack.length > 0 && (
          <button
            onClick={onRemoveAll}
            className="text-xs text-red-500 hover:text-red-600"
          >
            Remove All
          </button>
        )}
      </div>

      {/* Empty State */}
      {stack.length === 0 ? (
        <div className="py-10 text-center">

          <div className="text-4xl mb-4">
            🧩
          </div>

          <h3 className="font-semibold text-gray-700">
            No technologies selected
          </h3>

          <p className="text-sm text-gray-400 mt-2 leading-6">
            Add technologies from the list
            <br />
            to build your stack.
          </p>

        </div>
      ) : (

        /* Selected Technologies */
        <div className="mt-6 space-y-3">

          {stack.map((technology) => (
            <div
              key={technology.id}
              className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100"
            >

              {/* Icon */}
              <div className="w-9 h-9 rounded-lg bg-white flex items-center justify-center">
                <img
                  src={technology.icon}
                  alt={technology.name}
                  className="w-6 h-6 object-contain"
                />
              </div>

              {/* Name */}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-800 truncate">
                  {technology.name}
                </p>

                <p className="text-xs text-gray-400">
                  {technology.category}
                </p>
              </div>

              {/* Remove */}
              <button
                onClick={() => onRemove(technology.id)}
                className="text-xs text-red-500 hover:text-red-600"
              >
                Remove
              </button>

            </div>
          ))}

        </div>
      )}

    </div>
  );
};

export default YourStack;