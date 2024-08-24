import React from 'react'
import mapimg from '../assets/map.webp'
const MapSection = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mx-2 md:mx-52'>
            <img src={mapimg} alt="Location" className='max-w-full h-auto order-2 md:order-1 jumping-image' />
            <div className='md:mt-20 order-1 md:order-2'>
                <p className='py-4'>EXPERIENCE THE GROOVES</p>
                <h2 className='py-4'>Find your place</h2>
                <p>
                    Our interactive map will show you the way to the shops and restaurants that you want to see
                </p>
                <button className='flex justify-between items-center main-cta gap-5 mt-4'>
                    <a href="">Book Ticket</a>
                    <i className="fa-solid fa-arrow-right-long text-2xl"></i>
                </button>
            </div>
        </div>

    )
}

export default MapSection