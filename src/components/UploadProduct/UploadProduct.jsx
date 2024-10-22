import { useState } from 'react';

const UploadProduct = () => {
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        quantity: '',
        price: '',
        detail: '',
    });
    const [file, setFile] = useState(null);

    // Handle input changes for text fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle file change
    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Create a FormData object to store form values and the file
        const data = new FormData();
        data.append('name', formData.name);
        data.append('mobile', formData.mobile);
        data.append('quantity', formData.quantity);
        data.append('price', formData.price);
        data.append('detail', formData.detail);
        if (file) {
            data.append('file', file); // Append the file to FormData
        }

        try {
            const response = await fetch('http://localhost:3000/products', {
                method: 'POST',
                body: data, // No need to stringify FormData
            });

            const result = await response.json();
            if (response.ok) {
                alert('Product added successfully!');
            } else {
                alert('Failed to add product: ' + result.message);
            }
        } catch (error) {
            console.error('Error submitting the form:', error);
            alert('An error occurred while adding the product.');
        }
    };

    return (
        <div className="flex justify-center">
            <form className="grid gap-2 md:w-1/2 rounded-md m-4 p-4 bg-gradient-to-r from-green-800 to-blue-600" onSubmit={handleSubmit}>
                <label className="input input-bordered flex items-center gap-2">
                    Name:
                    <input type="text" className="grow" name="name" onChange={handleChange} placeholder="Name of the product" />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    Mobile:
                    <input type="text" className="grow" name="mobile" onChange={handleChange} placeholder="Mobile number" />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    Quantity:
                    <input type="text" className="grow" name="quantity" onChange={handleChange} placeholder="Amount of product" />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    Price:
                    <input type="text" className="grow" name="price" onChange={handleChange} placeholder="Price of the product" />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    Detail:
                    <input type="text" className="grow" name="detail" onChange={handleChange} placeholder="Details of the product" />
                </label>
                <input type="file" className="file-input file-input-bordered file-input-success w-full max-w-xs" onChange={handleFileChange} />
                <input className="btn btn-success" type="submit" value="Add Product" />
            </form>
        </div>
    );
};

export default UploadProduct;
