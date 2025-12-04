import React, { useState, useEffect } from "react";
import Api from "../api"; 
import { XIcon, ArrowLeftIcon, ArrowRightIcon } from "./Icons";

interface ImageObject {
  url: string;
  public_id: string;
}

interface User {
  _id: string;
  name: string;
}

interface CollectionItem {
  _id: string;
  title: string;
  images: ImageObject[];
  user: User;
}

interface CollectionItemCardProps {
  item: CollectionItem;
  onClick: () => void;
}

const CollectionItemCard: React.FC<CollectionItemCardProps> = ({ item, onClick }) => (
  <div className="bg-white border border-gray-200 p-2 cursor-pointer" onClick={onClick}>
    <div className="relative aspect-square bg-gray-100 mb-4">
      <img src={item.images[0]?.url} alt={item.title} className="w-full h-full object-cover" />
    </div>
    <div className="p-4 text-center">
      <h3 className="text-2xl font-serif text-brand-dark mb-2">{item.title}</h3>
    </div>
  </div>
);

interface CollectionModalProps {
  item: CollectionItem;
  onClose: () => void;
}

const CollectionModal: React.FC<CollectionModalProps> = ({ item, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + item.images.length) % item.images.length);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % item.images.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prevImage(e as any);
      if (e.key === "ArrowRight") nextImage(e as any);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [item.images.length, onClose, prevImage, nextImage]); // Added missing deps for safety

  return (
    <div
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative bg-white shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 flex justify-between items-center border-b shrink-0"> {/* Added shrink-0 for explicit fixed sizing */}
          <h2 className="text-2xl font-serif text-brand-dark">{item.title}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
            <XIcon className="w-6 h-6" />
          </button>
        </div>

        <div className="relative flex-1 min-h-0"> {/* Changed to flex-1 min-h-0 */}
          <img
            src={item.images[currentIndex]?.url}
            alt={`${item.title} - image ${currentIndex + 1}`}
            className="w-full h-full object-contain"
          />

          <button
            onClick={prevImage}
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/50 p-2 rounded-full hover:bg-white transition-colors"
          >
            <ArrowLeftIcon className="w-6 h-6 text-gray-800" />
          </button>
          <button
            onClick={nextImage}
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/50 p-2 rounded-full hover:bg-white transition-colors"
          >
            <ArrowRightIcon className="w-6 h-6 text-gray-800" />
          </button>
        </div>

        <div className="p-4 flex justify-center space-x-2 border-t shrink-0"> {/* Added shrink-0 for explicit fixed sizing */}
          {item.images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? "bg-rose" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const Collection: React.FC = () => {
  const [collections, setCollections] = useState<CollectionItem[]>([]);
  const [selectedItem, setSelectedItem] = useState<CollectionItem | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCollections = async () => {
      setLoading(true);
      try {
        const res = await Api.get("/collection"); 
        setCollections(res.data);
      } catch (err) {
        console.error("Failed to fetch collections", err);
      } finally {
        setLoading(false);
      }
    };
    fetchCollections();
  }, []);

  useEffect(() => {
    document.body.style.overflow = selectedItem ? "hidden" : "auto";
  }, [selectedItem]);

  return (
    <>
      <section className="py-20 bg-blush">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif text-brand-dark mb-4">
              Our Flower Wall Collection
            </h2>
            <p className="text-lg text-gray-700">
              Handcrafted with premium silk flowers for a luxurious and realistic look.
            </p>
          </div>

          {loading ? (
            <p className="text-center">Loading collections...</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {collections.map((item) => (
                <CollectionItemCard
                  key={item._id}
                  item={item}
                  onClick={() => setSelectedItem(item)}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {selectedItem && (
        <CollectionModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </>
  );
};

export default Collection;
