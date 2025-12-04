
import React from 'react';

const logos = [
  'BRIDES',
  'Martha Stewart',
  'Style Me Pretty',
  'The Knot',
  'WeddingWire',
];

const AsSeenOn: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-center text-sm font-semibold text-gray-500 uppercase tracking-wider mb-8">
          As Seen On
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:gap-x-12">
          {logos.map((logo) => (
            <div key={logo} className="text-center">
              <span className="text-gray-400 font-serif italic text-2xl">{logo}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AsSeenOn;
