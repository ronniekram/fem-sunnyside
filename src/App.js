import Navigation from './components/layout/Navigation';
import Hero from './components/layout/Hero';
import Sections from './components/Sections';
import Graphics from './components/Graphics';
import Testimonials from './components/testimonials/Testimonials';


const App = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <Sections />
      <Graphics />
      <Testimonials />
    </>
  );
};

export default App;