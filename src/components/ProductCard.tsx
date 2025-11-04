import { Link } from 'react-router-dom';

type ProductCardProps = {
  id: number;
  title: string;
  price: number;
  image: string;
};

const ProductCard = ({ id, title, price, image }: ProductCardProps) => {
  return (
    <Link
      to={`/product/${id}`}
      className="bg-white rounded-2xl shadow hover:shadow-lg transition p-4 flex flex-col items-center"
    >
      <img src={image} alt={title} className="h-48 w-full object-cover rounded-xl mb-4" />
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-pink-500 font-bold text-xl mb-3">${price}</p>
      <span className="text-sm text-gray-500 hover:underline">View Details →</span>
    </Link>
  );
};

export default ProductCard;
