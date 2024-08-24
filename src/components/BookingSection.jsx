import React from 'react';
import videoFrame from '../assets/video.webp';
import playbtn from '../assets/playbtn.webp';
import marquee1img from '../assets/slider1.webp';
import marquee2img from '../assets/slider2.webp';
import marquee3img from '../assets/slider3.webp';
import marquee4img from '../assets/slider4.webp';
import marquee5img from '../assets/slider5.webp';
import marquee6img from '../assets/slider6.webp';
import marquee7img from '../assets/slider7.webp';
import ImageMarquee from '../shared components/ImageMarquee';
import cardimg1 from '../assets/cardimgFirst.webp';
import cardimg2 from '../assets/cardimgTwo.webp';
import cardimg3 from '../assets/cardimgThree.webp';
import cardimg4 from '../assets/cardimgFour.webp';
import MapSection from '../shared components/MapSection';


const BookingSection = () => {
    
    const FirstMarqueeItems = [
        { src: marquee1img, text: 'Little Krazy' },
        { src: marquee2img, text: 'Hawanim Groves City' },
        { src: marquee3img, text: 'Picnic Market' },
        { src: marquee4img, text: 'Lucawa' },
    ];
    const SecondMarqueeItems = [
        { src: marquee5img, text: 'Resturants' },
        { src: marquee6img, text: 'Experiences' },
        { src: marquee7img, text: 'Events' },
    ];

    return (
        <>
            <section className='container mx-auto  py-20'>
                <h1 className='text-center '>Mall Of: Endless Possibilities</h1>
                <p className='text-center mx-4 md:mx-56 my-6'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book.
                </p>
                <div className='flex justify-center relative mt-6 mx-8'>
                    <img src={videoFrame} className='max-w-full h-auto' alt="videoplayer" />
                    <div className='w-20 h-20 bg-white rounded-full absolute top-16 md:top-52'></div>
                    <img src={playbtn} alt="play max-w-full h-auto" className='absolute top-[87px] z-50 md:top-[230px] cursor-pointer' />
                </div>
                <div className='mx-4 md:mx-48 p-6 mt-6 get-ticket-container'>
                    <h3 className='my-4'>25 SR/GUEST</h3>
                    <div className='flex justify-between'>
                        <div>
                            <h1 className='text-4xl mb-6'>Get your General Access Ticket</h1>
                            <p className='md:mr-36'>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit r since the 1500s, when an unknown printer took a galley of type and scrambled
                                it to make a type specimen book.
                            </p>
                        </div>
                        <i className="fa-solid fa-arrow-right text-4xl mt-48 md:mt-0 text-gray-400"></i>
                    </div>
                </div>
            </section>

            <section>
                <div className='mx-4 md:mx-52'>
                    <h1>Book General Access Ticket and enjoy the attractions for free</h1>
                    <button className='flex justify-between items-center main-cta gap-5 mt-4'>
                        <a href="">Book General Access Ticket</a>
                        <i className="fa-solid fa-arrow-right-long text-2xl"></i>
                    </button>
                </div>
                <div className='mx-4 md:ml-52 py-10'>
                    <ImageMarquee items={FirstMarqueeItems} />
                </div>


            </section>
            {/* CUISINE SECTION */}
            <section>
                <div>
                    <h1 className='text-center'>Experience the Finest Cuisine</h1>
                    <p className='text-center mx-4 md:mx-56 py-6'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                        it to make a type specimen book.
                    </p>
                </div>
                {/* cards */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mx-4 md:mx-52'>
                    <div className='rounded-lg get-ticket-container p-3 md:pb-10'>
                        <img src={cardimg1} alt="Vida Vera" className='max-w-full h-auto' />
                        <div className='flex justify-between items-center'>
                            <div>
                                <h3 className='md:py-4 px-2'>Vida Vera</h3>
                                <p className='tags'>100 SR PER REQUEST</p>
                            </div>
                            <div>
                                <i className="fa-solid fa-arrow-right text-4xl mt-10 md:mt-0 text-gray-400"></i>
                            </div>
                        </div>
                    </div>
                    <div className='rounded-lg get-ticket-container p-3 md:pb-10'>
                        <img src={cardimg2} alt="Zama Zulu" className='max-w-full h-auto' />
                        <div className='flex justify-between items-center'>
                            <div>
                                <h3 className='py-4 px-2'>Zama Zulu</h3>
                                <p className='tags'>100 SR PER REQUEST</p>
                            </div>
                            <div>
                                <i className="fa-solid fa-arrow-right text-4xl mt-10 md:mt-0 text-gray-400"></i>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='rounded-lg get-ticket-container p-3 md:pb-10'>
                            <img src={cardimg3} alt="Khawaji Yanni" className='max-w-full h-auto' />
                            <div className='flex justify-between items-center'>
                                <div>
                                    <h3 className='py-4 px-2'>Khawaji Yanni</h3>
                                    <p className='tags'>100 SR PER REQUEST</p>
                                </div>
                                <div>
                                    <i className="fa-solid fa-arrow-right text-4xl mt-10 md:mt-0 text-gray-400"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='rounded-lg get-ticket-container p-3 md:pb-10'>
                            <img src={cardimg4} alt="Yamagata" className='max-w-full h-auto' />
                            <div className='flex justify-between items-center'>
                                <div>
                                    <h3 className='py-4 px-2'>Yamagata</h3>
                                    <p className='tags'>100 SR PER REQUEST</p>
                                </div>
                                <div>
                                    <i className="fa-solid fa-arrow-right text-4xl mt-10 md:mt-0 text-gray-400"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/*CURATE YOUR EXPERIENCE SECTION */}
            <section>
                <div className='grid grid-cols-1 md:grid-cols-2 mx-4 md:ml-52 py-10'>
                    {/* TEXT DIV */}
                    <div>
                        <h2 >Curate your experience as you like</h2>
                        <button className='flex justify-between items-center main-cta gap-5 mt-4'>
                            <a href="">Book Ticket</a>
                            <i className="fa-solid fa-arrow-right-long text-2xl"></i>
                        </button>
                    </div>
                    <div className='py-10'>
                        <ImageMarquee items={SecondMarqueeItems} />
                    </div>
                </div>
            </section>

            {/* MAP SECTION */}
            <section>
                <MapSection/>
            </section>
        </>
    );
};

export default BookingSection;
