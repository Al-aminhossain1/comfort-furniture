import React from 'react';


const AllInventory = ({ product }) => {

    const { name, price, description, quantity, img, _id } = product;
    const handelDeleteItem = id => {
        const url = `http://localhost:5000/product/${id}`;
        fetch(url, {
            method: "DELETE",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const procced = window.confirm('are you want to delete this item');
                if (procced) {
                    console.log('delete this item');
                }
            })
    }

    return (
        <div>
            <div className='col-sm-12 col -md-6 col-lg-4 mt-5'>
                <div className="card" style={{ width: "18rem", height: "30rem" }}>
                    <img className="card-img-top w-100" src={img} alt="" />
                    <div className="card-body">
                        <h5 className="card-title text-center">{name}</h5>
                        <p className="card-text"><span className='text-primary font-weight-bold'>Price</span>:${price}</p>
                        <p className="card-text"> <span className='text-primary font-weight-bold'>Quantity</span>:{quantity}</p>
                        <p className="card-text">{description}</p>
                        <p>{_id}</p>
                        <button onClick={() => handelDeleteItem(_id)} className="btn btn-primary d-flex justify-content-center">Delete</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AllInventory;