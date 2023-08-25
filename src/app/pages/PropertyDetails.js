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
                        <div>
                            {house.type}
                        </div>
                        <div>
                            {house.country}
                        </div>
                        <div>
                            {house.price}
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default PropertyDetails
