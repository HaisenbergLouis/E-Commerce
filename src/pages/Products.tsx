const Products = () => {
  return (
    // <div className="p-8">
    //   <h1 className="text-3xl font-semibold text-gray-800 mb-6">Our Products 📦</h1>
    //   <p className="text-gray-600">Here will be the product cards...</p>
    // </div>
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-green-300 flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold text-green-800 mb-6">Our Products 📦</h1>
      <p className="text-gray-700 text-lg mb-8">Here are some of our best-selling items:</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">Product A</h2>
          <p className="text-gray-600">This is an amazing item.</p>
        </div>
        <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">Product B</h2>
          <p className="text-gray-600">High quality and affordable.</p>
        </div>
        <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">Product C</h2>
          <p className="text-gray-600">Our newest product line.</p>
        </div>
      </div>
    </div>
  );
};

export default Products;
