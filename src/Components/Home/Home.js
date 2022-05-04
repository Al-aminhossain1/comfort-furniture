import React from 'react';
import useProduct from '../../hooks/useProduct';
import bannar1 from '../../Images/bannar/bannar1.jpg'

import Products from '../Products/Products';
const Home = () => {
    // const [products] = useProduct();
    return (
        <div>

            <img className='w-100' src={bannar1} alt="" />
            <div >
                {/* {
                    products.map(product => <Products key={product._id} product={product}></Products>
                    )
                } */}
                <Products></Products>
            </div>

        </div>
    );
};

export default Home;