import NavBar from './components/NavBar';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';

function App() {
  return (
    <div>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
