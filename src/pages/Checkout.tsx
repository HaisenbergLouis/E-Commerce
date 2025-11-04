import React from 'react';
import { useCart } from '../context/CartContext';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { cartItems, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      toast.error('购物车是空的，无法结账！');
      return;
    }

    toast.success('支付成功！感谢您的购买 ❤️');
    clearCart();
    setTimeout(() => navigate('/'), 1500);
  };

  return (
    <div className="max-w-2xl mx-auto py-10 px-6">
      <h1 className="text-3xl font-bold mb-6 text-center">💳 结账中心</h1>

      <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
        {cartItems.length > 0 ? (
          <>
            <ul>
              {cartItems.map((item) => (
                <li key={item.id} className="flex justify-between items-center border-b py-2">
                  <span>
                    {item.title} × {item.quantity}
                  </span>
                  <span className="font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
                </li>
              ))}
            </ul>
            <div className="flex justify-between items-center mt-4">
              <h2 className="text-xl font-semibold">总价：</h2>
              <span className="text-2xl font-bold text-green-600">${totalPrice.toFixed(2)}</span>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full mt-6 bg-green-500 text-white py-2 rounded hover:bg-green-600 transition"
            >
              确认付款
            </button>
          </>
        ) : (
          <p className="text-gray-500 text-center py-8">购物车为空，请先添加商品 🛒</p>
        )}
      </div>
    </div>
  );
};

export default Checkout;
