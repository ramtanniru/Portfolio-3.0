import Image from 'next/image';
import './globals.css';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Socials from '@/components/Socials';
export default function Home() {
  return (
    <main>
      <Hero/>
      <Projects/>
      <About/>
      <Socials/>
    </main>
  );
}
