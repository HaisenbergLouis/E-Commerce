import { useEffect, useState } from 'react';

interface OrderItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

interface Order {
  id: number;
  items: OrderItem[];
  total: number;
  customer: {
    name: string;
    phone: string;
    address: string;
  };
  date: string;
}

const OrderHistory = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem('orders') || '[]');
    setOrders(savedOrders);
  }, []);

  if (orders.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] text-center">
        <h2 className="text-2xl font-semibold">暂无订单记录 📦</h2>
        <p className="text-gray-500">先去购物，提交订单后会显示在这里。</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">订单历史 📜</h1>
      <div className="space-y-6">
        {orders.map((order) => (
          <div key={order.id} className="border p-4 rounded shadow-sm">
            <div className="flex justify-between items-center mb-2">
              <h2 className="font-bold">订单号: {order.id}</h2>
              <span className="text-gray-500 text-sm">{order.date}</span>
            </div>
            <div>
              {order.items.map((item) => (
                <div key={item.id} className="flex justify-between items-center mb-1">
                  <span>
                    {item.title} × {item.quantity}
                  </span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="mt-2 font-bold">总金额: ${order.total.toFixed(2)}</div>
            <div className="mt-1 text-gray-600">
              收货人: {order.customer.name} | 电话: {order.customer.phone} | 地址:{' '}
              {order.customer.address}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderHistory;
