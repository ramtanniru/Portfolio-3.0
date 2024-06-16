import Image from 'next/image';
import './globals.css';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
export default function Home() {
  return (
    <main>
      <Hero/>
      <Projects/>
    </main>
  );
}
