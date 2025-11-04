import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, addToCart, removeFromCart, clearCart, totalPrice } = useCart();
  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] text-center">
        <h2 className="text-2xl font-semibold mb-2">你的购物车是空的 🛒</h2>
        <p className="text-gray-500">快去挑选一些喜欢的商品吧！</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">🛍️ 我的购物车</h1>

      <div className="space-y-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row justify-between items-center border-b pb-4"
          >
            <div className="flex items-center space-x-4">
              <img src={item.image} alt={item.title} className="w-24 h-24 object-cover rounded" />
              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-gray-500">${item.price.toFixed(2)}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 mt-2 sm:mt-0">
              <button
                onClick={() => removeFromCart(item.id)}
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                −
              </button>
              <span className="font-semibold">{item.quantity}</span>
              <button
                onClick={() => addToCart(item)}
                className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
              >
                ＋
              </button>
              <span className="w-20 text-right font-semibold">
                ${(item.price * item.quantity).toFixed(2)}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
        <button
          onClick={clearCart}
          className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
        >
          清空购物车
        </button>
        <h2 className="text-2xl font-bold">总价：${totalPrice.toFixed(2)}</h2>
        <button
          onClick={() => navigate('/checkout')}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          去结账
        </button>
      </div>
    </div>
  );
};

export default Cart;
