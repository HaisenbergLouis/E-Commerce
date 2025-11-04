import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Checkout = () => {
  const { cartItems, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', phone: '', address: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (cartItems.length === 0) {
      toast.error('购物车为空，无法提交订单！');
      return;
    }

    const newOrder = {
      id: Date.now(),
      items: cartItems,
      total: totalPrice,
      customer: form,
      date: new Date().toLocaleString(),
    };

    const existingOrders = JSON.parse(localStorage.getItem('orders') || '[]');
    localStorage.setItem('orders', JSON.stringify([...existingOrders, newOrder]));

    toast.success(`感谢 ${form.name} 的购买！总金额：$${totalPrice.toFixed(2)}`, {
      duration: 4000,
      position: 'top-right',
    });

    clearCart();
    setTimeout(() => navigate('/'), 1000);
  };

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] text-center">
        <h2 className="text-2xl font-semibold">购物车为空 🛒</h2>
        <p className="text-gray-500">先添加一些商品再来结账吧。</p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">结账 📝</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium mb-1">姓名</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">电话</label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">地址</label>
          <textarea
            name="address"
            value={form.address}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center mt-4 space-y-2 sm:space-y-0">
          <h2 className="text-xl font-bold">总价：${totalPrice.toFixed(2)}</h2>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            提交订单
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
