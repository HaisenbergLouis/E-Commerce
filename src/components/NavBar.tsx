import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { cartItems } = useCart();
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
      {/* 左侧网站标题 */}
      <Link to="/" className="text-2xl font-bold text-blue-600">
        🛒 React商城
      </Link>

      {/* 中间/右侧导航链接 */}
      <div className="flex space-x-6 items-center">
        <Link to="/" className="hover:text-blue-500 font-medium">
          Home
        </Link>
        <Link to="/about" className="hover:text-blue-500 font-medium">
          About
        </Link>
        <Link to="/products" className="hover:text-blue-500 font-medium">
          Products
        </Link>

        {/* 购物车徽标 */}
        <Link to="/cart" className="relative">
          <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-blue-500" />
          {totalQuantity > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {totalQuantity}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
