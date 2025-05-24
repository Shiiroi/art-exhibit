import React from "react";

const Section9 = React.forwardRef(({ onReset }, ref) => (
  <section
    ref={ref}
    data-section9="true"
    className="w-screen min-h-screen h-fit flex items-center justify-center text-white overflow-auto relative py-16 px-4 bg-transparent"
  >
    <div
      className="w-full max-w-5xl flex flex-col items-center justify-center 
      backdrop-blur-md bg-white/10 border border-white/20 p-8 rounded-2xl shadow-2xl"
    >
      <h2 className="text-3xl font-bold mb-6 text-center text-yellow-200 drop-shadow">
        Curatorial Note
      </h2>
      <div className="space-y-6">
        <p className="text-lg leading-relaxed text-justify opacity-95 indent-8">
          Filipinos are known to be resilient no matter the problem they face.
          From typhoons, floods, or any other calamities, the people always find a
          way to smile, rise again, and move forward. They continue to overcome any
          challenge over and over again. While this kind of strong spirit is an
          amazing trait, has it come to a point of abuse and excuse by those with
          power?
        </p>
        <p className="text-lg leading-relaxed text-justify opacity-95 indent-8">
          The collection of artworks and photos challenges the idea of
          Filipino resilience. It still shows and acknowledges the strong traits
          of the community. From “bayanihan” and the concept of “Baha ka lang,
          Pinoy kami.” Both words and the collection of photos showcase the smiles
          and unity of the community despite the current situation. But as you
          dive deeper into the exhibit, it tries to call for a change and makes
          you realize that being resilient is not enough.
        </p>
        <p className="text-lg leading-relaxed text-justify opacity-95 indent-8">
          We should stop romanticizing resilience as if it is the only option available. It is
          not a simple coin toss wherein one thing can only happen at once. In
          keeping our resilience, we should also demand change and accountability
          from those in power. Those in power have the ability to prevent these
          damages or at least lessen the possibility of destruction. They have the
          ability to help but choose not to. This exhibit invites viewers to
          reflect. We also have the power to overthrow them.
        </p>
        <p className="text-lg leading-relaxed text-justify opacity-95 indent-8">
          “Babangon tayo” is a common phrase heard every time a disaster strikes.
          It can be defined as rising up and moving forward no matter what. Babangon tayo? Yes!
          however, it should not stop there. After “bumangon,” let us open our
          eyes and see the root causes. Demand change and accountability.
        </p>
        <p className="text-lg leading-relaxed text-justify opacity-95 indent-8">
          In gathering the artworks and photographs, I was truly amazed at how they
          managed to smile through those calamities. Playing sports and a wedding
          in the middle of a flood, who else would have thought about that? I too
          appreciate this amazing attribute we have; however, romanticizing it to
          the point that we turn blind to those who have responsibilities should
          not be the case.
        </p>
        <p className="text-lg leading-relaxed text-justify opacity-95 indent-8">
          Babangon tayo, hihingi ng pagbabago, at pananagutin ang dapat managot.
        </p>
      </div>

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
