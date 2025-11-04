import NavBar from './components/NavBar';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import { Toaster } from 'react-hot-toast';
import OrderHistory from './pages/OrderHistory';

function App() {
  return (
    <div>
      {/* 全局 toast 容器 */}
      <Toaster position="top-right" reverseOrder={false} />
      {/* 其他组件 */}
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/orders" element={<OrderHistory />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
