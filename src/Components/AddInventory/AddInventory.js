import React from 'react';

const AddInventory = () => {
    const handelAddInventory = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;
        const description = event.target.description.value;
        const product = { name, price, quantity, description };
        console.log(product);
        fetch('http://localhost:5000/product/new', {
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
        <div className='text-center'>

            <h6>please add new inventory</h6>
            <form onSubmit={handelAddInventory}>
                <input type="text" name="name" id="" placeholder='name' /><br />
                <input type="number" name="price" id="" placeholder='price' /><br />
                <input type="number" name="quantity" id="" placeholder='quantity' /><br />
                <input type="text" name="description" id="" placeholder='description' /><br />
                <input type="submit" value="Add New Items" />
            </form>
        </div>
    );
};

export default AddInventory;