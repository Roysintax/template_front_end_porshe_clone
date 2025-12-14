import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Models } from './components/Models';
import { Performance } from './components/Performance';
import { Heritage } from './components/Heritage';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="smooth-scroll">
      <Navbar />
      <Hero />
      <Models />
      <Performance />
      <Heritage />
      <Contact />
      <Footer />
    </div>
  );
}
