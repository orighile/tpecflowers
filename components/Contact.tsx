import React, { useState } from 'react';
import emailjs from '@emailjs/browser'; 
import { SOCIAL_LINKS, CONTACT_DETAILS } from '../constants';
import { InstagramIcon, FacebookIcon, PinterestIcon } from './Icons';
import { FaPinterestP } from "react-icons/fa";

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isLoading, setIsLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [statusMessage, setStatusMessage] = useState('');

   
    const SERVICE_ID = 'service_td87mi8';
    const TEMPLATE_ID = 'template_4yilj9i';
    const PUBLIC_KEY = '9PFbUIRhzfhwNdmFb';

  
    emailjs.init(PUBLIC_KEY);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setSubmitStatus('idle');
        setStatusMessage('');

        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
          
        };

        try {
            const result = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams);
            console.log('Email sent successfully!', result.status, result.text); // For debugging

            setSubmitStatus('success');
            setStatusMessage('Thank you for your message! We will get back to you shortly.');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('Failed to send email:', error); // For debugging
            setSubmitStatus('error');
            setStatusMessage('Something went wrong. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-serif text-brand-dark mb-4">Get In Touch</h2>
                    <p className="text-lg text-gray-700">Ready to elevate your event? Contact us for a quote!</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="text-gray-700">
                        <h3 className="text-2xl font-serif text-brand-dark mb-6">Contact Information</h3>
                        <div className="space-y-4">
                            <p><strong>Email:</strong> <a href={`mailto:${CONTACT_DETAILS.email}`} className="text-rose hover:underline">{CONTACT_DETAILS.email}</a></p>
                            <p><strong>Phone:</strong> {CONTACT_DETAILS.phone}</p>
                            <p><strong>Location:</strong> {CONTACT_DETAILS.location}</p>
                        </div>
                        <h3 className="text-2xl font-serif text-brand-dark mt-10 mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-rose"><InstagramIcon className="w-6 h-6" /></a>
                            <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-rose"><FacebookIcon className="w-6 h-6" /></a>
                            <a href={SOCIAL_LINKS.pinterest} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-rose"><FaPinterestP  className="w-6 h-6" /></a>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {submitStatus !== 'idle' && (
                            <div className={`p-4 rounded-md ${
                                submitStatus === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                            }`}>
                                {statusMessage}
                            </div>
                        )}
                        <div>
                            <label htmlFor="name" className="sr-only">Name</label>
                            <input 
                                type="text" 
                                name="name" 
                                id="name" 
                                required 
                                value={formData.name} 
                                onChange={handleChange} 
                                placeholder="Name" 
                                disabled={isLoading}
                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-rose focus:border-rose disabled:bg-gray-100" 
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="sr-only">Email</label>
                            <input 
                                type="email" 
                                name="email" 
                                id="email" 
                                required 
                                value={formData.email} 
                                onChange={handleChange} 
                                placeholder="Email" 
                                disabled={isLoading}
                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-rose focus:border-rose disabled:bg-gray-100" 
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="sr-only">Message</label>
                            <textarea 
                                name="message" 
                                id="message" 
                                rows={5} 
                                required 
                                value={formData.message} 
                                onChange={handleChange} 
                                placeholder="Message" 
                                disabled={isLoading}
                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-rose focus:border-rose disabled:bg-gray-100"
                            ></textarea>
                        </div>
                        <div>
                            <button 
                                type="submit" 
                                disabled={isLoading}
                                className="w-full bg-rose text-white px-8 py-3 text-md font-medium uppercase tracking-wider hover:bg-opacity-90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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