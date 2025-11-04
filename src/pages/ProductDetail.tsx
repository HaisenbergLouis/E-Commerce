import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const { addToCart } = useCart();
  if (!product) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Product not found 😢</h2>
        <Link to="/" className="text-pink-500 underline">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row gap-8 p-8">
      <img
        src={product.image}
        alt={product.title}
        className="w-full md:w-1/2 rounded-2xl shadow-lg object-cover"
      />

      <div className="flex flex-col justify-center">
        <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
        <p className="text-gray-600 mb-6">{product.description}</p>
        <p className="text-2xl font-bold text-pink-500 mb-6">${product.price}</p>

        <button
          onClick={() => addToCart(product)}
          className="bg-pink-500 text-white px-6 py-3 rounded-xl hover:bg-pink-600 transition w-fit"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
