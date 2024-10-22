
const TransportAndDelivery = () => {
    return (
        <div className="text-white">
            <div className="text-center">
                <h1 className="text-6xl">Transport And Distribution system.</h1>
                <p>Exceptional Service, Advanced Technology, Unforgettable Partnerships</p>
            </div>
            <img className="mb-4 w-full h-[500px]" src="https://images.pexels.com/photos/27099095/pexels-photo-27099095/free-photo-of-kenworth-t680-semi-trailer-truck-driving-down-the-road.jpeg" alt="" />
            <div className="ml-4">
                <div className="mr-8 text-center">
                    <p>For issues and booking the transport</p>
                    <h3 className="text-5xl ">Talk to an Expert</h3>
                    <h4 className="text-3xl">Phone: +8801512345600</h4>
                    <h4 className="text-3xl">Email: farmersmarket@gmail.com</h4>
                </div>
            </div>
            <div className="mt-4">
                <h2 className="text-5xl text-center underline m-6">Transport</h2>
                <div className="grid grid-cols-2 ml-4 gap-4">
                    <div>
                        <p className="text-3xl ">Regular Truck: </p>
                        <p>Cost per Kg: 5 Taka <br />
                            Maximum capacity: 10 ton
                        </p>
                    </div>
                    <div>
                        <img src="https://media.istockphoto.com/id/1138550166/photo/old-cab-over-big-rig-semi-truck-transporting-pears-in-wooden-boxes-on-flat-bed-semi-trailer.jpg?s=2048x2048&w=is&k=20&c=NLPEjTu047IAp4UZqfG8V5wGAENmkuKI5dlai0B_QFg=" alt="truck" />
                    </div>
                </div>
                {/* freezing truck  */}
                <div className="grid grid-cols-2 gap-4 m-4">
                    <div>
                        <p className="text-3xl textw">Freezer Truck: </p>
                        <p>Cost per Kg: 10 Taka <br />
                            Maximum capacity: 5 ton
                        </p>
                    </div>
                    <div>
                        <img src="https://www.hbylh.com/uploads/202130808/4x2-refrigerator-truck06319765685.jpg" alt="truck" />
                    </div>
                </div>
            </div>
            <div className="my-4 text-center">
                <h2 className="text-3xl text-center mb-4">Payment Mathods</h2>
                <p>
                Bkash No: 01971206180 <br />
                Bank Account: 400234111224557, Dhanmondi Brunch, Dhaka. <br />
                Credit Card No: 4777980900220099
                </p>
                <p>Platform charge 10 taka per kg</p>
            </div>
        </div>
    );
};

export default TransportAndDelivery;