import Hero from '../components/Hero';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ShopPreview from '@/components/sections/ShopPreview';
import About from '@/components/About';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center">
      <Header />
      <Hero />
      <Services />
      <Gallery />
      <Testimonials />
      <ShopPreview />
      <About />
      <Contact />
      <Footer />

    </main>
  );
}
