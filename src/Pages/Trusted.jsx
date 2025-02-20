
import React from 'react';
import GradientHeading from '../Components/GradientHeading';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Trusted = () => {
    const data = [
        {
            id: 1,
            value: 100,
            suffix: "K+",
            description: "Upvotes delivered",
        },
        {
            id: 2,
            value: 50,
            suffix: "+",
            description: "Account growth",
        },
        {
            id: 3,
            value: 1000,
            suffix: "+",
            description: "Clients served",
        },
    ];

    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });

    return (
        <section className="bg-white pt-10" ref={ref}>
            <div className="container mx-auto">
                <div className='flex justify-center items-center'>
                    <GradientHeading
                        tag="h2"
                        beforeText="Our Social Media "
                        gradientText="Growth Stats! "
                        beforeSpanClassName="font-bold"
                        textSize="lg:text-4xl md:text-3xl text-2xl"
                        className="mb-5"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:py-10 py-5">
                    {data.map((item) => (
                        <div key={item.id} className="flex flex-col items-center justify-center space-y-5 md:border-none border-b border-gray-300 md:pb-0 pb-5">
                            <div className="lg:text-5xl text-3xl font-medium">
                                <span className="text-main-color">
                                    <CountUp
                                        start={0}
                                        end={inView ? item.value : 0}
                                        duration={2}
                                        separator=","
                                    />
                                </span>
                                <span className="text-primary lg:text-5xl text-3xl">{item.suffix}</span>
                            </div>
                            <p className="text-center capitalize text-primary lg:text-medium font-medium">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Trusted;