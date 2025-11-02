const About = () => {
  return (
    // <div className="p-8">
    //   <h1 className="text-3xl font-semibold text-gray-800 mb-4">About Us 👋</h1>
    //   <p className="text-gray-600 leading-relaxed">
    //     We are passionate about building quality products and delivering great experiences.
    //   </p>
    // </div>
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-orange-200 flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold text-orange-800 mb-4">About Us 👋</h1>
      <p className="text-gray-700 text-center max-w-2xl leading-relaxed">
        We are a small team of developers passionate about building high-quality web applications.
        Our goal is to deliver excellent products with a great user experience.
      </p>
    </div>
  );
};

export default About;
