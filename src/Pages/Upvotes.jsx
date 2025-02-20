import React from 'react'
import Upvote from "../assets/Images/upvotes.png";

const Upvotes = () => {
    return (
        <section className='my-10 bg-white'>
            <div className='container mx-auto'>
                <div className="flex lg:flex-row flex-col items-center lg:gap-0 gap-5">
                    <div className="lg:w-1/2 w-full space-y-3 lg:order-1 order-2">
                        <h2 className="md:text-3xl text-2xl font-bold capitalize text-sub-color"> Who needs <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#ffb087] via-[#ff6518] to-main-color'>upvotes?</span> </h2>
                        <p className="md:text-medium text-small text-sub-color font-medium">Everyone who posts things on Reddit and wants to get more views.</p>
                        <p className="md:text-medium text-small text-sub-color font-medium">Our most common clients are:</p>
                        <ul className="list-disc pl-4 text-black space-y-1.5 capitalize">
                            <li className='marker:text-orange-500'>OnlyFans agencies</li>
                            <li className='marker:text-orange-500'>NSFW companies</li>
                            <li className='marker:text-orange-500'>Blockchain projects</li>
                            <li className='marker:text-orange-500'>Content creators</li>
                            <li className='marker:text-orange-500'>Prodcast</li>
                            <li className='marker:text-orange-500'>Ai projects</li>
                            <li className='marker:text-orange-500'>Thumbnail</li>
                        </ul>
                    </div>

                    <div className="lg:w-1/2 w-full flex lg:justify-start justify-center lg:order-2 order-1">
                        <img src={Upvote} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Upvotes