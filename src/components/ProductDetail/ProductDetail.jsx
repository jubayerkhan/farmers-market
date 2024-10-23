import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
    const {id} = useParams();

    const [product, setProduct] = useState([])

    
    useEffect(() => {
        fetch(`http://localhost:3000/products/${id}`)
        .then(res => res.json())
        .then(data => {
            setProduct(data)
            console.log(data)
            })
    }, [])

    const { _id, name, image, quantity, price, detail } = product;

    return (
        <div className="text-white m-4">
            <h2 className="text-2xl my-4">Name of product: {name} (id: {_id}) </h2>
            <div className="grid md:grid-cols-4 gap-4">
                <div className="md:col-span-2">
                    <img className="rounded-xl" src={image} alt="" />
                </div>
                <div className="text-xl">
                    <p>Price:{price}</p>
                    <p>Quantity: {quantity}</p>
                    <p>Contact Number: +8801971206180</p>
                    <p className="py-4"> Product detail: {detail} </p>
                    <button className="btn btn-success">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;