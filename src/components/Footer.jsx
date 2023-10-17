import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs';
import './footer.css'

const Footer = () => {
    const [footerText, setFooterText] = useState("");
    const handleSearchText = (e) => {
        setFooterText(e.target.value)
    }
    return (
        <div class="footer-container">
            <div class="footer-head">
                <div className='ml-4 '>
                    <h2 className='text-lg font-semibold mt-2'>Product Sell</h2>
                    <p className='text-slate-400 mt-3 text-sm'>Product Name</p>
                </div>
                <div>
                    <div className='flex gap-8 mt-2 mr-4'>
                        <div>
                            <button class='footer-btn'><BsSearch size={12} /></button>
                            <input type="text" placeholder='      Search' value={footerText} onChange={handleSearchText} className='rounded-md' />
                        </div>

                        <select name="lastDays" id="Days" className='rounded-sm'>
                            <option value="Last 30 Days">Last 30 Days</option>
                            <option value="Last 60 Days">Last 60 Days</option>
                            <option value="Last 90 Days">Last 90 Days</option>
                        </select>
                    </div>

                    <div className='flex gap-20 text-slate-500 mt-5 mb-1 text-sm'>
                        <p>Stack</p>
                        <p>Price</p>
                        <p>Total Sales</p>
                    </div>
                </div>
            </div>
            <hr className='mt-4'/>

            <div className='flex justify-between absolute bottom-0 w-[1000px]'>
                {/* left div */}
                <div>
                    <div className='flex gap-4 mb-4'>
                        <img src="../src/image/image1.jpg" alt="" className=' h-12 w-18 rounded-md ' />
                        <div className='flex flex-col'>
                            <p className='font-semibold'>Abstract 3D</p>
                            <p className='text-sm text-slate-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    <div className='flex gap-4 mb-2'>
                        <img src="../src/image/image2.jpg" alt="" className=' h-13 w-16 rounded-md ' />
                        <div className='flex flex-col '>
                            <p className='font-semibold'>Sarphens Illustration</p>
                            <p className='text-sm text-slate-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>

                </div>
                {/* right div */}
                <div className='mr-4 mt-6'>
                    <div className='flex gap-20'>
                        <p>32 in stock</p>
                        <p>$45.99</p>
                        <p>20</p>
                    </div>

                    <div className='flex gap-20 mt-10'>
                        <p>32 in stock</p>
                        <p>$45.99</p>
                        <p>20</p>
                    </div>

                </div>
            </div>


        </div>
    )
}

export default Footer