import React from "react";
import Container from "../Container";
import { FaUserShield } from "react-icons/fa";

function EnquiryChoose() {
  return (
    <div className="py-2 -mt-4 rounded-md mb-20 relative">
      <Container className={"px-5 space-y-5 relative"}>
        {/* Enquiry Form Section */}
        <div className="md:flex md:flex-row md:space-x-5">
          <div className="md:w-1/2 relative">
            {/* Background Image */}
            <div
              className="absolute inset-0 w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url('/enquirychoose.jpg')`,
              }}
            ></div>
            {/* Transparent White Overlay */}
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-opacity-50 bg-black flex flex-col justify-center items-center text-white">
              <div className="bg-white bg-opacity-70 p-6 rounded-md">
                <h2 className="text-4xl font-bold mb-4 text-center">
                  Real Estate Inquiry Form
                </h2>
                <form className="w-full max-w-sm">
                  {/* Inquiry Type */}
                  <div className="flex flex-wrap mb-6">
                    <div className="w-full px-3">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="inquiryType"
                      >
                        Inquiry Type
                      </label>
                      <div className="relative">
                        <select
                          id="inquiryType"
                          name="inquiryType"
                          className="block appearance-none w-full bg-white border border-gray-400 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-gray-500 bg-gray-200"
                          style={{
                            backgroundColor: "rgba(255, 255, 255, 0.5)",
                          }}
                        >
                          <option>Select</option>
                          <option>Property Seeker</option>
                          <option>Property Seller</option>
                          <option>Acquaintance</option>
                          <option>Careers</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  {/* Personal Info */}
                  <div className="flex flex-wrap mb-6">
                    <div className="w-full px-3">
                      <label
                        className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                        htmlFor="name"
                      >
                        Name
                      </label>
                      <div className="relative flex items-center">
                        <select
                          id="namePrefix"
                          name="namePrefix"
                          className="block appearance-none bg-white border border-gray-400 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-gray-500 mr-2"
                        >
                          <option>Select</option>
                          <option>Mr</option>
                          <option>Mrs</option>
                        </select>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          className="appearance-none block w-full bg-white border border-gray-400 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-gray-500"
                          placeholder="Your Name"
                        />
                      </div>
                    </div>
                    <div className="w-full px-3">
                      <label
                        className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        className="appearance-none block w-full bg-white border border-gray-400 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-gray-500"
                        placeholder="Your Mail"
                      />
                    </div>
                  </div>
                  {/* Additional Info */}
                  <div className="flex flex-wrap mb-6">
                    <div className="w-full px-3 md:w-1/2">
                      <label
                        className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                        htmlFor="maxPrice"
                      >
                        Max Price
                      </label>
                      <input
                        id="maxPrice"
                        name="maxPrice"
                        type="text"
                        className="appearance-none block w-full bg-white border border-gray-400 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-gray-500"
                        placeholder="Max Price"
                      />
                    </div>
                    <div className="w-full px-3 md:w-1/2">
                      <label
                        className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                        htmlFor="minSize"
                      >
                        Minimum Size (Sq Ft)
                      </label>
                      <input
                        id="minSize"
                        name="minSize"
                        type="text"
                        className="appearance-none block w-full bg-white border border-gray-400 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-gray-500"
                        placeholder="Minimum Size"
                      />
                    </div>
                  </div>
                  {/* Submit Button */}
                  <div className="flex justify-center">
                    <button
                      type="submit"
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* Why Choose Us Section */}
          <div className="md:w-1/2">
            <div className="bg-[#F0F9FF] border p-5 rounded-lg h-96 relative">
              <div className="flex justify-between gap-5">
                <div className="heading md:flex items-center gap-2 mb-2 ">
                  <div className="rounded-full bg-[#F0F9FF] p-4 h-[80px] w-[80px] flex items-center justify-center">
                    <FaUserShield size={72} />
                  </div>
                  <div className="">
                    <h2 className="text-smc">Why Choose Us</h2>
                    <p className="text-smc">
                      Choices of wide range of properties
                    </p>
                  </div>
                </div>
              </div>
              <div className="md:flex md:flex-col md:gap-5">
                <div className="shadow-lg bg-white p-5 rounded-lg space-y-3 md:w-full mb-2">
                  <h3 className="text-xl font-semibold">Team of Experts</h3>
                  <p>
                    Our proactive team will help you in selecting the property
                    that best fits you. It doesn't end there, we help you
                    throughout the entire process.
                  </p>
                </div>
                <div className="shadow-lg bg-white p-5 rounded-lg space-y-3 md:w-full mb-2">
                  <h3 className="text-xl font-semibold">Financing Made Easy</h3>
                  <p>
                    Good properties come with a price. But worry not, we offer
                    them at the best rates possible and also offer finance
                    options to get you your dream property.
                  </p>
                </div>
                <div className="shadow-lg bg-white p-5 rounded-lg space-y-3 md:w-full mb-2">
                  <h3 className="text-xl font-semibold">
                    Trusted by Thousands
                  </h3>
                  <p>
                    1108 clients have been served so far and we are keen on
                    serving thousands more. Putting a smile on our client's face
                    is our priority.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default EnquiryChoose;
