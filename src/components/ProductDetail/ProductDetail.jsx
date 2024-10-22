import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
    const {id} = useParams();

    const [detail, setDetail] = useState([])

    
    useEffect(() => {
        fetch(`http://localhost:3000/products/${id}`)
        .then(res => res.json())
        .then(data => {
            setDetail(data)
            console.log(data)
            })
    }, [])

    const { _id, name, image, quantity, price } = detail;

    return (
        <div className="text-white m-4">
            <h2 className="text-2xl my-4">Name of product: {name} (id: {_id}) </h2>
            <div className="grid md:grid-cols-4 gap-4">
                <div className="md:col-span-2">
                    <img className="rounded-xl" src={image} alt="" />
                    <p>Product detail: The tomato, Solanum lycopersicum, is a plant whose fruit is an edible berry that is culinarily used as a vegetable. The tomato is a member of the nightshade family that includes tobacco, potato, and chili peppers. </p>
                </div>
                <div className="text-xl">
                    <p>Price:{price}</p>
                    <p>Quantity: {quantity}</p>
                    <p>Contact Number: +8801971206180</p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;