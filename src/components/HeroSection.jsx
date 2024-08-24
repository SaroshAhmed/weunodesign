import React from 'react';

const HeroSection = () => {
    return (
        <div className="absolute inset-0 z-10 flex items-center text-white w-screen h-screen">
            <div className='bg-black bg-opacity-50 md:w-[50%]  w-full h-full flex items-center'>
                <div className="md:px-20 px-6 ">
                    <h3 className="text-xl pt-32">KHAWAJA YANNI</h3>
                    <h1 className="my-10 text-6xl">The new era of luxury</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere minima id culpa ullam blanditiis?</p>
                    <button className="flex justify-between items-center main-cta gap-5 mt-4">
                        <a href="">Book reservation now</a>
                        <i className="fa-solid fa-arrow-right-long text-2xl"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
