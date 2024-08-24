import React from 'react'
import playimg from '../assets/play.webp'
import appimg from '../assets/app.webp'
import logo from '../assets/logo.webp'
import tiktok from '../assets/tiktok.webp'
import instagram from '../assets/gram.webp'
import xtwitter from '../assets/x.webp'
import snapchat from '../assets/snapchat.webp'
import visaimg from '../assets/visa.webp'
import expressimg from '../assets/express.webp'
import masterimg from '../assets/master.webp'

const FooterSec = () => {
  return (
    <div className='border-t-[1px] border-gray-400 pb-4'>
      <img src={logo} className='max-w-full h-auto md:hidden block mx-4 mt-5' alt="The Groves" />
      <div className='grid grid-cols-1 md:grid-cols-2 mx-2 md:ml-52 py-10'>
        <div>

          <h1>Join Us for an unforgettable experience</h1>
        </div>
        <div>
          <p className='my-4'>DOWNLOAD THE GROOVES APP</p>
          <div className='flex justify-start gap-6'>
            <img src={appimg} alt=" Appstore" className='max-w-full h-auto' />
            <img src={playimg} alt=" playstore" className='max-w-full h-auto' />
          </div>
        </div>
      </div>
      {/* QUICK LINKS */}
      <div>
        <div className='grid grid-cols-1 md:grid-cols-3 mx-2 gap-20 md:mx-52 py-10'>
          <div>
            <p className='mb-5'>LOCATION</p>
            <a className='text-white' href="">Al- Hizam Park, Al-Semairi, Yanbu Al Bahr 46455 Riyadh Saudia Arabia</a>
          </div>
          <div>
            <p className='mb-5'>WORKING HOURS</p>
            <a className='text-white' href="">Sun until Thurs: 4:00PM Fri & Sat 2:30PM</a>
            <p className='mt-4'>
              Gates Closes at:
            </p>
            <p>Sat until Wed: 12:00PM Thur & Fri: 12:30AM</p>
          </div>
          <div>
            <p className='mb-5'>GUEST SERVICE CALL</p>
            <div className='grid grid-cols-1 gap-5'>
              <a className='text-white' href="">cc@thegrooves-sa.com</a>
              <a href="" className='text-white'>920001672</a>
              <a href="" className='text-white'>+966566313039</a>

            </div>

          </div>
        </div>
          <div className='flex justify-between flex-wrap items-center gap-6 mx-2 md:mx-52'>
            <div>
              <img src={logo} className='max-w-full h-auto md:block hidden mx-2 mb-6' alt="The Groves" />
              <div className='grid grid-cols-1 md:grid-cols-3  text-white'>
                <div>
                  <a className='text-xs' href="">Terms & Condition</a>
                </div>
                <div>
                  <a className='text-xs' href="">Privacy Policy</a>

                </div>
                <div>
                  <a className='text-xs' href=""> ©2023 The Grooves for Entertainment</a>

                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-6">
                <img src={tiktok} className='w-6 h-6' alt="Tiktok" />
                <img src={instagram} className='w-6 h-6' alt="instagram" />
                <img src={xtwitter} className='w-6 h-6' alt="xtwitter" />
                <img src={snapchat} className='w-6 h-6' alt="snapchat" />
              </div>
              <div className="flex items-center gap-6 mt-6">
                <img src={visaimg} className='max-w-full h-auto' alt="visa" />
                <img src={masterimg} className='max-w-full h-auto' alt="master" />
                <img src={expressimg} className='max-w-full h-auto' alt="express" />
                
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default FooterSec