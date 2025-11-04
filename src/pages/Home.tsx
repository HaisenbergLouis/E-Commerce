//Home导航下界面
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Home = () => {
  return (
    <div className="px-8 py-10 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center">Featured Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((p) => (
          <ProductCard key={p.id} id={p.id} title={p.title} price={p.price} image={p.image} />
        ))}
      </div>
    </div>
  );
};

export default Home;
