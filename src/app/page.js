import Image from 'next/image';
import './globals.css';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Socials from '@/components/Socials';
import Skills from '@/components/Skills';
import End from '@/components/End';
export default function Home() {
  return (
    <main>
      <Hero/>
      <Projects/>
      <About/>
      <Socials/>
      <Skills/>
      <End/>
    </main>
  );
}
