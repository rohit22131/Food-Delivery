import React from "react";
import qualityImage from "../../assets/quality food.png"; // Image representing food quality
import valueImage from "../../assets/sm1.png"; // Image representing value for money
import deliveryImage from "../../assets/ontime.png"; // Image representing on-time delivery

const SmBanner = () => {
  return (
    <>
    <div className="bg-gray-50 flex flex-col justify-center items-center md:flex-row lg:flex-row justify-between items-center px-10 lg:px-30 py-8 gap-6 lg:gap-40">
        <h1 className="text-xl text-center sm:text-center md:text-3xl lg:text-5xl font-bold lg:font-extrabold">Lorem <span className="text-orange-600">ipsum dolor</span> sit amet.</h1>
        <p className="text-gray-800 text-center sm:text-center text-md font-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, illum modi recusandae autem pariatur vel!</p>
    </div>
    <div className="py-16">
      <div className="container mx-auto px-4 lg:px-40 grid grid-cols-1 md:grid-cols-3 gap-20">

        {/* Food Quality */}
        <div className="text-center space-y-4">
          <img
            src={qualityImage}
            alt="High-quality food"
            className="mx-auto max-w-auto h-60 p-4"
          />
          <h3 className="text-xl font-semibold text-gray-800">Quality Food</h3>
        </div>

        {/* Value for Money */}
        <div className="text-center space-y-4">
          <img
            src={valueImage}
            alt="Value for money"
            className="mx-auto max-w-auto h-60"
          />
          <h3 className="text-xl font-semibold text-gray-800">Best Prices</h3>
        </div>

        {/* On-Time Delivery */}
        <div className="text-center space-y-4">
          <img
            src={deliveryImage}
            alt="On-time delivery"
            className="mx-auto max-w-auto h-60 py-8"
          />
          <h3 className="text-xl font-semibold text-gray-800">On-Time Delivery</h3>
        </div>

                {/* On-Time Delivery */}
                {/* <div className="text-center space-y-4">
        <img
            src={deliveryImage}
            alt="On-time delivery"
            className="mx-auto max-w-full rounded-lg shadow-md"
        />
        <h3 className="text-xl font-semibold text-gray-800">On-Time Delivery</h3>
        </div> */}
      </div>
    </div>
    </>
  );
};


export default SmBanner;
