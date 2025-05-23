import React from "react";

const Section1 = ({ sectionRef }) => (
  <div ref={sectionRef} className="min-h-screen w-full bg-transparent flex items-center justify-center relative z-10">
    <div className="bg-transparent px-8 py-4 rounded-xl shadow-xl max-w-2xl mx-auto">
      <h1 className="text-8xl font-bold text-white text-center">
        Babangon tayo?
      </h1>
    </div>
  </div>
);

export default Section1;