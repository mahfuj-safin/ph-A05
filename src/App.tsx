import { ToastContainer } from 'react-toastify';
import Footer from './components/footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Technologies from './components/Technologies';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Technologies />
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default App;
