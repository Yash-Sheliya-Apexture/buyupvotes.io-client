import React from 'react';
import GradientHeading from '../Components/GradientHeading';
import reddit1 from '../assets/Images/reddithappy.png';
import reddit2 from '../assets/Images/reddit_logo.png';
import reddit3 from '../assets/Images/reddit_smile.png';
import reddit4 from '../assets/Images/reddit_tangueup.png';
import reddit5 from '../assets/Images/reddit_teethsmile.png';
import reddit6 from '../assets/Images/reddit_wink.png';

const Service = () => {

    const servicesData = [
        {
            id: 1,
            title: "Automatic",
            description: "Lightning-fast panel setup. No waiting, no hassle. Just insert and order.",
            image: reddit1
        },
        {
            id: 2,
            title: "Support",
            description: "Technical support for all our services 24/7 to help you.",
            image: reddit2
        },
        {
            id: 3,
            title: "High quality services",
            description: "Get the best high quality services and in less time here.",
            image: reddit3
        },
        {
            id: 4,
            title: "Updates",
            description: "Services are updated daily In order to be further improved and to provide you with best experience",
            image: reddit4
        },
        {
            id: 5,
            title: "API Support",
            description: "We have API Support For panel owners so you can resell our services easily",
            image: reddit5
        },
        {
            id: 6,
            title: "Secure Payments",
            description: "We have Popular payment methods such as Crypto and many more can be enabled upon request",
            image: reddit6
        }
    ];


    return (
        /* Services Provide */
        <section className='Service-Wrap'>
            <div className="container mx-auto text-center">
                <div className="py-10">
                    <GradientHeading
                        tag="h2"
                        beforeText="What We "
                        gradientText="OFFER "
                        beforeSpanClassName="font-bold"
                        textSize="lg:text-4xl md:text-3xl text-2xl"
                        className="mb-10"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {servicesData.map(service => (
                            <div className="shadow-md border space-y-3 rounded-2xl border-slate-300 p-8" key={service.id}>
                                <img src={service.image} alt={service.title} className="mx-auto size-24" />
                                <h3 className="text-2xl font-medium text-main-color">{service.title}</h3>
                                <p className="text-primary text-small font-medium">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service;
