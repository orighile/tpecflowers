import React, { useState } from 'react';
import { SOCIAL_LINKS, CONTACT_DETAILS } from '../constants';
import { InstagramIcon, FacebookIcon } from './Icons';
import { FaPinterestP } from 'react-icons/fa';
import api from '../api'; 

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus('idle');
    setStatusMessage('');

    try {
      // Option A: If your api client has .post() method (most common)
      const response = await api.post('/contact', formData);

      // Option B: If your api is a function that accepts url + options
      // const response = await api('/api/contact', {
      //   method: 'POST',
      //   body: JSON.stringify(formData),
      // });

      // Some api clients return { data, error }, others return response directly
      // Adjust based on your api implementation

      let data;
      if (response.data) {
        data = response.data; // e.g., if using Axios-like wrapper
      } else {
        data = await response.json(); // if it returns raw Response
      }

      if (!response.ok && !response.status?.toString().startsWith('2')) {
        throw new Error(data.error || data.message || 'Failed to send message');
      }

      setSubmitStatus('success');
      setStatusMessage('Thank you! Your message has been sent successfully.');
      setFormData({ name: '', email: '', message: '' });
    } catch (error: any) {
      console.error('Contact form error:', error);
      setSubmitStatus('error');
      setStatusMessage(
        error.message || 'Something went wrong. Please try again later.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-brand-dark mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-700">
            Ready to elevate your event? Contact us for a quote!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="text-gray-700">
            <h3 className="text-2xl font-serif text-brand-dark mb-6">
              Contact Information
            </h3>
            <div className="space-y-4 mb-10">
              <p>
                <strong>Email:</strong>{' '}
                <a href={`mailto:${CONTACT_DETAILS.email}`} className="text-rose hover:underline">
                  {CONTACT_DETAILS.email}
                </a>
              </p>
              <p><strong>Phone:</strong> {CONTACT_DETAILS.phone}</p>
              <p><strong>Location:</strong> {CONTACT_DETAILS.location}</p>
            </div>

            <h3 className="text-2xl font-serif text-brand-dark mb-4">Follow Us</h3>
            <div className="flex space-x-6">
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-rose transition">
                <InstagramIcon className="w-7 h-7" />
              </a>
              <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-rose transition">
                <FacebookIcon className="w-7 h-7" />
              </a>
              <a href={SOCIAL_LINKS.pinterest} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-rose transition">
                <FaPinterestP className="w-7 h-7" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {submitStatus !== 'idle' && (
              <div
                className={`p-4 rounded-md text-center font-medium ${
                  submitStatus === 'success'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                }`}
              >
                {statusMessage}
              </div>
            )}

            <div>
              <input
                type="text"
                name="name"
                id="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                disabled={isLoading}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-rose focus:border-rose disabled:bg-gray-100 transition"
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                id="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                disabled={isLoading}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-rose focus:border-rose disabled:bg-gray-100 transition"
              />
            </div>

            <div>
              <textarea
                name="message"
                id="message"
                rows={6}
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                disabled={isLoading}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-rose focus:border-rose disabled:bg-gray-100 resize-none transition"
              />
            </div>

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-rose text-white font-medium uppercase tracking-wider py-4 rounded-md hover:bg-rose/90 transition disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;