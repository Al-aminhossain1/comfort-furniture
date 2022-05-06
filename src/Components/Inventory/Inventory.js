import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ManageInventory from '../ManageInventory/ManageInventory';


const Inventory = () => {
    const { id } = useParams();


    const [product, setProduct] = useState({});
    // const { name, price, description, quantity, img } = product;
    const [quantitys, setQuantitys] = useState(10)
    const [addProduct, setAddProduct] = useState(0)

    useEffect(() => {
        const url = `http://localhost:5000/product/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id])

    const handeldeliverd = () => {
        const newQuantity = product.quantity - 1;
        setQuantitys(newQuantity);
        console.log(quantitys);
        const url = `http://localhost:5000/product/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(quantitys)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }
    const handelToAddQuantity = event => {
        setAddProduct(event.target.value);
    }
    const handelAddQuantity = event => {
        event.preventDefault()
        const newqan = product.quantity + parseInt(addProduct);
        setQuantitys(newqan);
        // console.log(newqan);
        console.log(quantitys)
    }
    return (
        <div>
            <div className="card ml-5 text-center mx-auto" style={{ width: "18rem" }}>
                <img className="card-img-top" src={product.img} alt="" />
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">Price:{product.price}</p>
                    <p className="card-text">Quantity:{product.quantity}</p>
                    <p className="card-text">{product.description}</p>

                    <button onClick={handeldeliverd} className='btn btn-primary'>Delivered</button>
                </div>
            </div>
            <form >
                <input onBlur={handelToAddQuantity} type="number" name="number" id="" />
                <button onClick={handelAddQuantity}>add quantity</button>
            </form>
            <div className='d-flex justify-content-center'>
                <Link to='/manageInventory'><button className='btn btn-primary '>Manage Inventory</button></Link>
            </div>
        </div>
    );
};

export default Inventory; 