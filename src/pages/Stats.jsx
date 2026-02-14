import { useEffect, useState } from 'react';
import { Heart, Users, Leaf, Trophy } from 'lucide-react';
import './Stats.css';

const Stats = () => {
  const [counts, setCounts] = useState({
    patients: 0,
    treatments: 0,
    experience: 0,
    satisfaction: 0
  });

  const stats = [
    {
      label: 'Happy Patients',
      target: 500,
      icon: Heart,
      color: 'from-red-500 to-pink-600',
      suffix: '+'
    },
    {
      label: 'Treatments Given',
      target: 2500,
      icon: Leaf,
      color: 'from-green-500 to-emerald-600',
      suffix: '+'
    },
    {
      label: 'Years of Expertise',
      target: 5,
      icon: Trophy,
      color: 'from-yellow-500 to-orange-600',
      suffix: '+'
    },
    {
      label: 'Client Satisfaction',
      target: 98,
      icon: Users,
      color: 'from-blue-500 to-purple-600',
      suffix: '%'
    }
  ];

  useEffect(() => {
    const animationDuration = 2000;
    const startTime = Date.now();

    const animateCount = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / animationDuration, 1);

      setCounts({
        patients: Math.floor(500 * progress),
        treatments: Math.floor(2500 * progress),
        experience: Math.floor(5 * progress),
        satisfaction: Math.floor(98 * progress)
      });

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      }
    };

    animateCount();
  }, []);

  return (
    <section className="py-16 bg-gradient-to-r from-deep-green via-green-600 to-emerald-700 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full -mr-48 -mt-48"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-white opacity-5 rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const statValues = [counts.patients, counts.treatments, counts.experience, counts.satisfaction];

            return (
              <div
                key={index}
                className="stats-card group"
              >
                <div className={`bg-gradient-to-br ${stat.color} rounded-2xl p-8 h-full flex flex-col items-center justify-center text-center shadow-lg group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105`}>
                  <div className="mb-6">
                    <Icon className="w-12 h-12 text-white" />
                  </div>

                  <div className="mb-4">
                    <div className="text-5xl font-bold text-white tracking-tight">
                      {statValues[index]}{stat.suffix}
                    </div>
                  </div>

                  <p className="text-white text-opacity-90 font-semibold text-lg">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
