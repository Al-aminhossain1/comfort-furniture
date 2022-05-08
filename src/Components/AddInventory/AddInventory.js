import React from 'react';

const AddInventory = () => {
    const handelAddInventory = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;
        const description = event.target.description.value;
        const image = event.target.image.value;
        const product = { name, price, quantity, description, image };
        console.log(product);
        fetch('https://murmuring-ravine-82154.herokuapp.com/product/new', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                alert("product added successfully")
                event.target.reset();
            })
    }
    return (
        <div className='text-center mt-4'>

            <h3 className='text-success mb-3'>Please add new inventory</h3>
            <form onSubmit={handelAddInventory}>
                <input className='w-25 mt-2' type="text" name="image" id="" placeholder='Photo Url' required /><br />
                <input className='w-25 mt-2' type="text" name="name" id="" placeholder='name' /><br />
                <input className='w-25 mt-2' type="number" name="price" id="" placeholder='price' /><br />
                <input className='w-25 mt-2' type="number" name="quantity" id="" placeholder='quantity' /><br />
                <input className='w-25 mt-2' type="text" name="description" id="" placeholder='description' /><br />
                <input className='w-25 btn btn-success mt-1' type="submit" value="Add New Items" />
            </form>
        </div>
    );
};

export default AddInventory;