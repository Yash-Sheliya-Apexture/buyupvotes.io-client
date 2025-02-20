import React from 'react';
import GradientHeading from '../Components/GradientHeading';


const Service = () => {

    const servicesData = [
        {
            id: 1,
            title: "Automatic",
            description: "Lightning-fast panel setup. No waiting, no hassle. Just insert and order.",
            image: "path/to/reddit_automatic.png" // Replace with actual path
        },
        {
            id: 2,
            title: "Support",
            description: "Technical support for all our services 24/7 to help you.",
            image: "path/to/reddit_support.png" // Replace with actual path
        },
        {
            id: 3,
            title: "High quality services",
            description: "Get the best high quality services and in less time here.",
            image: "path/to/reddit_high_quality.png" // Replace with actual path
        },
        {
            id: 4,
            title: "Updates",
            description: "Services are updated daily In order to be further improved and to provide you with best experience",
            image: "path/to/reddit_updates.png" // Replace with actual path
        },
        {
            id: 5,
            title: "API Support",
            description: "We have API Support For panel owners so you can resell our services easily",
            image: "path/to/reddit_api_support.png" // Replace with actual path
        },
        {
            id: 6,
            title: "Secure Payments",
            description: "We have Popular payment methods such as Crypto and many more can be enabled upon request",
            image: "path/to/reddit_secure_payments.png" // Replace with actual path
        }
    ];


    return (
        <section className='Service-Wrap my-5'>
            <div className="container mx-auto text-center">
                <div className="py-12">
                    <GradientHeading
                        tag="h2"
                        beforeText="What We "
                        gradientText="OFFER "
                        beforeSpanClassName="font-bold"
                        textSize="lg:text-4xl md:text-3xl text-2xl"
                        className="mb-5"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
                        {servicesData.map(service => (
                            <div className="text-center shadow-md border border-slate-300 p-6" key={service.id}>
                                <img src={service.image} alt={service.title} className="mx-auto mb-4 h-20 w-20" />
                                <h3 className="text-xl font-semibold text-main-color mb-2">{service.title}</h3>
                                <p className="text-primary text-small">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service;