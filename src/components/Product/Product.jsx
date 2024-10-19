import { Link } from "react-router-dom";

const Product = ({ product }) => {
    const { _id, name, image, quantity, price } = product;
    return (
        <div>
            <div className="card bg-blue-400 text-white w-96 shadow-xl m-4 rounded-md">
                <figure>
                    <img className="max-h-72"
                        src={image}
                        alt="vegetable" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Peice: {price} Taka/kg</p>
                    <p>Quantity: {quantity} kg</p>
                    <div className="card-actions justify-end">
                        <Link to={`/product/${_id}`}>
                            <button className="btn btn-primary">View detail</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;