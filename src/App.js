import Navigation from './components/layout/Navigation';
import Hero from './components/layout/Hero';
import Sections from './components/Sections';
import Graphics from './components/Graphics';
import Testimonials from './components/testimonials/Testimonials';
import Footer from './components/layout/Footer';


const App = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <Sections />
      <Graphics />
      <Testimonials />
      <Footer />
    </>
  );
};

export default App;