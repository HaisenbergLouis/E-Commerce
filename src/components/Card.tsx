// import Button from './Button';

// interface CardProps {
//   title: string;
//   description: string;
//   imageUrl: string;
// }

// const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
//   return (
//     <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition">
//       <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
//       <div className="p-4">
//         <h2 className="text-xl font-semibold mb-2">{title}</h2>
//         <p className="text-gray-600 mb-4">{description}</p>
//         <Button text="View Details" variant="primary" />
//       </div>
//     </div>
//   );
// };

// export default Card;
import Card from '../components/Card';

const Products = () => {
  const items = [
    {
      title: 'Wireless Headphones',
      description: 'High-quality sound and long battery life.',
      imageUrl: 'https://picsum.photos/300/200?random=1',
    },
    {
      title: 'Smart Watch',
      description: 'Track your fitness and stay connected.',
      imageUrl: 'https://picsum.photos/300/200?random=2',
    },
    {
      title: 'Gaming Mouse',
      description: 'Ergonomic design for precision control.',
      imageUrl: 'https://picsum.photos/300/200?random=3',
    },
  ];

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Our Products 📦</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <Card key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
