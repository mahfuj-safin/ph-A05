import type { Technology } from '../types/technology';

interface YourStackProps {
  stack: Technology[];
  removeFromStack: (id: number) => void;
  removeAll: () => void;
}

const YourStack = ({ stack, removeFromStack, removeAll }: YourStackProps) => {
  return (
    <aside className="h-fit self-start rounded-xl bg-white p-6 shadow">
      {/* Heading */}
      <h3 className="text-xl font-semibold text-gray-800">Your Stack</h3>

      <p className="mt-1 text-sm text-gray-400">
        {stack.length} Technology Selected
      </p>

      {/* Empty Stack */}
      {stack.length === 0 ? (
        <div className="mt-6 flex h-20 items-center justify-center rounded-xl border border-dashed border-gray-300">
          <p className="text-xs text-gray-400">Your stack is empty.</p>
        </div>
      ) : (
        /* Selected Stack */
        <div className="mt-6">
          <div className="space-y-3">
            {stack.map(item => (
              <div
                key={item.id}
                className="flex items-center justify-between rounded-xl border border-gray-200 p-3"
              >
                {/* Icon + Info */}
                <div className="flex items-center gap-3">
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="h-9 w-9 object-contain"
                  />

                  <div>
                    <h4 className="text-sm font-semibold text-gray-800">
                      {item.name}
                    </h4>

                    <p className="text-xs text-gray-400">{item.category}</p>
                  </div>
                </div>

                {/* Remove */}
                <button
                  onClick={() => removeFromStack(item.id)}
                  className="text-2xl font-light text-gray-400 hover:text-red-500"
                >
                  ×
                </button>
              </div>
            ))}
          </div>

          {/* Remove All */}
          <button
            onClick={removeAll}
            className="mt-5 w-full rounded-lg border border-red-300 py-2 text-sm font-semibold text-red-500 hover:bg-red-50"
          >
            Remove All
          </button>
        </div>
      )}
    </aside>
  );
};

export default YourStack;
