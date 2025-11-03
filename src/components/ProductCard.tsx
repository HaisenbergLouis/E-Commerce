type ProductCardProps = {
  title: string;
  price: number;
  image: string;
};

const ProductCard = ({ title, price, image }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-2xl shadow hover:shadow-lg transition p-4 flex flex-col items-center">
      <img src={image} alt={title} className="h-48 w-full object-cover rounded-xl mb-4" />
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-pink-500 font-bold text-xl mb-3">${price}</p>
      <button className="bg-pink-500 text-white px-4 py-2 rounded-xl hover:bg-pink-600 transition">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
