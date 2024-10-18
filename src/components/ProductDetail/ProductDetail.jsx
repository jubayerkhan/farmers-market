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
        <div>
            <h2>Product detail page of: {name}({_id}) </h2>
            <div className="grid md:grid-cols-4 gap-4">
                <div className="border md:col-span-3">
                    <img src={image} alt="" />
                    <p>Product detail: The tomato, Solanum lycopersicum, is a plant whose fruit is an edible berry that is culinarily used as a vegetable. The tomato is a member of the nightshade family that includes tobacco, potato, and chili peppers. </p>
                </div>
                <div className="border">
                    <p>Price:{price}</p>
                    <p>Quantity: {quantity}</p>
                    <p>Contact Number: +8801971206180</p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;