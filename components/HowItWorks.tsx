import React from 'react';

const steps = [
    {
        step: 1,
        title: 'Choose your wall',
        description: 'Take a look at our collection and choose the perfect flower wall for your event. Need a custom design? We can help with that too!'
    },
    {
        step: 2,
        title: 'Book your wall',
        description: 'Send us an inquiry with your event details. We’ll confirm availability and send you a contract and invoice to secure your date.'
    },
    {
        step: 3,
        title: 'We deliver & set up',
        description: 'On the day of your event, we’ll deliver, set up, and style your flower wall. After the event, we’ll return to take it down.'
    }
];

const HowItWorks: React.FC = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-serif text-brand-dark mb-4">How It Works</h2>
                    <p className="text-lg text-gray-700">Renting a flower wall is simple and hassle-free.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    {steps.map(item => (
                        <div key={item.step}>
                            <div className="flex items-center justify-center mb-4">
                                <div className="w-16 h-16 rounded-full bg-rose text-white flex items-center justify-center text-2xl font-bold">
                                    {item.step}
                                </div>
                            </div>
                            <h3 className="text-2xl font-serif text-brand-dark mb-2">{item.title}</h3>
                            <p className="text-gray-700">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default HowItWorks;