import React from "react";

function Newlater() {
  return (
    <section className="bg-gray-100 mt-20">
      <div className="container mx-auto md:px-20 py-16 text-center">
        <h1 className="font-bold text-3xl">SUBCRIBLE</h1>
        <div className="py-4">
          <input
            type="text"
            className="shadow border rounded-2xl w-9/12 py-3 text-gray-700 focus:outline-none focus:shadow-slate-400"
            placeholder="Enter your email"
          />
          
        </div>
        <button className="bg-orange-400 px-20 py-3 rounded-full text-gray-100">
            Subcribe
          </button>
      </div>
    </section>
  );
}

export default Newlater;
