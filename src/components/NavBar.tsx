import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const navStyle = 'text-white hover:underline px-3 py-2 rounded-md text-lg font-medium';

  return (
    <nav className="bg-blue-600 flex items-center justify-between px-6 py-4 shadow-md">
      <h1 className="text-white text-2xl font-bold">MyShop 🛍️</h1>
      <div className="flex gap-4">
        <NavLink to="/" className={navStyle}>
          Home
        </NavLink>
        <NavLink to="/products" className={navStyle}>
          Products
        </NavLink>
        <NavLink to="/about" className={navStyle}>
          About
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
