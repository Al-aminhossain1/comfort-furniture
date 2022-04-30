import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const Inventory = () => {
    const { id } = useParams();

    const [product, setProduct] = useState({});
    const { name, price, description, img } = product;
    const [quantity, setQuantity] = useState(0)
    useEffect(() => {
        const url = `http://localhost:5000/product/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id])

    const handeldeliverd = () => {
        const url = `http://localhost:5000/product/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                const newQuantity = quantity - 1;
                setQuantity(newQuantity);
            })
    }
    return (
        <div className="card ml-5 text-center" style={{ width: "18rem" }}>
            <img className="card-img-top" src={img} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Price:{price}</p>
                <p className="card-text">Quantity:{product.quantity}</p>
                <p className="card-text">{description}</p>

                <button onClick={handeldeliverd} className='btn btn-primary'>Delivered</button>
            </div>
        </div>
    );
};

export default Inventory; 