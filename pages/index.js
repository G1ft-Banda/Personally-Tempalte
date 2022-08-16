import Head from 'next/head';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <div>
      <Hero
        hero_title="Minimal blog template for creative expressions"
        hero_text="100% customisable and SEO-friendly blog template for personal and commercial purposes."
      />
    </div>
  );
}
