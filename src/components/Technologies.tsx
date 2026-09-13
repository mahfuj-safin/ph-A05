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

  // one technologies remove
  const removeFromStack = (id: number, name: string) => {
    setStack(prevStack => prevStack.filter(item => item.id !== id));
    toast.warning(`${name} remove from your stack`);
  };

  // all technologies remove
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
    <section className="bg-white px-4 py-10 container mx-auto md:px-8 lg:px-10">
      {/* heading */}
      <div className="mb-10 text-left md:mb-10">
        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
          Explore the{' '}
          <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>

        <p className="mt-3 text-sm text-gray-500 md:mt-4 md:text-base">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      {/* technologies  & sidebar */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
        {/* technology Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:col-span-3 lg:grid-cols-3">
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
