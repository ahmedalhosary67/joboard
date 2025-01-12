import React from "react";

const Hero: React.FC = () => {
  return (
    <section className=" p-10">
      <div className="">
        <div className="flex flex-grow flex-col">
          <h2 className="text-3xl font-semibold mb-4">
            Find your <span className="text-blue-500">new job</span> today
          </h2>
          <p className="text-gray-500 mb-4">
            Thousands of jobs in the computer, engineering and technology
            sectors are waiting for you
          </p>
          <div className="flex flex-wrap">
            <input
              type="text"
              placeholder={"What position are you looking for ?"}
              className="px-4 py-2 border border-gray-300 rounded-l flex-grow"
            />
            <input
              type="text"
              placeholder="Location"
              className="px-4 py-2 border border-gray-300 rounded-r flex-grow"
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-r">
              Search job
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
