import React from 'react'

import { BiBed, BiBath, BiArea } from 'react-icons/bi';
import house from '@/components/House';
import Link from 'react-router-dom';

const PropertyDetails = () => {
    return (
        <section>
            <div className='container mx-auto min-h-[800px] mb-14'>
                <div className='flex flex-col lg:flex-row lg"items-center lg"justify-between'>
                    <div>
                        <h2 className='text-2xl'>{house.name}</h2>
                        <h3 className='text-lg mb-4'>{house.address}</h3>
                    </div>
                    <div className='mb-4 lg"mb-0 flex gap-x-2 text-sm'>
                        <div className='bg-green-500 text-white px-3 rounded-full'>
                            {house.type}
                        </div>
                        <div className='bg-violet-500 text-white px-3 rounded-full'>
                            {house.country}
                        </div>
                        <div className='text-3xl font-semibold text-violet-600'>$
                            {house.price}
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-start gap-8 lg:flex-row'>
                    <div className='max-w-[768px]'>
                        <div className='mb-8'>
                            <img src={house.imageLg} alt='' />
                        </div>
                        <div className='flex gap-x-6 text-violet-700 mb-6'>
                            <div className='flex gap-x-2 items-center'>
                                <BiBed className='text-2xl' />
                                <div>{house.bedrooms}</div>
                            </div>
                        </div>

                        <div>
                            <div className='flex gap-x-2 items-center'>
                                <BiBath className='text-2xl' />
                                <div>{house.bathrooms}</div>
                            </div>
                        </div>
                        
                        <div>
                            <div className='flex gap-x-2 items-center'>
                                <BiArea className='text-2xl' />
                                <div>{house.surface}</div>
                            </div>
                        </div>

                        {/* description */}
                        <div>{house.description}</div>
                    </div>

                    <div className='flex-1 bg-pink-100 w-full mb-8 border border-gray-300 rounded-lg px-6 py-8'>
                        <div className='flex items-center gap-x-4 mb-8'>
                                <div className='w-20 h-20 p-1 border border-gray-300 rounded-full'>
                                    <img src={house.arguments.image} alt=''/>
                                </div>
                            <div>
                                <div className='font-bold text-lg'>
                                    {house.agent.name}
                                </div>
                                <Link to='' className='text-violet-700 text-sm'>
                                    View Listings
                                </Link>
                            </div>
                        </div>

                        {/* form */}
                        <form>
                            <input></input>
                            <input></input>
                            <input></input>
                            <textarea></textarea>
                            <div>
                                <button>Send Message</button>
                                <button>Call</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default PropertyDetails
