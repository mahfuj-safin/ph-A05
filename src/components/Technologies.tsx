import { useEffect, useState } from 'react';

import TechnologyCard from './TechnologyCard';
import YourStack from './YourStack';
import { toast } from 'react-toastify';

import type { Technology } from '../types/technology';

const Technologies = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);
  // Add one technology to stack
  const addToStack = (technology: Technology) => {
    const alreadyAdded = stack.some(item => item.id === technology.id);

    if (alreadyAdded) {
      toast.warning(`${technology.name} is already in your stack`);
      return;
    }

    const sameCategory = stack.some(
      item => item.category === technology.category,
    );
    if (sameCategory) {
      toast.warning(
        `You can select only on ${technology.category} technology.`,
      );
      return;
    }

    setStack(prevStack => [...prevStack, technology]);

    toast.success(`${technology.name} added to your stack`);
  };

  // Remove one technology
  const removeFromStack = (id: number, name: string) => {
    setStack(prevStack => prevStack.filter(item => item.id !== id));
    toast.warning(`${name} remove from your stack`);
  };

  // Remove all technologies
  const removeAll = () => {
    if (stack.length === 0) return;
    setStack([]);
    toast.success('All Technologies Removed');
  };

  // Technologies load from JSON
  useEffect(() => {
    fetch('/technologies.json')
      .then(res => res.json())
      .then(data => {
        setTechnologies(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section className="flex items-center justify-center py-20">
        <p className="text-gray-500 text-2xl">Loading.........</p>
      </section>
    );
  }

  return (
    <section className="bg-white px-10 py-10 container mx-auto">
      {/* Technologies Heading */}
      <div className="mb-10 text-left ">
        <h2 className="text-4xl font-bold text-gray-900">
          Explore the{' '}
          <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>

        <p className="mt-4 text-gray-500">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      {/* Technologies  */}
      <div className="grid grid-cols-4 gap-8">
        {/* Technology Cards */}
        <div className="col-span-3 grid grid-cols-3 gap-6">
          {technologies.map(technology => (
            <TechnologyCard
              key={technology.id}
              technology={technology}
              addToStack={addToStack}
              stack={stack}
            />
          ))}
        </div>

        {/*  Sidebar */}
        <YourStack
          stack={stack}
          removeFromStack={removeFromStack}
          removeAll={removeAll}
        />
      </div>
    </section>
  );
};

export default Technologies;
