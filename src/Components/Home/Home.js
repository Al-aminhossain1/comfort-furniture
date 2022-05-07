import React from 'react';

import bannar1 from '../../Images/bannar/bannar1.jpg'

import Products from '../Products/Products';
const Home = () => {
    // const [products] = useProduct();
    return (
        <div>

            <img className='w-100' src={bannar1} alt="" />
            <div >

                <Products></Products>
            </div>

        </div>
    );
};

export default Home;