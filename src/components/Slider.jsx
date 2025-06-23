// import React from "react";
// import { assets } from "../assets/assets";

// const Slider = () => {
//   return (
//     <div>
//       <h1 className="text-center text-3xl font-bold">Inspiring and Helping for Better Lifestyle</h1>
//       <div className="slide-container flex mt-2">
//         <div className="slide1">
//           <img
//             src={assets.Img1}
//             alt=""
//             height={150}
//             width={150}
//             className="rounded-2xl"
//           />
//           <h4>Lifes Kills for Children in South African peoples.</h4>
//           <p>
//             We work together to make lasting difference,helping people with
//             kindness and hard work.
//           </p>
//           <button className="rounded bg-orange-500  text-white px-3 py-2">
//             Donate Now
//           </button>
//         </div>
//         <div className="slide1">
//           <img
//             src={assets.Img1}
//             alt=""
//             height={150}
//             width={150}
//             className="rounded-2xl"
//           />
//           <h4>Lifes Kills for Children in South African peoples.</h4>
//           <p>
//             We work together to make lasting difference,helping people with
//             kindness and hard work.
//           </p>
//           <button className="rounded bg-orange-500  text-white px-3 py-2">
//             Donate Now
//           </button>
//         </div>
//         <div className="slide1">
//           <img
//             src={assets.Img1}
//             alt=""
//             height={150}
//             width={150}
//             className="rounded-2xl"
//           />
//           <h4>Lifes Kills for Children in South African peoples.</h4>
//           <p>
//             We work together to make lasting difference,helping people with
//             kindness and hard work.
//           </p>
//           <button className="rounded bg-orange-500  text-white px-3 py-2">
//             Donate Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Slider;

// import React, { useEffect, useRef } from "react";
// import { assets } from "../assets/assets";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const donationData = [
//   {
//     img: assets.Img1,
//     percent: 80,
//     raised: 25000,
//     goal: 30000,
//     title: "Life skills for Children in South African peoples",
//   },
//   {
//     img: assets.Img2,
//     percent: 95,
//     raised: 25000,
//     goal: 30000,
//     title: "Empowering Young Minds",
//   },
//   {
//     img: assets.Img3,
//     percent: 50,
//     raised: 25000,
//     goal: 30000,
//     title: "Bringing Food and Hope",
//   },
//   {
//     img: assets.Img4,
//     percent: 64,
//     raised: 25000,
//     goal: 30000,
//     title: "Education for Everyone",
//   },
// ];

// const Slider = () => {
//   const scrollRef = useRef();

//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//   }, []);

//   const scrollLeft = () => {
//     scrollRef.current.scrollBy({
//       left: -300,
//       behavior: "smooth",
//     });
//   };

//   const scrollRight = () => {
//     scrollRef.current.scrollBy({
//       left: 300,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <div className="relative w-full px-4 py-12 bg-gradient-to-br from-orange-50 to-white">
//       <h1 className="text-center text-3xl md:text-4xl font-extrabold text-gray-800 mb-10">
//         Inspiring and Helping for Better Lifestyle
//       </h1>

//       {/* Arrow Controls */}
//       <button
//         onClick={scrollLeft}
//         className="hidden md:flex absolute left-2 top-[50%] transform -translate-y-1/2 bg-white p-2 shadow-lg rounded-full hover:bg-orange-100 z-10"
//       >
//         <ChevronLeft className="text-orange-600" />
//       </button>
//       <button
//         onClick={scrollRight}
//         className="hidden md:flex absolute right-2 top-[50%] transform -translate-y-1/2 bg-white p-2 shadow-lg rounded-full hover:bg-orange-100 z-10"
//       >
//         <ChevronRight className="text-orange-600" />
//       </button>

//       {/* Scrollable Cards */}
//       <div
//         ref={scrollRef}
//         className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-2 md:px-6 pb-6 scroll-smooth"
//       >
//         {donationData.map((item, index) => (
//           <div
//             key={index}
//             data-aos="fade-up"
//             className={`min-w-[280px] md:min-w-[320px] flex-shrink-0 bg-white rounded-3xl border-2 p-4 transition-transform duration-300 shadow-md hover:shadow-xl hover:-translate-y-1 ${
//               item.percent >= 90 ? "border-orange-500" : "border-transparent"
//             }`}
//           >
//             {/* Image + Tag */}
//             <div className="relative overflow-hidden rounded-xl">
//               <img
//                 src={item.img}
//                 alt="donation"
//                 className="rounded-xl w-full h-44 md:h-48 object-cover transform transition-transform duration-300 hover:scale-105"
//               />
//               <span className="absolute top-2 left-2 bg-orange-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
//                 Foods
//               </span>
//             </div>

//             {/* Progress */}
//             <div className="mt-4">
//               <div className="flex justify-between text-sm text-gray-600 font-medium">
//                 <span>Raised: ${item.raised.toLocaleString()}</span>
//                 <span>Goal: ${item.goal.toLocaleString()}</span>
//               </div>
//               <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1 overflow-hidden">
//                 <div
//                   className="bg-orange-500 h-2.5 rounded-full transition-all duration-700"
//                   style={{ width: `${item.percent}%` }}
//                 ></div>
//               </div>
//               <p className="text-right text-xs mt-1 font-bold text-orange-500">
//                 {item.percent}%
//               </p>
//             </div>

//             {/* Title & Description */}
//             <h3 className="mt-3 text-lg font-bold text-gray-800 leading-snug">
//               {item.title}
//             </h3>
//             <p className="text-sm text-gray-600 mt-1">
//               We work together to make a lasting difference, helping people. With
//               kindness and hard work.
//             </p>

//             {/* Donate Button */}
//             <button
//               className={`mt-4 w-full py-2 rounded-full text-white text-sm font-semibold tracking-wide ${
//                 item.percent >= 90
//                   ? "bg-orange-600 hover:bg-orange-700"
//                   : "bg-gray-800 hover:bg-black"
//               } transition-all`}
//             >
//               Donate now →
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Slider;

// import React, { useEffect, useRef } from "react";
// import { assets } from "../assets/assets";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const donationData = [
//   {
//     img: assets.Img1,
//     percent: 80,
//     raised: 25000,
//     goal: 30000,
//     title: "Life skills for Children in South African peoples",
//   },
//   {
//     img: assets.Img2,
//     percent: 95,
//     raised: 25000,
//     goal: 30000,
//     title: "Empowering Young Minds",
//   },
//   {
//     img: assets.Img3,
//     percent: 50,
//     raised: 25000,
//     goal: 30000,
//     title: "Bringing Food and Hope",
//   },
//   {
//     img: assets.Img4,
//     percent: 64,
//     raised: 25000,
//     goal: 30000,
//     title: "Education for Everyone",
//   },
// ];

// const Slider = () => {
//   const scrollRef = useRef();
//   let scrollInterval = useRef();

//   useEffect(() => {
//     AOS.init({ duration: 1000 });

//     scrollInterval.current = setInterval(() => {
//       scrollRef.current.scrollBy({
//         left: 300,
//         behavior: "smooth",
//       });
//     }, 3000);

//     return () => clearInterval(scrollInterval.current);
//   }, []);

//   const scrollLeft = () => {
//     scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
//   };

//   const scrollRight = () => {
//     scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
//   };

//   return (
//     <div className="relative w-full px-4 py-12 bg-gradient-to-br from-orange-50 to-white">
//       <h1 className="text-center text-3xl md:text-4xl font-extrabold text-gray-800 mb-10">
//         Inspiring and Helping for Better Lifestyle
//       </h1>

//       {/* Arrow Buttons */}
//       <button
//         onClick={scrollLeft}
//         className="hidden md:flex absolute left-2 top-[50%] transform -translate-y-1/2 bg-white p-2 shadow-lg rounded-full hover:bg-orange-100 z-10"
//       >
//         <ChevronLeft className="text-orange-600" />
//       </button>
//       <button
//         onClick={scrollRight}
//         className="hidden md:flex absolute right-2 top-[50%] transform -translate-y-1/2 bg-white p-2 shadow-lg rounded-full hover:bg-orange-100 z-10"
//       >
//         <ChevronRight className="text-orange-600" />
//       </button>

//       {/* Slider Cards */}
//       <div
//         ref={scrollRef}
//         className="flex gap-6 overflow-x-auto px-1 md:px-6 pb-3 scroll-smooth no-scrollbar"
//       >
//         {donationData.map((item, index) => (
//           <div
//             key={index}
//             data-aos="fade-up"
//             className={`min-w-[240px] md:min-w-[280px] flex-shrink-0 bg-white rounded-3xl border-2 p-4 transition-transform duration-300 shadow-md hover:shadow-xl hover:-translate-y-1 ${
//               item.percent >= 90 ? "border-orange-500" : "border-transparent"
//             }`}
//           >
//             <div className="relative overflow-hidden rounded-xl">
//               <img
//                 src={item.img}
//                 alt="donation"
//                 className="rounded-xl w-full h-44 md:h-48 object-cover transform transition-transform duration-300 hover:scale-105"
//               />
//               <span className="absolute top-2 left-2 bg-orange-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
//                 Foods
//               </span>
//             </div>

//             <div className="mt-4">
//               <div className="flex justify-between text-sm text-gray-600 font-medium">
//                 <span>Raised: ${item.raised.toLocaleString()}</span>
//                 <span>Goal: ${item.goal.toLocaleString()}</span>
//               </div>
//               <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1 overflow-hidden">
//                 <div
//                   className="bg-orange-500 h-2.5 rounded-full transition-all duration-700"
//                   style={{ width: `${item.percent}%` }}
//                 ></div>
//               </div>
//               <p className="text-right text-xs mt-1 font-bold text-orange-500">
//                 {item.percent}%
//               </p>
//             </div>

//             <h3 className="mt-3 text-base font-bold text-gray-800 leading-snug">
//               {item.title}
//             </h3>
//             <p className="text-sm text-gray-600 mt-1">
//               We work together to make a lasting difference, helping people. With
//               kindness and hard work.
//             </p>

//             <button
//               className={`mt-4 w-full py-2 rounded-full text-white text-sm font-semibold tracking-wide ${
//                 item.percent >= 90
//                   ? "bg-orange-600 hover:bg-orange-700"
//                   : "bg-gray-800 hover:bg-black"
//               } transition-all`}
//             >
//               Donate now →
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Slider;

// import React, { useEffect, useRef } from "react";
// import { assets } from "../assets/assets";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const donationData = [
//   {
//     img: assets.Img1,
//     percent: 80,
//     raised: 25000,
//     goal: 30000,
//     title: "Life skills for Children in South African peoples",
//   },
//   {
//     img: assets.Img2,
//     percent: 95,
//     raised: 25000,
//     goal: 30000,
//     title: "Empowering Young Minds",
//   },
//   {
//     img: assets.Img3,
//     percent: 50,
//     raised: 25000,
//     goal: 30000,
//     title: "Bringing Food and Hope",
//   },
//   {
//     img: assets.Img4,
//     percent: 64,
//     raised: 25000,
//     goal: 30000,
//     title: "Education for Everyone",
//   },
// ];

// const Slider = () => {
//   const scrollRef = useRef();
//   const intervalRef = useRef();

//   useEffect(() => {
//     AOS.init({ duration: 1000 });

//     intervalRef.current = setInterval(() => {
//       if (scrollRef.current) {
//         scrollRef.current.scrollBy({
//           left: 300,
//           behavior: "smooth",
//         });

//         // Optional: Reset scroll to beginning if at end
//         const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
//         if (scrollLeft + clientWidth >= scrollWidth - 5) {
//           scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
//         }
//       }
//     }, 3000);

//     return () => clearInterval(intervalRef.current);
//   }, []);

//   const scrollLeft = () => {
//     scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
//   };

//   const scrollRight = () => {
//     scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
//   };

//   return (
//     <div className="relative w-full px-4 py-12 bg-gradient-to-br from-orange-50 to-white">
//       <h1 className="text-center text-3xl md:text-4xl font-extrabold text-gray-800 mb-10">
//         Inspiring and Helping for Better Lifestyle
//       </h1>

//       {/* Navigation Arrows */}
//       <button
//         onClick={scrollLeft}
//         className="hidden md:flex absolute left-2 top-[50%] transform -translate-y-1/2 bg-white p-2 shadow-lg rounded-full hover:bg-orange-100 z-10"
//       >
//         <ChevronLeft className="text-orange-600" />
//       </button>
//       <button
//         onClick={scrollRight}
//         className="hidden md:flex absolute right-2 top-[50%] transform -translate-y-1/2 bg-white p-2 shadow-lg rounded-full hover:bg-orange-100 z-10"
//       >
//         <ChevronRight className="text-orange-600" />
//       </button>

//       {/* Scrollable Donation Cards */}
//       <div
//         ref={scrollRef}
//         className="flex gap-6 overflow-x-auto scroll-smooth pb-3 no-scrollbar"
//         style={{
//           scrollbarWidth: "none", // Firefox
//           msOverflowStyle: "none", // IE/Edge
//         }}
//       >
//         {donationData.map((item, index) => (
//           <div
//             key={index}
//             data-aos="fade-up"
//             className={`min-w-[240px] md:min-w-[280px] flex-shrink-0 bg-white rounded-3xl border-2 p-4 transition-transform duration-300 shadow-md hover:shadow-xl hover:-translate-y-1 ${
//               item.percent >= 90 ? "border-orange-500" : "border-transparent"
//             }`}
//           >
//             {/* Image */}
//             <div className="relative overflow-hidden rounded-xl">
//               <img
//                 src={item.img}
//                 alt="donation"
//                 className="rounded-xl w-full h-44 md:h-48 object-cover transform transition-transform duration-300 hover:scale-105"
//               />
//               <span className="absolute top-2 left-2 bg-orange-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
//                 Foods
//               </span>
//             </div>

//             {/* Progress */}
//             <div className="mt-4">
//               <div className="flex justify-between text-sm text-gray-600 font-medium">
//                 <span>Raised: ${item.raised.toLocaleString()}</span>
//                 <span>Goal: ${item.goal.toLocaleString()}</span>
//               </div>
//               <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1 overflow-hidden">
//                 <div
//                   className="bg-orange-500 h-2.5 rounded-full transition-all duration-700"
//                   style={{ width: `${item.percent}%` }}
//                 ></div>
//               </div>
//               <p className="text-right text-xs mt-1 font-bold text-orange-500">
//                 {item.percent}%
//               </p>
//             </div>

//             {/* Title */}
//             <h3 className="mt-3 text-base font-bold text-gray-800 leading-snug">
//               {item.title}
//             </h3>
//             <p className="text-sm text-gray-600 mt-1">
//               We work together to make a lasting difference, helping people. With
//               kindness and hard work.
//             </p>

//             {/* Button */}
//             <button
//               className={`mt-4 w-full py-2 rounded-full text-white text-sm font-semibold tracking-wide ${
//                 item.percent >= 90
//                   ? "bg-orange-600 hover:bg-orange-700"
//                   : "bg-gray-800 hover:bg-black"
//               } transition-all`}
//             >
//               Donate now →
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Slider;

// import React, { useEffect, useRef } from "react";
// import { assets } from "../assets/assets";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const donationData = [
//   {
//     img: assets.Img1,
//     percent: 80,
//     raised: 25000,
//     goal: 30000,
//     title: "Life skills for Children in South African peoples",
//   },
//   {
//     img: assets.Img2,
//     percent: 95,
//     raised: 25000,
//     goal: 30000,
//     title: "Empowering Young Minds",
//   },
//   {
//     img: assets.Img3,
//     percent: 50,
//     raised: 25000,
//     goal: 30000,
//     title: "Bringing Food and Hope",
//   },
//   {
//     img: assets.Img4,
//     percent: 64,
//     raised: 25000,
//     goal: 30000,
//     title: "Education for Everyone",
//   },
// ];

// const Slider = () => {
//   const scrollRef = useRef();
//   const intervalRef = useRef();

//   const startAutoScroll = () => {
//     intervalRef.current = setInterval(() => {
//       if (scrollRef.current) {
//         const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

//         if (scrollLeft + clientWidth >= scrollWidth - 5) {
//           scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
//         } else {
//           scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
//         }
//       }
//     }, 3000);
//   };

//   const stopAutoScroll = () => {
//     clearInterval(intervalRef.current);
//   };

//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//     startAutoScroll();
//     return () => stopAutoScroll();
//   }, []);

//   const scrollLeft = () => {
//     scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
//   };

//   const scrollRight = () => {
//     scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
//   };

//   return (
//     <div className="relative w-full px-4 py-16 bg-gradient-to-br from-orange-100 via-white to-yellow-50 overflow-hidden">
//       <h1 className="text-center text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
//         <span className="bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
//           Inspiring & Helping
//         </span>
//         <br />
//         <span className="relative inline-block mt-2">
//           for a Better Lifestyle
//           <span className="block w-24 h-1 bg-orange-400 absolute -bottom-2 left-1/2 transform -translate-x-1/2 rounded-full"></span>
//         </span>
//       </h1>

//       {/* Arrows */}
//       <button
//         onClick={scrollLeft}
//         className="hidden md:flex absolute left-2 top-[50%] transform -translate-y-1/2 bg-white p-2 shadow-xl rounded-full hover:bg-orange-100 z-10"
//       >
//         <ChevronLeft className="text-orange-600 w-5 h-5" />
//       </button>
//       <button
//         onClick={scrollRight}
//         className="hidden md:flex absolute right-2 top-[50%] transform -translate-y-1/2 bg-white p-2 shadow-xl rounded-full hover:bg-orange-100 z-10"
//       >
//         <ChevronRight className="text-orange-600 w-5 h-5" />
//       </button>

//       {/* Slider */}
//       <div
//         ref={scrollRef}
//         className="flex gap-6 overflow-x-auto scroll-smooth pb-4 no-scrollbar mt-8 px-2"
//         onMouseEnter={stopAutoScroll}
//         onMouseLeave={startAutoScroll}
//         style={{
//           scrollbarWidth: "none",
//           msOverflowStyle: "none",
//         }}
//       >
//         {donationData.map((item, index) => (
//           <div
//             key={index}
//             data-aos="zoom-in"
//             className={`min-w-[250px] md:min-w-[280px] flex-shrink-0 backdrop-blur-lg bg-white/60 border border-orange-200 rounded-3xl p-5 transition-all duration-300 shadow-md hover:shadow-orange-200 hover:scale-[1.03]`}
//           >
//             {/* Image */}
//             <div className="relative rounded-xl overflow-hidden shadow-lg">
//               <img
//                 src={item.img}
//                 alt="donation"
//                 className="rounded-xl w-full h-44 md:h-48 object-cover transition-transform duration-300 hover:scale-105"
//               />
//               <span className="absolute top-2 left-2 bg-orange-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
//                 Humanitarian
//               </span>
//             </div>

//             {/* Progress */}
//             <div className="mt-4">
//               <div className="flex justify-between text-sm text-gray-600 font-medium">
//                 <span>Raised: ${item.raised.toLocaleString()}</span>
//                 <span>Goal: ${item.goal.toLocaleString()}</span>
//               </div>
//               <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1 overflow-hidden">
//                 <div
//                   className="bg-orange-500 h-2.5 rounded-full transition-all duration-700 shadow-inner"
//                   style={{ width: `${item.percent}%` }}
//                 ></div>
//               </div>
//               <p className="text-right text-xs mt-1 font-bold text-orange-500">
//                 {item.percent}%
//               </p>
//             </div>

//             {/* Content */}
//             <h3 className="mt-3 text-lg font-bold text-gray-800 leading-snug">
//               {item.title}
//             </h3>
//             <p className="text-sm text-gray-600 mt-1">
//               We work together to make a lasting difference, helping people with
//               kindness and courage.
//             </p>

//             {/* Donate Button */}
//             <button className="mt-4 w-full py-2 bg-gradient-to-r from-orange-500 to-yellow-400 hover:from-orange-600 hover:to-yellow-500 rounded-full text-white text-sm font-semibold tracking-wide shadow-md transition-all duration-300">
//               ❤️ Donate Now
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Slider;

// import React, { useEffect, useRef } from "react";
// import { assets } from "../assets/assets";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const donationData = [
//   {
//     img: assets.Img1,
//     percent: 80,
//     raised: 25000,
//     goal: 30000,
//     title: "Life skills for Children in South African peoples",
//   },
//   {
//     img: assets.Img2,
//     percent: 95,
//     raised: 25000,
//     goal: 30000,
//     title: "Empowering Young Minds",
//   },
//   {
//     img: assets.Img3,
//     percent: 50,
//     raised: 25000,
//     goal: 30000,
//     title: "Bringing Food and Hope",
//   },
//   {
//     img: assets.Img4,
//     percent: 64,
//     raised: 25000,
//     goal: 30000,
//     title: "Education for Everyone",
//   },
// ];

// const Slider = () => {
//   const scrollRef = useRef();
//   const intervalRef = useRef();

//   const startAutoScroll = () => {
//     intervalRef.current = setInterval(() => {
//       if (scrollRef.current) {
//         const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

//         if (scrollLeft + clientWidth >= scrollWidth - 5) {
//           scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
//         } else {
//           scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
//         }
//       }
//     }, 3000);
//   };

//   const stopAutoScroll = () => clearInterval(intervalRef.current);

//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//     startAutoScroll();
//     return () => stopAutoScroll();
//   }, []);

//   const scrollLeft = () => {
//     scrollRef.current.scrollBy({ left: -320, behavior: "smooth" });
//   };

//   const scrollRight = () => {
//     scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
//   };

//   return (
//     <div className="relative w-full px-4 py-16 bg-gradient-to-br from-orange-100 via-white to-yellow-50 overflow-hidden">
//       <h1 className="text-center text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
//         <span className="bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
//           Inspiring & Helping
//         </span>
//         <br />
//         <span className="relative inline-block mt-2">
//           for a Better Lifestyle
//           <span className="block w-24 h-1 bg-orange-400 absolute -bottom-2 left-1/2 transform -translate-x-1/2 rounded-full"></span>
//         </span>
//       </h1>

//       {/* Navigation Arrows */}
//       <button
//         onClick={scrollLeft}
//         className="hidden md:flex absolute left-2 top-[50%] transform -translate-y-1/2 bg-white p-2 shadow-xl rounded-full hover:bg-orange-100 z-10"
//       >
//         <ChevronLeft className="text-orange-600 w-5 h-5" />
//       </button>
//       <button
//         onClick={scrollRight}
//         className="hidden md:flex absolute right-2 top-[50%] transform -translate-y-1/2 bg-white p-2 shadow-xl rounded-full hover:bg-orange-100 z-10"
//       >
//         <ChevronRight className="text-orange-600 w-5 h-5" />
//       </button>

//       {/* Scrollable Slider */}
//       <div
//         ref={scrollRef}
//         className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory px-1 md:px-6 pb-4 no-scrollbar mt-10"
//         onMouseEnter={stopAutoScroll}
//         onMouseLeave={startAutoScroll}
//         style={{
//           scrollbarWidth: "none",
//           msOverflowStyle: "none",
//         }}
//       >
//         {donationData.map((item, index) => (
//           <div
//             key={index}
//             data-aos="zoom-in"
//             className="snap-center min-w-[90%] sm:min-w-[70%] md:min-w-[260px] lg:min-w-[280px] xl:min-w-[300px] flex-shrink-0 backdrop-blur-lg bg-white/70 border border-orange-200 rounded-3xl p-5 transition-all duration-300 shadow-md hover:shadow-orange-200 hover:scale-[1.03]"
//           >
//             <div className="relative rounded-xl overflow-hidden shadow-lg">
//               <img
//                 src={item.img}
//                 alt="donation"
//                 className="rounded-xl w-full h-44 md:h-48 object-cover transition-transform duration-300 hover:scale-105"
//               />
//               <span className="absolute top-2 left-2 bg-orange-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
//                 Humanitarian
//               </span>
//             </div>

//             {/* Progress Bar */}
//             <div className="mt-4">
//               <div className="flex justify-between text-sm text-gray-600 font-medium">
//                 <span>Raised: ${item.raised.toLocaleString()}</span>
//                 <span>Goal: ${item.goal.toLocaleString()}</span>
//               </div>
//               <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1 overflow-hidden">
//                 <div
//                   className="bg-orange-500 h-2.5 rounded-full transition-all duration-700 shadow-inner"
//                   style={{ width: `${item.percent}%` }}
//                 ></div>
//               </div>
//               <p className="text-right text-xs mt-1 font-bold text-orange-500">
//                 {item.percent}%
//               </p>
//             </div>

//             {/* Text */}
//             <h3 className="mt-3 text-lg font-bold text-gray-800 leading-snug">
//               {item.title}
//             </h3>
//             <p className="text-sm text-gray-600 mt-1">
//               We work together to make a lasting difference, helping people with kindness and courage.
//             </p>

//             {/* Best Donate Button */}
//             <button className="mt-5 w-full py-2 rounded-full text-white text-sm font-bold tracking-wide shadow-md transition-all duration-300 bg-gradient-to-r from-orange-500 to-yellow-400 hover:from-orange-600 hover:to-yellow-500 hover:scale-105 hover:shadow-lg animate-bounce-once">
//               ❤️ Donate Now
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Slider;

import React, { useEffect, useRef } from "react";
import { assets } from "../assets/assets";
import AOS from "aos";
import "aos/dist/aos.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const donationData = [
  {
    img: assets.Img1,
    percent: 80,
    raised: 25000,
    goal: 30000,
    title: "Life skills for Children in South African peoples",
  },
  {
    img: assets.Img2,
    percent: 95,
    raised: 25000,
    goal: 30000,
    title: "Empowering Young Minds",
  },
  {
    img: assets.Img3,
    percent: 50,
    raised: 25000,
    goal: 30000,
    title: "Bringing Food and Hope",
  },
  {
    img: assets.Img4,
    percent: 64,
    raised: 25000,
    goal: 30000,
    title: "Education for Everyone",
  },
];

const Slider = () => {
  const scrollRef = useRef();
  const intervalRef = useRef();

  const startAutoScroll = () => {
    intervalRef.current = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 5) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
        }
      }
    }, 3000);
  };

  const stopAutoScroll = () => clearInterval(intervalRef.current);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    startAutoScroll();
    return () => stopAutoScroll();
  }, []);

  const scrollLeft = () => scrollRef.current.scrollBy({ left: -320, behavior: "smooth" });
  const scrollRight = () => scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });

  return (
    <div className="relative w-full px-4 py-14 bg-gradient-to-br from-orange-100 via-white to-yellow-50 overflow-hidden">
      {/* Heading */}
      <h1 className="text-center text-3xl md:text-5xl font-extrabold text-gray-800 mb-8 leading-tight">
        <span className="bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
          Inspiring & Helping
        </span>
        <br />
        <span className="relative inline-block">
          for a Better Lifestyle
          <span className="block w-24 h-1 bg-orange-400 absolute -bottom-2 left-1/2 transform -translate-x-1/2 rounded-full"></span>
        </span>
      </h1>

      {/* Arrows */}
      <button
        onClick={scrollLeft}
        className="hidden md:flex absolute left-2 top-[50%] transform -translate-y-1/2 bg-white p-2 shadow-xl rounded-full hover:bg-orange-100 z-10"
      >
        <ChevronLeft className="text-orange-600 w-5 h-5" />
      </button>
      <button
        onClick={scrollRight}
        className="hidden md:flex absolute right-2 top-[50%] transform -translate-y-1/2 bg-white p-2 shadow-xl rounded-full hover:bg-orange-100 z-10"
      >
        <ChevronRight className="text-orange-600 w-5 h-5" />
      </button>

      {/* Slider */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar px-1 md:px-6"
        onMouseEnter={stopAutoScroll}
        onMouseLeave={startAutoScroll}
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {donationData.map((item, index) => (
          <div
            key={index}
            data-aos="zoom-in"
            className="snap-center min-w-[95%] sm:min-w-[75%] md:min-w-[260px] lg:min-w-[280px] xl:min-w-[300px] flex-shrink-0 h-auto md:h-[480px] bg-white/80 backdrop-blur-md border border-orange-200 rounded-3xl p-5 shadow-lg hover:shadow-orange-300 transition-all duration-300 hover:scale-[1.02] flex flex-col justify-between"
          >
            {/* Image */}
            <div className="relative rounded-xl overflow-hidden shadow-md">
              <img
                src={item.img}
                alt="donation"
                className="rounded-xl w-full h-44 md:h-56 object-cover transition-transform duration-300 hover:scale-105"
              />
              <span className="absolute top-2 left-2 bg-orange-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                Humanitarian
              </span>
            </div>

            {/* Progress */}
            <div className="mt-4">
              <div className="flex justify-between text-sm text-gray-600 font-medium">
                <span>Raised: ${item.raised.toLocaleString()}</span>
                <span>Goal: ${item.goal.toLocaleString()}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1 overflow-hidden">
                <div
                  className="bg-orange-500 h-2.5 rounded-full transition-all duration-700 shadow-inner"
                  style={{ width: `${item.percent}%` }}
                ></div>
              </div>
              <p className="text-right text-xs mt-1 font-bold text-orange-500">
                {item.percent}%
              </p>
            </div>

            {/* Text Content */}
            <h3 className="mt-3 text-lg font-bold text-gray-800">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600 mt-1 mb-3">
              We work together to make a lasting difference, helping people with
              kindness and courage.
            </p>

            {/* Donate Button */}
            <button className="w-full py-2 bg-gradient-to-r from-orange-500 to-yellow-400 hover:from-orange-600 hover:to-yellow-500 rounded-full text-white text-sm font-semibold shadow-lg transition-all duration-300 hover:scale-105">
              ❤️ Donate Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;



