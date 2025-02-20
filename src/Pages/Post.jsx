import React from 'react'
import post_1 from "../assets/Images/post.png";

const Post = () => {
    return (
        <section className='my-10 bg-white'>
            <div className='container mx-auto'>
                <div className='flex lg:flex-row flex-col items-center lg:gap-0 gap-5'>
                    <div className="lg:w-1/2 w-full flex lg:justify-start justify-center">
                        <img src={post_1} alt="" className='' />
                    </div>

                    <div className="lg:w-1/2 w-full space-y-3">
                        <h2 className="md:text-3xl text-2xl font-bold capitalize text-sub-color -mt-6">Why do I <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#ffb087] via-[#ff6518] to-main-color'>need upvotes</span>  on my post?</h2>
                        <p className="md:text-medium text-small text-sub-color font-medium">Upvotes are Reddit's way of knowing if a post is good or not.</p>
                        <p className="md:text-medium text-small text-sub-color font-medium">Posts with the most Upvotes in a subreddit can climb positions and can get into the <span className='text-main-color font-bold'>"Hot"</span>  and <span className='text-main-color font-bold'>"Top"</span>  sections.</p>
                        <p className="md:text-medium text-small text-sub-color font-medium">With these Upvotes, you'll get your post to rank much higher on the subreddit, and users will see you before your competitors.</p>
                        <p className="md:text-medium text-small text-sub-color font-medium">If you want your posts to have many more views and be on top of everything, you need to help them with high-quality Upvotes.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Post