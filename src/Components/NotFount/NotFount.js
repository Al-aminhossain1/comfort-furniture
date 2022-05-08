import React from 'react';
import notFount from './images/ProductNotFound.png'

const NotFount = () => {
    return (
        <div className='container d-flex justify-content-center'>
            <img src={notFount} alt="" />
        </div>
    );
};

export default NotFount;