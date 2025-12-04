import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-20 text-center bg-blush">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-serif text-brand-dark mb-6">
          TPEC Flowers is an Austin Flower Wall Company
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          specializing in creating unique and beautiful flower wall backdrops for weddings, bridal showers, baby showers, and corporate events. We want to bring your event to the next level with our luxury flower walls.
        </p>
        <button className="bg-rose text-white px-8 py-3 text-md font-medium uppercase tracking-wider hover:bg-opacity-90 transition-colors">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default About;