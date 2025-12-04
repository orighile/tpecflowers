import React, { useState } from 'react';
import { FAQS } from '../constants';
import { ChevronDownIcon } from './Icons';

interface FAQItemProps {
    question: string;
    answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-200 py-6">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center text-left text-lg font-medium text-brand-dark"
            >
                <span>{question}</span>
                <ChevronDownIcon className={`w-5 h-5 transition-transform duration-300 text-rose ${isOpen ? 'transform rotate-180' : ''}`} />
            </button>
            <div
                className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
            >
                <div className="overflow-hidden">
                    <p className="pt-4 text-gray-700">
                        {answer}
                    </p>
                </div>
            </div>
        </div>
    );
};


const FAQ: React.FC = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-serif text-brand-dark mb-4">Frequently Asked Questions</h2>
                </div>
                <div>
                    {FAQS.map((faq, index) => (
                        <FAQItem key={index} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;