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

  const badgeColors: Record<string, string> = {
    blue: 'bg-blue-100 text-blue-600',
    green: 'bg-green-100 text-green-600',
    yellow: 'bg-yellow-100 text-yellow-600',
    orange: 'bg-orange-100 text-orange-600',
    cyan: 'bg-cyan-100 text-cyan-600',
    gray: 'bg-gray-100 text-gray-600',
    purple: 'bg-purple-100 text-purple-600',
    darkNavy: 'bg-[#2E5A88] text-white',
  };

  return (
    <div className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg md:p-5">
      {/* Icon and Badge */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 md:h-14 md:w-14">
          <img
            src={technology.icon}
            alt={technology.name}
            className="h-8 w-8 object-contain md:h-10 md:w-10"
          />
        </div>

        <span
          className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
            badgeColors[technology.badgeColor]
          }`}
        >
          {technology.badge}
        </span>
      </div>

      {/* technologies Information */}
      <div className="mt-4 flex-1 md:mt-5">
        <h3 className="text-lg font-bold text-gray-900 md:text-xl">
          {technology.name}
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-500">
          {technology.description}
        </p>
      </div>

      {/* Category, Difficulty and Rating */}
      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-purple-100 px-2.5 py-1 text-xs font-medium text-gray-600">
            {technology.category}
          </span>

          <span className="rounded-full bg-purple-100 px-2.5 py-1 text-xs font-medium text-purple-600">
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
