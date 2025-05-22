// src/components/Homepage/HomePage.jsx
import React from 'react';
import { TechPulseDivider } from '../TechPulseDivider';
import AnimatedCatCard from '../AnimatedCatCard';
import ArtDecoDivider from '../ArtDecoDivider';
import clsx from 'clsx';

export default function HomePage({ darkMode, setDarkMode, onNavigate }) {
  return (
    <section className="space-y-16">
      {/* Hero */}
      <div className="py-10 text-center bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900">
        <h1 className="text-5xl font-bold mb-4">Hi, my name's Logan.</h1>
        <p className="text-xl text-gray-700 dark:text-gray-300">
          Security analyst • Creative engineer • Builder
        </p>
        <ArtDecoDivider />
      </div>

      {/* About Me */}
      <div
        className={clsx(
          'relative py-16 bg-cover bg-center text-gray-900 dark:text-white',
          darkMode
            ? "bg-[url('/images/about-night.png')]"
            : "bg-[url('/images/about-day.png')]"
        )}
      >
        {/* overlay for contrast */}
        <div className="absolute inset-0 bg-white/50 dark:bg-black/50" />
        <div className="relative max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="mb-4 text-base leading-relaxed">
            I’m a security analyst by{' '}
            <button
              className="font-semibold underline cursor-pointer"
              onClick={() => setDarkMode(false)}
            >
              day
            </button>{' '}
            and a tinkerer by{' '}
            <button
              className="font-semibold underline cursor-pointer"
              onClick={() => setDarkMode(true)}
            >
              night
            </button>
            . I like to build practical projects both digital and physical, research
            and collaborate with others…
          </p>
          <p className="text-base leading-relaxed">
            Whether I’m writing Python scripts to automate threat checks or swinging a
            hammer on an A-frame cottage, my goal is always the same: blend practical
            infrastructure with a touch of magic.
          </p>
        </div>
      </div>

      {/* Collaborate */}
      <div className="py-16 bg-blue-50 dark:bg-gray-800">
        <h2 className="text-3xl font-bold mb-4 text-center">Let’s Collaborate</h2>
        <p className="max-w-2xl mx-auto mb-8 text-center">
          I’m always looking for co-builders and co-creators who want to tackle:
        </p>
        <ul className="max-w-md mx-auto grid gap-4 sm:grid-cols-2">
          <li className="flex items-start space-x-3">
            <span>🛠️</span>
            <span>Open-source security tooling</span>
          </li>
          <li className="flex items-start space-x-3">
            <span>🌳</span>
            <span>Sustainable small-town planning</span>
          </li>
          <li className="flex items-start space-x-3">
            <span>🎲</span>
            <span>Animation and game design</span>
          </li>
          <li className="flex items-start space-x-3">
            <span>🌐</span>
            <span>Creative community websites</span>
          </li>
        </ul>
        <div className="text-center mt-8">
          <button
            onClick={() => onNavigate?.('contact')}
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded shadow hover:bg-blue-700"
          >
            Reach Out
          </button>
        </div>
      </div>

      {/* Interests */}
      <div className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">When I’m Not Coding or Building</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <h3 className="font-semibold mb-1">🏡 Small Town Design</h3>
            <p className="text-sm">
              Collaborating and designing plans for building a small community incorporating
              both nature and modern technology. I am always looking for new collaborators.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-1">🎧 Music and Concerts</h3>
            <p className="text-sm">
              I am always listening to new music of all genres. I love going to concerts to
              support new artists.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-1">📚 TTRPGs with Friends</h3>
            <p className="text-sm">
              One of my favorite group passtimes, and campaigns are regularly done virtually.
              Interested in meeting the group or sitting in on a session? Reach out and
              introduce yourself!
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-1">🏕️ Camping and Floating</h3>
            <p className="text-sm">
              On the rare occasion I can find time, a trip down a river or a night camping
              is the best for de-stressing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
