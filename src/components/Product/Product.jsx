import { Link } from "react-router-dom";

const Product = ({ product }) => {
    const { _id, name, image, quantity, price } = product;
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img className="max-h-72"
                        src={image}
                        alt="vegetable" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Peice: {price} Taka/kg</p>
                    <p>Quantity: {quantity}</p>
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