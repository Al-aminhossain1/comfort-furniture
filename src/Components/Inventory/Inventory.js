import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ManageInventory from '../ManageInventory/ManageInventory';


const Inventory = () => {
    const { id } = useParams();


    const [product, setProduct] = useState({});
    // const { name, price, description, quantity, img } = product;
    const [quantity, setQuantity] = useState("")
    const [addQuantity, setAddQuantity] = useState(0)
    let totalQuantity = product.quantity;
    totalQuantity = quantity;
    console.log(totalQuantity);

    useEffect(() => {
        const url = `http://localhost:5000/product/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id])

    const handeldeliverd = () => {

        const newQuantity = parseInt(product.quantity) - 1;
        const makeQuantity = JSON.stringify(newQuantity);
        setQuantity(makeQuantity);

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
                console.log(data);
            })
    }
    const handelToAddQuantity = event => {
        setAddQuantity(event.target.value);
    }
    const handelAddQuantity = event => {
        event.preventDefault()
        const nowQuantity = product.quantity + parseInt(addQuantity);
        setQuantity(nowQuantity);
        console.log(quantity)
        const url = `http://localhost:5000/product/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(quantity)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }
    return (
        <div className='container d-flex'>
            <div className="card ml-5 mt-4 mx-auto" style={{ width: "22rem" }}>
                <img className="card-img-top" src={product.img} alt="" />
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.description}</p>
                    <p className="card-text"><span className='text-success font-weight-bold'>Price:</span>${product.price}</p>
                    <p className="card-text"><span className='text-success font-weight-bold'>Quantity:</span>{product.quantity}</p>

                    <button onClick={handeldeliverd} className='btn btn-primary'>Delivered</button>
                </div>
                <form className='text-center' >
                    <input onBlur={handelToAddQuantity} type="number" name="number" id="" />
                    <button onClick={handelAddQuantity} className=' m-2 btn btn-primary'>Add quantity</button>
                </form>
            </div>
            <div className='mt-5'>
                <Link to='/manageInventory'><button className='btn btn-success '>Manage Inventory</button></Link>
            </div>
        </div>
    );
};

export default Inventory; 