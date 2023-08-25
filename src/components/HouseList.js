import React from 'react';
import houses from './houseData';
import House from './House';
import Link from 'next/link'; // Import Link from 'next/link' for Next.js
// import { Link } from 'react-router-dom'; // Remove this line
import { ImSpinner } from 'react-icons/im';

const HouseList = () => {
  return (
    <section className='mb-20'>
      <div className='container mx-auto'>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14'> {/* Fixed typo in grid-cols-3 */}
          {houses.map((house) => (
            <div key={house.id}>
              <Link href={`/property/${house.id}`} key={house.id}> {/* Use href for Next.js Link */}
                <a>
                  <img src={house.image} alt={`House ${house.id}`} /> {/* Use img tag for images */}
                </a>
              </Link>
              <House house={house} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HouseList;
