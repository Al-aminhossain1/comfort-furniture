import React from 'react';
import useProduct from '../../hooks/useProduct';
import bannar1 from '../../Images/bannar/bannar1.jpg'
import Inventory from '../Inventory/Inventory';
import Products from '../Products/Products';
const Home = () => {
    const [products] = useProduct();
    return (
        <div>

            <img className='w-100' src={bannar1} alt="" />
            <div className=' d-flex row my-5 m-5'>
                {
                    products.map(product => <Products key={product._id} product={product}></Products>
                    )
                }
                {/* {
                    products.map(product => <Inventory product={product}></Inventory>
                    )
                } */}
            </div>

        </div>
    );
};

export default Home;