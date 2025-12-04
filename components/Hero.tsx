import React from "react";

interface HeroProps {
  scrollToSection: () => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  return (
    <div className="relative h-screen w-full flex items-center justify-center text-center text-white overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src="/assets/10ddc6bb-cae1-4057-9ff0-b68434334da0.mp4"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      {/* Content */}
      <div className="relative z-10 px-4">
        {/* Uncomment if needed
        <h1 className="text-6xl md:text-8xl font-serif mb-4">TPEC Flowers</h1>
        <p className="text-xl md:text-2xl font-light tracking-widest uppercase mb-8">
          Flower Wall Backdrop Rental
        </p>
        */}
        <button
          onClick={scrollToSection}
          className="bg-transparent border-2 border-white text-white px-8 py-5 rounded-md text-lg font-medium uppercase tracking-wider hover:bg-white hover:text-black transition-colors duration-300 mt-60"
        >
          View Our Collection
        </button>
      </div>
    </div>
  );
};

export default Hero;