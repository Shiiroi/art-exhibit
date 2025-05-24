import React from "react";

const Section8_2 = React.forwardRef((props, ref) => (
  <section
    ref={ref}
    data-section8_2="true"
    className="w-screen h-screen flex items-center justify-center text-white overflow-hidden relative bg-transparent z-10"
  >
    <div className="flex items-center justify-center gap-8">
      {/* IMAGE LEFT */}
      <img
        src="https://scontent.fmnl3-1.fna.fbcdn.net/v/t1.6435-9/124871536_1202957220100515_894879013705557645_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=e00h1TtSicAQ7kNvwEoNW0b&_nc_oc=AdlY1LM_0FJn5BssoJF0QkGP-82n40ahgM-nL5GyLMmrTmgnAM3MblOQq7DtMv-k_Y8&_nc_zt=23&_nc_ht=scontent.fmnl3-1.fna&_nc_gid=zl-TAUNdmRSg_lMZthHRgw&oh=00_AfLdg2YIl3b598YED7Gcizsi0nuOt2mxcsRuuz8yB__P4w&oe=68588CA6"
        alt="Flooded street with people helping each other"
        className="max-w-[480px] max-h-[65vh] rounded-xl shadow-[0_0_12px_rgba(0,0,0,0.2)]"
      />
      {/* TEXT RIGHT */}
      <div className="flex flex-col items-start justify-center max-w-[400px] w-full">
        <h1 className="text-4xl font-extrabold mb-3 text-yellow-300 drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)] w-full text-left">
          Nakakapagod
        </h1>
        <p className="text-[1.15rem] leading-[1.7] opacity-90 text-justify drop-shadow-[0_1px_4px_rgba(0,0,0,0.3)]">
          An artwork by Tarantadong Kalbo. Inspired by a photo of a dog stranded on top 
          of a roof in San Mateo, Rizal during Typhoon Ulysses. 
          It stirred a debate on the topic of government accountability with its caption
          "Nakakapagod na maging resilient."
        </p>
      </div>
    </div>
  </section>
));

export default Section8_2;
