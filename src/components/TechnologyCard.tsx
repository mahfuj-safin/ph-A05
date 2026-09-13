import { FaStar } from 'react-icons/fa';

import type { Technology } from '../types/technology';

type TechnologyCardProps = {
  technology: Technology;
  addToStack: (technology: Technology) => void;
  stack: Technology[];
};

const TechnologyCard = ({
  technology,
  addToStack,
  stack,
}: TechnologyCardProps) => {
  const alreadyAdded = stack.some(item => item.id === technology.id);

  return (
    <div className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Icon + Badge */}
      <div className="flex items-start justify-between">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gray-100">
          <img
            src={technology.icon}
            alt={technology.name}
            className="h-10 w-10 object-contain"
          />
        </div>

        <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-600">
          {technology.badge}
        </span>
      </div>

      {/* Technology Information */}
      <div className="mt-5 flex-1">
        <h3 className="text-xl font-bold text-gray-900">{technology.name}</h3>

        <p className="mt-2 text-sm leading-6 text-gray-500">
          {technology.description}
        </p>
      </div>

      {/* Category + Difficulty + Rating */}
      <div className="mt-5 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
            {technology.category}
          </span>

          <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-600">
            {technology.difficulty}
          </span>
        </div>

        <div className="flex shrink-0 items-center gap-1">
          <FaStar className="text-yellow-400" />

          <span className="text-sm font-semibold text-gray-700">
            {technology.rating}
          </span>
        </div>
      </div>

      {/* Add To Stack */}
      <button
        onClick={() => addToStack(technology)}
        disabled={alreadyAdded}
        className={`mt-5 w-full rounded-xl py-3 text-sm font-semibold transition ${
          alreadyAdded
            ? 'cursor-not-allowed bg-gray-200 text-gray-500'
            : 'bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 text-white hover:opacity-90'
        }`}
      >
        {alreadyAdded ? '✓ Added to Stack' : 'Add to Stack'}
      </button>
    </div>
  );
};

export default TechnologyCard;
