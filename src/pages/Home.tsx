import ProductCard from '../components/ProductCard';

const Home = () => {
  const products = [
    {
      title: 'Wireless Headphones',
      price: 129,
      image:
        'https://images.pexels.com/photos/3394652/pexels-photo-3394652.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Smart Watch',
      price: 99,
      image:
        'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=600&auto=format&fit=crop&q=80',
    },
    {
      title: 'Camera Lens',
      price: 249,
      image:
        'https://images.pexels.com/photos/1255143/pexels-photo-1255143.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Gaming Keyboard',
      price: 79,
      image:
        'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&auto=format&fit=crop&q=80',
    },
  ];

  return (
    <div className="px-8 py-10 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center">Featured Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((p) => (
          <ProductCard key={p.title} title={p.title} price={p.price} image={p.image} />
        ))}
      </div>
    </div>
  );
};

export default Home;
