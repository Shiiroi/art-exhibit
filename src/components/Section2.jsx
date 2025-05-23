import React, { forwardRef } from "react";

const Section2 = forwardRef((props, ref) => (
  <div
    ref={ref}
    className="min-h-screen w-full bg-transparent flex items-center justify-center relative z-10"
  >
    <div className="bg-transparent px-8 py-4 rounded-xl shadow-xl max-w-2xl mx-auto">
      <h1 className="text-5xl font-bold text-white justify-center text-center">
        Filipino Resiliency Amidst Typhoons and Floods
      </h1>
      <p className="text-2xl leading-relaxed text-white justify-center text-center py-6">
        The Philippines is a country often struck by typhoons and floods.
        Despite these frequent disasters, Filipinos have shown remarkable
        resilience and strength. “Babangon tayo” is more than a phrase—
        it’s a testament to the Filipino spirit of never giving up, of
        always rising again after every challenge.
      </p>
    </div>
  </div>
));

export default Section2;