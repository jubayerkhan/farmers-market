import { useEffect } from "react";
import { useState } from "react";
import Product from "../Product/Product";

const Products = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/products')
        .then(res => res.json())
        .then(data => {
            setProducts(data)
            console.log(data)
            })
    }, [])

    return (
        <div className="text-center">
            {/* <h2>This is product page {products.length}</h2> */}
            <div className="grid gap-3 grid-cols-2 place-items-center">
                {
                    products.map(product => <Product key={product.id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;