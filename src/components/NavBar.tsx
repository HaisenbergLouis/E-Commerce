import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { cartItems } = useCart();
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* 左侧网站标题 */}
          <Link to="/" className="text-2xl font-bold text-blue-600">
            🛒 React商城
          </Link>

          {/* PC 菜单 */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link to="/" className="hover:text-blue-500 font-medium">
              Home
            </Link>
            <Link to="/about" className="hover:text-blue-500 font-medium">
              About
            </Link>
            <Link to="/products" className="hover:text-blue-500 font-medium">
              Products
            </Link>
            <Link to="/cart" className="relative">
              <ShoppingCart
                className="w-6 h-6 text-gray-700 hover:text-blue-500"
                aria-label="购物车"
              />
              {totalQuantity > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {totalQuantity}
                </span>
              )}
            </Link>
            <Link to="/orders" className="hover:text-blue-500 font-medium">
              订单历史
            </Link>
          </div>

          {/* 移动端汉堡按钮 */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* 移动端菜单 */}
        {isOpen && (
          <div className="md:hidden mt-2 space-y-2 pb-2 border-t border-gray-200">
            <Link
              to="/"
              onClick={toggleMenu}
              className="block px-2 py-1 hover:text-blue-500 font-medium"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={toggleMenu}
              className="block px-2 py-1 hover:text-blue-500 font-medium"
            >
              About
            </Link>
            <Link
              to="/products"
              onClick={toggleMenu}
              className="block px-2 py-1 hover:text-blue-500 font-medium"
            >
              Products
            </Link>
            <Link
              to="/cart"
              onClick={toggleMenu}
              className="block relative px-2 py-1 hover:text-blue-500 font-medium"
            >
              购物车
              {totalQuantity > 0 && (
                <span className="absolute top-0 right-0 -mt-1 -mr-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {totalQuantity}
                </span>
              )}
            </Link>
            <Link
              to="/orders"
              onClick={toggleMenu}
              className="block px-2 py-1 hover:text-blue-500 font-medium"
            >
              订单历史
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
