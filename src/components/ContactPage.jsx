// src/pages/ContactPage.jsx
import React from 'react';

export default function ContactPage({ darkMode }) {
  const contacts = [
    {
      name: 'Email',
      url: 'mailto:logans.automation@gmail.com',
      iconLight: '/images/Email.png',
      iconDark: '/images/Email-Night.png',
      // scale (%) of the icon inside its square container
      scaleLight: 100,
      scaleDark: 100,
    },
    {
      name: 'GitHub',
      url: 'https://github.com/YoungGunFrodo',
      iconLight: '/images/Github.png',
      iconDark: '/images/Github-Night.png',
      scaleLight: 105,   // bump GitHub up a bit in light mode
      scaleDark: 100,    // slightly different for dark
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/wilsonln',
      iconLight: '/images/Linkedin.png',
      iconDark: '/images/Linkedin-Night.png',
      scaleLight: 90,
      scaleDark: 100,
    },
  ];

  return (
    <section
      id="contact"
      className="py-16 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white"
    >
      <div className="max-w-md mx-auto text-center space-y-4">
        <h2 className="text-5xl font-extrabold leading-snug">Get in Touch</h2>
        <p className="text-base max-w-xs mx-auto">
          I’m always excited to connect—whether it’s to collaborate, chat about
          cybersecurity, or brainstorm small-town worldbuilding!
        </p>

        <ul className="flex justify-center space-x-8 mt-6">
          {contacts.map(({ name, url, iconLight, iconDark, scaleLight, scaleDark }) => {
            const imgUrl = darkMode ? iconDark : iconLight;
            const scale = darkMode ? scaleDark : scaleLight;
            return (
              <li key={name}>
                <a
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block transform transition hover:-translate-y-1"
                >
                  <div
                    className="w-32 sm:w-40 aspect-square rounded-lg bg-center"
                    style={{
                      backgroundImage: `url(${imgUrl})`,
                      backgroundSize: `${scale}% ${scale}%`,
                      backgroundRepeat: 'no-repeat',
                    }}
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
