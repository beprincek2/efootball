// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from "gsap/all";

// import Button from "./Button";


// gsap.registerPlugin(ScrollTrigger);

// import { useEffect, useRef, useState } from "react";

// import React from 'react'
// import { TiLocationArrow } from "react-icons/ti";

// const Hero = () => {

//   const [currentIndex, setCurrentIndex] = useState(1);
//   const [hasClicked, setHasClicked] = useState(false);

//   const [loading, setLoading] = useState(false);
//   const [loadedVideos, setLoadedVideos] = useState(0);


//   const totalVideos = 4;
//   const nextVdRef = useRef(null);

//   useGSAP(()=>{
//     gsap.set('#video-frame', {
//       clipPath: 'polygon(50% 2%, 77% 9%, 95% 34%, 95% 65%, 78% 87%, 50% 97%, 20% 90%, 0% 62%, 3% 29%, 22% 9%)',
//       borderRadius: ''
//     })

//     gsap.from('#video-frame', {
//       clipPath : 'polygon(51% 0%, 100% 0%, 100% 28%, 100% 66%, 100% 100%, 51% 100%, 0% 100%, 0% 62%, 0% 29%, 0% 0%)',
//       borderRadius: '0 0 0 0',
//       ease :'power1.inOut',
//       scrollTrigger : {
//         trigger: '#video-frame',
//         start : 'center center',
//         end : 'bottom center',
//         scrub : true
//       }

//     })
//   })

//   useEffect(() => {
//      if (loadedVideos === totalVideos - 1) {
//        setLoading(false);
//      }
//    }, [loadedVideos]);

//   const handleVideoLoad = () => {
//     setLoadedVideos((prev) => prev + 1);
//   };

  
  

//   const getVideoSrc = (index) => `videos/hero-${index}.mp4`;

//   return (
//     <div className='relative h-dvh w-screen overflow-x-hidden'>
//        {loading && (
//          <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
//            {/* https://uiverse.io/G4b413l/tidy-walrus-92 */}
//            <div className="three-body">
//              <div className="three-body__dot"></div>
//              <div className="three-body__dot"></div>
//              <div className="three-body__dot"></div>
//            </div>
//          </div>
//        )}

//       <div id='video-frame' className='relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75'>
//         <div>
          

//               <video src={getVideoSrc(currentIndex === totalVideos - 1?1:currentIndex)}
//               autoPlay
//               loop
//               muted
//               className="absolute left-0 top-0 size-full object-cover"
//               onLoadedData={handleVideoLoad}

//               />
//         </div><div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-center">
//         <p className="font-robert-regular text-blue-100">Unleash your skills</p>
//             <Button id="watch-trailer" title="Download Now" leftIcon={<TiLocationArrow/>}
//             containerClass="bg-yellow-300 flex-center gap-1"
//             />
//         <h1 className="special-font hero-heading text-yellow-300 ">efootball</h1>
//         <h1 className="special-font hero-heading  z-40 text-red-700">
//           Konami
//         </h1>
//         </div>
        
//         <div className="absolute left-0 top-0 z-40 size-full">
//           <div className="mt-24 px-5 sm:px-10">
//             {/* <h1 className="special-font hero-heading text-yellow-300">efootball</h1>
//             <p className="mb-5 max-w-64 font-robert-regular text-blue-100">Unleash your power</p>
//             <Button id="watch-trailer" title="Watch Trailer" leftIcon={<TiLocationArrow/>}
//             containerClass="bg-yellow-300 flex-center gap-1"
//             /> */}
//           </div>
//         </div>
//       </div>
//       <h1 className="special-font hero-heading absolute bottom-0 left-1/2 transform -translate-x-1/2 text-center  text-black">
//           Konami
//         </h1>
//     </div>

//   )
// }

// export default Hero






import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import Button from "./Button";
import { useEffect, useRef, useState } from "react";
import React from "react";
import { TiLocationArrow } from "react-icons/ti";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [loading, setLoading] = useState(true);
  const videoRef = useRef(null);

  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(50% 2%, 77% 9%, 95% 34%, 95% 65%, 78% 87%, 50% 97%, 20% 90%, 0% 62%, 3% 29%, 22% 9%)",
    });

    gsap.from("#video-frame", {
      clipPath: "polygon(51% 0%, 100% 0%, 100% 28%, 100% 66%, 100% 100%, 51% 100%, 0% 100%, 0% 62%, 0% 29%, 0% 0%)",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  const handleVideoLoad = () => {
    setLoading(false);
  };

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      {loading && (
        <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
          <div className="three-body">
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
          </div>
        </div>
      )}

      <div id="video-frame" className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75">
        <video
          src="videos/hero-1.mp4"
          autoPlay
          loop
          muted
          className="absolute left-0 top-0 size-full object-cover"
          onLoadedData={handleVideoLoad}
          ref={videoRef}
        />
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-center">
          <p className="font-robert-regular text-blue-100">Unleash your skills</p>
          <Button
            id="watch-trailer"
            title="Download Now"
            leftIcon={<TiLocationArrow />}
            containerClass="bg-yellow-300 flex-center gap-1"
          />
          <h1 className="special-font hero-heading text-yellow-300">efootball</h1>
          <h1 className="special-font hero-heading z-40 text-red-700">Konami</h1>
        </div>
      </div>
      <h1 className="special-font hero-heading absolute bottom-0 left-1/2 transform -translate-x-1/2 text-center  text-black">
           Konami
         </h1>
    </div>
  );
};

export default Hero;