import React from "react";

const Section8_3 = React.forwardRef((props, ref) => (
  <section
    ref={ref}
    data-section8_3="true"
    className="w-screen h-screen flex items-center justify-center text-white overflow-hidden relative bg-transparent z-10"
  >
    <div className="flex items-center justify-center gap-8">
      {/* IMAGE LEFT */}
      
      <img
        src="/power.jpg"
        alt="artwork"
        className="max-w-[480px] max-h-[65vh] rounded-xl shadow-[0_0_12px_rgba(0,0,0,0.2)]"
      />
      {/* TEXT RIGHT */}
      <div className="flex flex-col items-start justify-center max-w-[400px] w-full">
        <h1 className="text-4xl font-extrabold mb-3 text-yellow-300 drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)] w-full text-left">
          Demand Accountability
        </h1>
        <p className="text-[1.15rem] leading-[1.7] opacity-90 text-justify drop-shadow-[0_1px_4px_rgba(0,0,0,0.3)]">
        An artwork by @allweknowiscj on X. Symbolizes on how th government is in a comfortable position while
        the its people suffer from the consequences of their incompetence. Demanding accountability and refuses to glorify resiliency. 
        </p>
      </div>
    </div>
  </section>
));

export default Section8_3;
