import React from "react";
import { useNavigate } from "react-router-dom";

const References = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen w-full bg-black text-white py-16 px-8">
      {/* Back Button */}
      <button
        onClick={() => navigate("/")}
        className="fixed top-6 right-6 bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-6 py-2 rounded-full shadow-lg z-50 transition-colors"
        aria-label="Back to Home"
      >
        ← Back
      </button>
      <div className="max-w-4xl mx-auto">
        {/* Main Title */}
        <h1 className="text-5xl font-bold text-center mb-16 text-yellow-300">
          References
        </h1>

        {/* Reference Section 1 */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-center mb-6 text-yellow-200">
            Baha ka lang, Pinoy Kami Section
          </h2>
          <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto opacity-90">
            https://barokandtakya.com/the-spirit-of-being-resilient-in-filipino-culture/
            <br />
            https://steemit.com/filipinoresilience/@iamrosallie/floods-in-the-philippines-filipino-resilience
          </p>
        </div>

        {/* Reference Section 2 */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-center mb-6 text-yellow-200">
            Bayanihan Section
          </h2>
          <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto opacity-90">
            https://www.philstar.com/pang-masa/police-metro/2018/07/18/1834505/metro-manila-mga-karatig-lalawigan-lubog-sa-baha
            <br />
            https://www.abs-cbn.com/news/11/12/20/matinding-baha-hangin-bagyong-ulysses-pinaramdam-ang-bagsik-sa-metro-manila
            <br />
            https://www.grab.com/ph/press/others/grabbayanihan-typhoon-carina-relief-operations/
            <br />
            https://www.facebook.com/photo.php?fbid=2146271848725343&id=167794516573096&set=a.470668442952367&locale=lt_LT
            <br />
            https://jefmenguin.com/bayanihan/
          </p>
        </div>

        {/* Reference Section 3 */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-center mb-6 text-yellow-200">
            Typhoon and Flood Documentaries
          </h2>
          <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto opacity-90">
            https://www.gmanetwork.com/news/lifestyle/artandculture/338299/yolanda-photo-among-time-s-top-10-of-2013/story/
            <br />
            https://www.facebook.com/photo.php?fbid=1211450333889164&id=100050726256563&set=a.400307315003474
            <br />
            https://www.gmanetwork.com/news/topstories/photo/334590/aerial-view-of-the-flooding-in-manila-caused-by-typhoon-ulysses/photo/
          </p>
        </div>

        {/* Reference Section 4 */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-center mb-6 text-yellow-200">
            Arts / Cartoons
          </h2>
          <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto opacity-90">
          https://philippinereporter.com/index.php/2020/11/20/refuse-to-glorify-resiliency-demand-accountability/
          <br />
          https://www.facebook.com/tarantadongkalbo/photos/a.809074646155443/1202957216767182/?type=3&ref=embed_post
          <br />
          https://x.com/allweknowiscj/status/1326872735759233029/photo/1
          </p>
        </div>
      </div>
    </div>
  );
};

export default References;
