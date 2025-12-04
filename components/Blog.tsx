import React, { useState, useEffect } from "react";
import Api from "../api";

interface BlogPost {
  _id: string;
  title: string;
  excerpt: string;
  headerImage: string;  
  createdAt: string;
  user: {
    name: string;
  };
}

interface FullBlogPost extends BlogPost {
  content: string; // Assuming full content is a string (e.g., HTML or plain text)
}

const BlogPostCard: React.FC<{ post: BlogPost; onReadMore: (id: string) => void }> = ({ post, onReadMore }) => {
  const formattedDate = new Date(post.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden group transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

      <div className="relative h-56 overflow-hidden bg-gray-200">
        {post.headerImage ? (   
          <img
            src={post.headerImage}   
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-rose/20 to-brand-dark/20 flex items-center justify-center">
            <span className="text-gray-400 text-lg">No Image</span>
          </div>
        )}

        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity" />
      </div>

      <div className="p-6">
        <p className="text-sm text-gray-500 mb-2">{formattedDate}</p>

        <h3 className="text-2xl font-serif text-brand-dark mb-3 line-clamp-2 leading-tight">
          {post.title}
        </h3>

        <p className="text-gray-700 mb-5 line-clamp-3 text-base">{post.excerpt}</p>

        <button
          onClick={() => onReadMore(post._id)}
          className="font-semibold text-rose hover:text-rose/80 inline-flex items-center transition"
        >
          Read More <span className="ml-2">→</span>
        </button>
      </div>
    </div>
  );
};

interface BlogModalProps {
  post: FullBlogPost | null;
  onClose: () => void;
}

const BlogModal: React.FC<BlogModalProps> = ({ post, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!post) return null;

  const formattedDate = new Date(post.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative bg-white shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Image */}
        {post.headerImage && (
          <div className="relative h-64 overflow-hidden bg-gray-200">
            <img
              src={post.headerImage}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Content */}
        <div className="p-6 flex-grow overflow-y-auto">
          <div className="flex justify-between items-center mb-4">
            <div>
              <p className="text-sm text-gray-500">{formattedDate}</p>
              <p className="text-sm text-gray-500">By {post.user.name}</p>
            </div>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <h1 className="text-3xl md:text-4xl font-serif text-brand-dark mb-6">{post.title}</h1>

          {/* Full Content - Assuming it's HTML; use dangerouslySetInnerHTML for rich text, or plain <p> for text */}
          <div
            className="prose prose-lg max-w-none text-gray-700"
            dangerouslySetInnerHTML={{ __html: post.content }} // If content is HTML; otherwise, <div className="text-gray-700">{post.content}</div>
          />
        </div>
      </div>
    </div>
  );
};

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [visiblePosts, setVisiblePosts] = useState<BlogPost[]>([]);
  const [selectedPost, setSelectedPost] = useState<FullBlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await Api.get("/blog/");
        setPosts(res.data);
        setVisiblePosts(res.data.slice(0, 3));
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch blogs:", err);
        setError(true);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const fetchAndOpenPost = async (id: string) => {
    try {
      const res = await Api.get(`/blog/${id}`);
      setSelectedPost(res.data); // Assuming API returns FullBlogPost
    } catch (err) {
      console.error("Failed to fetch full post:", err);
      // Optionally set error state or alert
    }
  };

  useEffect(() => {
    document.body.style.overflow = selectedPost ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedPost]);

  const handleShowMore = () => {
    setVisiblePosts(posts);
    setShowAll(true);
  };

  if (loading) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <p className="text-xl text-gray-600">Loading latest posts...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <p className="text-red-600">Failed to load blog posts. Please try again later.</p>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif text-brand-dark mb-4">
              From Our Blog
            </h2>
            <p className="text-lg text-gray-700">
              Tips, trends, and inspiration for your next event.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {visiblePosts.map((post) => (
              <BlogPostCard key={post._id} post={post} onReadMore={fetchAndOpenPost} />
            ))}
          </div>

          {!showAll && posts.length > 3 && (
            <div className="text-center mt-12">
              <button
                onClick={handleShowMore}
                className="px-8 py-4 bg-rose text-white font-semibold rounded-lg hover:bg-rose/90 transition-all transform hover:scale-105 shadow-lg"
              >
                Show More Posts
              </button>
            </div>
          )}
        </div>
      </section>

      <BlogModal post={selectedPost} onClose={() => setSelectedPost(null)} />
    </>
  );
};

export default Blog;