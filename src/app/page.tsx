'use client';
import Projects from './sections/projects';

import Introduction from './sections/about';
import Hero from './sections/hero';
import Links from './sections/links';

export default function Home() {
  return (
    <div className='flex flex-col gap-12'>
      <Hero />
      <Introduction />
      <Projects />
      <Links />
    </div>
  );
}
