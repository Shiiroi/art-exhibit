import React from "react";

const Section9 = React.forwardRef(({ onReset }, ref) => (
  <section
    ref={ref}
    data-section9="true"
    className="w-screen min-h-screen h-fit flex items-center justify-center text-white overflow-auto relative py-16 px-4 bg-transparent"
  >
    <div className="w-full max-w-5xl flex flex-col items-center justify-center 
      backdrop-blur-md bg-white/10 border border-white/20 p-8 rounded-2xl shadow-2xl">
      <h2 className="text-3xl font-bold mb-6 text-center text-yellow-200 drop-shadow">
        Curatorial Note
      </h2>
      <p className="text-lg leading-relaxed text-justify opacity-95" style={{ wordBreak: 'break-word' }}>
        {/* Your existing content */}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod.
      </p>
      
      {/* Updated button with onReset callback */}
      <button 
        className="mt-12 px-8 py-4 bg-yellow-400 text-black font-bold text-xl rounded-full
        shadow-[0_0_15px_5px_rgba(250,204,21,0.7)] hover:shadow-[0_0_25px_8px_rgba(250,204,21,0.9)]
        transition-all duration-300 ease-in-out animate-pulse hover:animate-none
        transform hover:scale-105 hover:bg-yellow-300 uppercase tracking-wider"
        onClick={() => {
          // Call reset function AND open the URL
          onReset();
        }}
      >
        Call for Change
      </button>
    </div>
  </section>
));

export default Section9;
