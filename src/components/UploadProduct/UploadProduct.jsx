
const UploadProduct = () => {
    return (
        <div className="flex justify-center">
            <form  className="grid gap-2 md:w-1/2 rounded-md m-4 p-4 bg-gradient-to-r from-green-800 to-blue-600" action="">
                <label className="input input-bordered flex items-center gap-2">
                    Name:
                    <input type="text" className="grow" placeholder="Name of the product" />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    Mobile:
                    <input type="text" className="grow" placeholder="Mobile number" />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    Quentity:
                    <input type="text" className="grow" placeholder="Amount of product" />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    Price:
                    <input type="text" className="grow" placeholder="Price of the product" />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    Detail:
                    <input type="text" className="grow" placeholder="Details of the product" />
                </label>
                <input
                    type="file"
                    className="file-input file-input-bordered file-input-success w-full max-w-xs" />
                <input className="btn btn-success" type="submit" />
            </form>
        </div>
    );
};

export default UploadProduct;