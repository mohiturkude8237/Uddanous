// import React, { useEffect, useRef } from "react";
// import { assets } from "../assets/assets";

// const slides = [
//   {
//     img: assets.Img1,
//     percent: 80,
//     raised: 25000,
//     goal: 30000,
//   },
//   {
//     img: assets.Img1,
//     percent: 80,
//     raised: 25000,
//     goal: 30000,
//   },
//   {
//     img: assets.Img1,
//     percent: 80,
//     raised: 25000,
//     goal: 30000,
//   },
//   {
//     img: assets.Img1,
//     percent: 80,
//     raised: 25000,
//     goal: 30000,
//   },
    
// ];

// const Slider1 = () => {
//   const sliderRef = useRef(null);

//   useEffect(() => {
//     const slider = sliderRef.current;
//     let scrollAmount = 0;
//     const scrollStep = 1;
//     const maxScroll = slider.scrollWidth - slider.clientWidth;

//     const autoScroll = () => {
//       if (scrollAmount >= maxScroll) {
//         scrollAmount = 0;
//         slider.scrollTo({ left: 0 });
//       } else {
//         scrollAmount += scrollStep;
//         slider.scrollTo({ left: scrollAmount, behavior: "smooth" });
//       }
//     };

//     const interval = setInterval(autoScroll, 30);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="p-4">
//       {/* <h1 className="text-center text-2xl font-bold mb-4">
//         Inspiring and Helping for Better Lifestyle
//       </h1> */}
//       <h1 className="text-center text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight tracking-wide mb-6">
//         Empowering Lives, One Act of Kindness at a Time
//       </h1>

//       <div
//         ref={sliderRef}
//         className="flex overflow-x-scroll hide-scrollbar space-x-5"
//       >
//         {slides.map((slide, index) => (
//           <div
//             key={index}
//             className="min-w-full sm:min-w-[300px] max-w-[320px] bg-white rounded-2xl border-2 border-orange-400 shadow-md flex-shrink-0 p-4"
//           >
//             {/* Image + Badge */}
//             <div className="relative">
//               <img
//                 src={slide.img}
//                 alt="Slide"
//                 className="w-full h-[170px] object-cover rounded-xl"
//               />
//               <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
//                 Foods
//               </span>
//             </div>

//             {/* Progress */}
//             <div className="mt-3">
//               <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
//                 <div
//                   className="h-full bg-orange-500"
//                   style={{ width: `${slide.percent}%` }}
//                 ></div>
//               </div>
//               <p className="text-right text-sm font-bold text-orange-600 mt-1">
//                 {slide.percent}%
//               </p>
//             </div>

//             {/* Raised / Goal */}
//             <div className="flex justify-between text-sm text-gray-700 mt-2">
//               <span>Raised : ${slide.raised.toLocaleString()}</span>
//               <span>Goal : ${slide.goal.toLocaleString()}</span>
//             </div>

//             {/* Title + Description */}
//             <h4 className="text-lg font-bold mt-3">
//               Lifes kills for Children in South African peoples
//             </h4>
//             <p className="text-sm text-gray-600 mt-1">
//               We work together to make a lasting difference, helping people.
//               With kindness and hard work
//             </p>

//             {/* Button */}
//             {/* <button className="mt-4 w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-full font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-orange-300">
//               Donate now <span className="text-lg">→</span>
//             </button> */}

//             <button className="mt-4 w-full flex items-center justify-center gap-2 bg-[#1d242e] hover:bg-orange-600 text-white py-2 rounded-full font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-orange-300 animate-pulse">
//               Donate now <span className="text-lg">→</span>
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Slider1;

// import React, { useEffect, useRef, useState } from "react";
// import { assets } from "../assets/assets";

// const slides = [
//   {
//     img: assets.Img1,
//     percent: 80,
//     raised: 25000,
//     goal: 30000,
//   },
//   {
//     img: assets.Img1,
//     percent: 75,
//     raised: 15000,
//     goal: 20000,
//   },
//   {
//     img: assets.Img1,
//     percent: 90,
//     raised: 45000,
//     goal: 50000,
//   },
//   {
//     img: assets.Img1,
//     percent: 60,
//     raised: 12000,
//     goal: 20000,
//   },
// ];

// const Slider1 = () => {
//   const sliderRef = useRef(null);
//   const intervalRef = useRef(null);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const scrollToSlide = (index) => {
//     const slider = sliderRef.current;
//     const slideWidth = slider.offsetWidth;
//     slider.scrollTo({
//       left: index * slideWidth,
//       behavior: "smooth",
//     });
//     setCurrentIndex(index);
//   };

//   useEffect(() => {
//     const slider = sliderRef.current;
//     const slideWidth = slider.offsetWidth;

//     const autoScroll = () => {
//       let newIndex = currentIndex + 1;
//       if (newIndex >= slides.length) newIndex = 0;
//       scrollToSlide(newIndex);
//     };

//     intervalRef.current = setInterval(autoScroll, 3000);

//     // Pause on hover
//     const pauseScroll = () => clearInterval(intervalRef.current);
//     const resumeScroll = () => {
//       intervalRef.current = setInterval(autoScroll, 3000);
//     };

//     slider.addEventListener("mouseenter", pauseScroll);
//     slider.addEventListener("mouseleave", resumeScroll);

//     return () => {
//       clearInterval(intervalRef.current);
//       slider.removeEventListener("mouseenter", pauseScroll);
//       slider.removeEventListener("mouseleave", resumeScroll);
//     };
//   }, [currentIndex]);

//   return (
//     <div className="p-4 md:p-8">
//       <h1 className="text-center text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight tracking-wide mb-10">
//         Empowering Lives, One Act of Kindness at a Time
//       </h1>

//       {/* Slider */}
//       <div
//         ref={sliderRef}
//         className="flex overflow-hidden space-x-6 transition-all"
//       >
//         {slides.map((slide, index) => (
//           <div
//             key={index}
//             className="min-w-full sm:min-w-[320px] max-w-[340px] bg-white rounded-2xl border border-orange-400 shadow-lg flex-shrink-0 p-4 mx-auto transition-transform hover:scale-[1.02]"
//           >
//             {/* Image + Badge */}
//             <div className="relative">
//               <img
//                 src={slide.img}
//                 alt={`Slide ${index}`}
//                 className="w-full h-[170px] object-cover rounded-xl"
//               />
//               <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
//                 Foods
//               </span>
//             </div>

//             {/* Progress */}
//             <div className="mt-4">
//               <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
//                 <div
//                   className="h-full bg-orange-500 transition-all duration-500"
//                   style={{ width: `${slide.percent}%` }}
//                 ></div>
//               </div>
//               <p className="text-right text-sm font-bold text-orange-600 mt-1">
//                 {slide.percent}%
//               </p>
//             </div>

//             {/* Raised/Goal */}
//             <div className="flex justify-between text-sm text-gray-700 mt-2">
//               <span>Raised: ${slide.raised.toLocaleString()}</span>
//               <span>Goal: ${slide.goal.toLocaleString()}</span>
//             </div>

//             {/* Title + Description */}
//             <h4 className="text-lg font-semibold mt-3 text-gray-800">
//               Life Skills for Children in South Africa
//             </h4>
//             <p className="text-sm text-gray-600 mt-1">
//               Join us in making a lasting impact. Help communities grow through
//               kindness and support.
//             </p>

//             {/* Button */}
//             <button className="mt-4 w-full flex items-center justify-center gap-2 bg-[#1d242e] hover:bg-orange-600 text-white py-2 rounded-full font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-orange-300 animate-pulse">
//               Donate now <span className="text-lg">→</span>
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Pagination Dots */}
//       <div className="mt-6 flex justify-center gap-3">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => scrollToSlide(index)}
//             className={`w-3 h-3 rounded-full ${
//               currentIndex === index ? "bg-orange-500" : "bg-gray-300"
//             } transition-all`}
//           ></button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Slider1;

// import React, { useEffect, useRef, useState } from "react";
// import { assets } from "../assets/assets";

// const slides = [
//   {
//     img: assets.Img1,
//     percent: 80,
//     raised: 25000,
//     goal: 30000,
//   },
//   {
//     img: assets.Img1,
//     percent: 75,
//     raised: 15000,
//     goal: 20000,
//   },
//   {
//     img: assets.Img1,
//     percent: 90,
//     raised: 45000,
//     goal: 50000,
//   },
//   {
//     img: assets.Img1,
//     percent: 60,
//     raised: 12000,
//     goal: 20000,
//   },
//   {
//     img: assets.Img1,
//     percent: 60,
//     raised: 12000,
//     goal: 20000,
//   },
//   {
//     img: assets.Img1,
//     percent: 60,
//     raised: 12000,
//     goal: 20000,
//   },
//   {
//     img: assets.Img1,
//     percent: 60,
//     raised: 12000,
//     goal: 20000,
//   },
// ];

// const Slider1 = () => {
//   const sliderRef = useRef(null);
//   const intervalRef = useRef(null);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const scrollToSlide = (index) => {
//     const slider = sliderRef.current;
//     const slideWidth = slider.offsetWidth;
//     slider.scrollTo({
//       left: index * slideWidth,
//       behavior: "smooth",
//     });
//     setCurrentIndex(index);
//   };

//   const startAutoSlide = () => {
//     intervalRef.current = setInterval(() => {
//       setCurrentIndex((prev) => {
//         const nextIndex = (prev + 1) % slides.length;
//         scrollToSlide(nextIndex);
//         return nextIndex;
//       });
//     }, 3000);
//   };

//   useEffect(() => {
//     const slider = sliderRef.current;
//     startAutoSlide();

//     // Pause on hover
//     const pauseScroll = () => clearInterval(intervalRef.current);
//     const resumeScroll = () => startAutoSlide();

//     slider.addEventListener("mouseenter", pauseScroll);
//     slider.addEventListener("mouseleave", resumeScroll);

//     return () => {
//       clearInterval(intervalRef.current);
//       slider.removeEventListener("mouseenter", pauseScroll);
//       slider.removeEventListener("mouseleave", resumeScroll);
//     };
//   }, []);

//   return (
//     <div className="p-4 md:p-8">
//       <h1 className="text-center text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight tracking-wide mb-10">
//         Empowering Lives, One Act of Kindness at a Time
//       </h1>

//       {/* Slider */}
//       <div
//         ref={sliderRef}
//         className="flex overflow-hidden space-x-6 transition-all duration-700"
//       >
//         {slides.map((slide, index) => (
//           <div
//             key={index}
//             className="min-w-full sm:min-w-[320px] max-w-[340px] bg-white rounded-2xl border border-orange-400 shadow-lg flex-shrink-0 p-4 mx-auto transition-transform hover:scale-[1.02]"
//           >
//             {/* Image + Badge */}
//             <div className="relative">
//               <img
//                 src={slide.img}
//                 alt={`Slide ${index}`}
//                 className="w-full h-[170px] object-cover rounded-xl"
//               />
//               <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
//                 Foods
//               </span>
//             </div>

//             {/* Progress */}
//             <div className="mt-4">
//               <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
//                 <div
//                   className="h-full bg-orange-500 transition-all duration-500"
//                   style={{ width: `${slide.percent}%` }}
//                 ></div>
//               </div>
//               <p className="text-right text-sm font-bold text-orange-600 mt-1">
//                 {slide.percent}%
//               </p>
//             </div>

//             {/* Raised/Goal */}
//             <div className="flex justify-between text-sm text-gray-700 mt-2">
//               <span>Raised: ${slide.raised.toLocaleString()}</span>
//               <span>Goal: ${slide.goal.toLocaleString()}</span>
//             </div>

//             {/* Title + Description */}
//             <h4 className="text-lg font-semibold mt-3 text-gray-800">
//               Life Skills for Children in South Africa
//             </h4>
//             <p className="text-sm text-gray-600 mt-1">
//               Join us in making a lasting impact. Help communities grow through
//               kindness and support.
//             </p>

//             {/* Button */}
//             <button className="mt-4 w-full flex items-center justify-center gap-2 bg-[#1d242e] hover:bg-orange-600 text-white py-2 rounded-full font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-orange-300 animate-pulse">
//               Donate now <span className="text-lg">→</span>
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Pagination Dots */}
//       <div className="mt-6 flex justify-center gap-3">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => scrollToSlide(index)}
//             className={`w-3 h-3 rounded-full ${
//               currentIndex === index ? "bg-orange-500" : "bg-gray-300"
//             } transition-all`}
//           ></button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Slider1;

// import React, { useEffect, useRef, useState } from "react";
// import { assets } from "../assets/assets";

// const slides = [
//   {
//     img: assets.Img1,
//     percent: 80,
//     raised: 25000,
//     goal: 30000,
//   },
//   {
//     img: assets.Img1,
//     percent: 75,
//     raised: 15000,
//     goal: 20000,
//   },
//   {
//     img: assets.Img1,
//     percent: 90,
//     raised: 45000,
//     goal: 50000,
//   },
//   {
//     img: assets.Img1,
//     percent: 60,
//     raised: 12000,
//     goal: 20000,
//   },
// ];

// const Slider1 = () => {
//   const sliderRef = useRef(null);
//   const intervalRef = useRef(null);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const scrollToSlide = (index) => {
//     const slider = sliderRef.current;
//     const slideWidth = slider.offsetWidth;
//     slider.scrollTo({
//       left: index * slideWidth,
//       behavior: "smooth",
//     });
//     setCurrentIndex(index);
//   };

//   const startAutoSlide = () => {
//     intervalRef.current = setInterval(() => {
//       setCurrentIndex((prev) => {
//         const nextIndex = (prev + 1) % slides.length;
//         scrollToSlide(nextIndex);
//         return nextIndex;
//       });
//     }, 3000);
//   };

//   useEffect(() => {
//     const slider = sliderRef.current;
//     startAutoSlide();

//     // Pause on hover
//     const pauseScroll = () => clearInterval(intervalRef.current);
//     const resumeScroll = () => startAutoSlide();

//     slider.addEventListener("mouseenter", pauseScroll);
//     slider.addEventListener("mouseleave", resumeScroll);

//     return () => {
//       clearInterval(intervalRef.current);
//       slider.removeEventListener("mouseenter", pauseScroll);
//       slider.removeEventListener("mouseleave", resumeScroll);
//     };
//   }, []);

//   return (
//     <div className="p-4 md:p-8">
//       <h1 className="text-center text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight tracking-wide mb-10">
//         Empowering Lives, One Act of Kindness at a Time
//       </h1>

//       {/* Slider */}
//       <div
//         ref={sliderRef}
//         className="flex overflow-hidden gap-x-6 transition-all duration-700"
//       >
//         {slides.map((slide, index) => (
//           <div
//             key={index}
//             className={`min-w-full sm:min-w-[320px] max-w-[340px] bg-white rounded-2xl shadow-lg flex-shrink-0 p-4 mx-auto transition-transform duration-300 hover:scale-[1.02] ${
//               currentIndex === index
//                 ? "border-4 border-orange-500"
//                 : "border border-gray-200"
//             }`}
//           >
//             {/* Image + Badge */}
//             <div className="relative">
//               <img
//                 src={slide.img}
//                 alt={`Slide ${index}`}
//                 className="w-full h-[170px] object-cover rounded-xl"
//               />
//               <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
//                 Foods
//               </span>
//             </div>

//             {/* Progress */}
//             <div className="mt-4">
//               <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
//                 <div
//                   className="h-full bg-orange-500 transition-all duration-500"
//                   style={{ width: `${slide.percent}%` }}
//                 ></div>
//               </div>
//               <p className="text-right text-sm font-bold text-orange-600 mt-1">
//                 {slide.percent}%
//               </p>
//             </div>

//             {/* Raised/Goal */}
//             <div className="flex justify-between text-sm text-gray-700 mt-2">
//               <span>Raised: ${slide.raised.toLocaleString()}</span>
//               <span>Goal: ${slide.goal.toLocaleString()}</span>
//             </div>

//             {/* Title + Description */}
//             <h4 className="text-lg font-semibold mt-3 text-gray-800">
//               Life Skills for Children in South Africa
//             </h4>
//             <p className="text-sm text-gray-600 mt-1">
//               Join us in making a lasting impact. Help communities grow through
//               kindness and support.
//             </p>

//             {/* Button */}
//             <button className="mt-4 w-full flex items-center justify-center gap-2 bg-[#1d242e] hover:bg-orange-600 text-white py-2 rounded-full font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-orange-300 animate-pulse">
//               Donate now <span className="text-lg">→</span>
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Pagination Dots */}
//       <div className="mt-6 flex justify-center gap-3">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => scrollToSlide(index)}
//             className={`w-3 h-3 rounded-full ${
//               currentIndex === index ? "bg-orange-500" : "bg-gray-300"
//             } transition-all`}
//           ></button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Slider1;

// import React, { useEffect, useRef, useState } from "react";
// import { assets } from "../assets/assets";

// const slides = [
//   {
//     img: assets.Img1,
//     percent: 80,
//     raised: 25000,
//     goal: 30000,
//   },
//   {
//     img: assets.Img1,
//     percent: 75,
//     raised: 15000,
//     goal: 20000,
//   },
//   {
//     img: assets.Img1,
//     percent: 90,
//     raised: 45000,
//     goal: 50000,
//   },
//   {
//     img: assets.Img1,
//     percent: 60,
//     raised: 12000,
//     goal: 20000,
//   },
// ];

// const Slider1 = () => {
//   const sliderRef = useRef(null);
//   const intervalRef = useRef(null);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const scrollToSlide = (index) => {
//     const slider = sliderRef.current;
//     const slideWidth = slider.offsetWidth;
//     slider.scrollTo({
//       left: index * slideWidth,
//       behavior: "smooth",
//     });
//     setCurrentIndex(index);
//   };

//   const startAutoSlide = () => {
//     intervalRef.current = setInterval(() => {
//       setCurrentIndex((prev) => {
//         const nextIndex = (prev + 1) % slides.length;
//         scrollToSlide(nextIndex);
//         return nextIndex;
//       });
//     }, 3000);
//   };

//   useEffect(() => {
//     const slider = sliderRef.current;
//     startAutoSlide();

//     // Pause on hover
//     const pauseScroll = () => clearInterval(intervalRef.current);
//     const resumeScroll = () => startAutoSlide();

//     slider.addEventListener("mouseenter", pauseScroll);
//     slider.addEventListener("mouseleave", resumeScroll);

//     return () => {
//       clearInterval(intervalRef.current);
//       slider.removeEventListener("mouseenter", pauseScroll);
//       slider.removeEventListener("mouseleave", resumeScroll);
//     };
//   }, []);

//   return (
//     <div className="p-4 md:p-8">
//       <h1 className="text-center text-3xl md:text-5xl font-extrabold text-gray-800 leading-tight tracking-wide mb-10">
//         Empowering Lives, One Act of Kindness at a Time
//       </h1>

//       {/* Slider Container */}
//       <div
//         ref={sliderRef}
//         className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-6 no-scrollbar"
//       >
//         {slides.map((slide, index) => (
//           <div
//             key={index}
//             className={`snap-start flex-shrink-0 w-full sm:w-[320px] md:w-[340px] bg-white rounded-2xl shadow-lg p-4 transition-transform duration-300 hover:scale-[1.02] mx-auto ${
//               currentIndex === index
//                 ? "border-4 border-orange-500"
//                 : "border border-gray-200"
//             }`}
//           >
//             <div className="relative">
//               <img
//                 src={slide.img}
//                 alt={`Slide ${index}`}
//                 className="w-full h-[170px] object-cover rounded-xl"
//               />
//               <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
//                 Foods
//               </span>
//             </div>

//             <div className="mt-4">
//               <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
//                 <div
//                   className="h-full bg-orange-500 transition-all duration-500"
//                   style={{ width: `${slide.percent}%` }}
//                 ></div>
//               </div>
//               <p className="text-right text-sm font-bold text-orange-600 mt-1">
//                 {slide.percent}%
//               </p>
//             </div>

//             <div className="flex justify-between text-sm text-gray-700 mt-2">
//               <span>Raised: ${slide.raised.toLocaleString()}</span>
//               <span>Goal: ${slide.goal.toLocaleString()}</span>
//             </div>

//             <h4 className="text-lg font-semibold mt-3 text-gray-800">
//               Life Skills for Children in South Africa
//             </h4>
//             <p className="text-sm text-gray-600 mt-1">
//               Join us in making a lasting impact. Help communities grow through
//               kindness and support.
//             </p>

//             <button className="mt-4 w-full flex items-center justify-center gap-2 bg-[#1d242e] hover:bg-orange-600 text-white py-2 rounded-full font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-orange-300 animate-pulse">
//               Donate now <span className="text-lg">→</span>
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Pagination Dots */}
//       <div className="mt-6 flex justify-center gap-3">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => scrollToSlide(index)}
//             className={`w-3 h-3 rounded-full ${
//               currentIndex === index ? "bg-orange-500" : "bg-gray-300"
//             } transition-all`}
//           ></button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Slider1;

// import React, { useEffect, useRef, useState } from "react";
// import { assets } from "../assets/assets"; // Ensure assets.Img1 is valid

// const slides = [
//   {
//     img: assets.Img1,
//     percent: 80,
//     raised: 25000,
//     goal: 30000,
//     title: "Nourish a Child's Future",
//     desc: "Support underprivileged children with essential food supplies for a better tomorrow.",
//   },
//   {
//     img: assets.Img1,
//     percent: 75,
//     raised: 15000,
//     goal: 20000,
//     title: "Access to Clean Water",
//     desc: "Help us build wells and water systems in remote villages struggling with drought.",
//   },
//   {
//     img: assets.Img1,
//     percent: 90,
//     raised: 45000,
//     goal: 50000,
//     title: "Education for All",
//     desc: "Sponsor school kits and digital tools for children in marginalized communities.",
//   },
//   {
//     img: assets.Img1,
//     percent: 60,
//     raised: 12000,
//     goal: 20000,
//     title: "Healthcare in Crisis",
//     desc: "Deliver emergency healthcare aid and vaccines to those in need.",
//   },
//   {
//     img: assets.Img1,
//     percent: 85,
//     raised: 34000,
//     goal: 40000,
//     title: "Empower Women Farmers",
//     desc: "Fund tools and training to uplift women in agriculture.",
//   },
//   {
//     img: assets.Img1,
//     percent: 70,
//     raised: 21000,
//     goal: 30000,
//     title: "Support Orphan Homes",
//     desc: "Provide love, shelter, and nutrition to children without families.",
//   },
//   {
//     img: assets.Img1,
//     percent: 50,
//     raised: 15000,
//     goal: 30000,
//     title: "Rescue Stray Animals",
//     desc: "Give abandoned animals medical care and a new home.",
//   },
//   {
//     img: assets.Img1,
//     percent: 65,
//     raised: 19500,
//     goal: 30000,
//     title: "Disaster Relief Aid",
//     desc: "Be there when calamity strikes – help us respond faster.",
//   },
//   {
//     img: assets.Img1,
//     percent: 78,
//     raised: 31200,
//     goal: 40000,
//     title: "Mental Health Support",
//     desc: "Fund therapists and mental health services in underserved areas.",
//   },
//   {
//     img: assets.Img1,
//     percent: 88,
//     raised: 35200,
//     goal: 40000,
//     title: "Save Endangered Forests",
//     desc: "Protect biodiversity by helping conserve vital rainforests.",
//   },
// ];

// const Slider1 = () => {
//   const sliderRef = useRef(null);
//   const intervalRef = useRef(null);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const scrollToSlide = (index) => {
//     const slider = sliderRef.current;
//     const slideWidth = slider.offsetWidth;
//     slider.scrollTo({
//       left: index * slideWidth,
//       behavior: "smooth",
//     });
//     setCurrentIndex(index);
//   };

//   const startAutoSlide = () => {
//     intervalRef.current = setInterval(() => {
//       setCurrentIndex((prev) => {
//         const nextIndex = (prev + 1) % slides.length;
//         scrollToSlide(nextIndex);
//         return nextIndex;
//       });
//     }, 3000);
//   };

//   useEffect(() => {
//     const slider = sliderRef.current;
//     startAutoSlide();

//     const pauseScroll = () => clearInterval(intervalRef.current);
//     const resumeScroll = () => startAutoSlide();

//     slider.addEventListener("mouseenter", pauseScroll);
//     slider.addEventListener("mouseleave", resumeScroll);

//     return () => {
//       clearInterval(intervalRef.current);
//       slider.removeEventListener("mouseenter", pauseScroll);
//       slider.removeEventListener("mouseleave", resumeScroll);
//     };
//   }, []);

//   return (
//     <div className="p-4 md:p-8">
//       <h1 className="text-center text-3xl md:text-5xl font-extrabold text-gray-800 leading-tight tracking-wide mb-10">
//         Empowering Lives, One Act of Kindness at a Time
//       </h1>

//       {/* Slider Container */}
//       <div
//         ref={sliderRef}
//         className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-6 no-scrollbar"
//       >
//         {slides.map((slide, index) => (
//           <div
//             key={index}
//             className={`snap-start flex-shrink-0 w-full sm:w-[320px] md:w-[340px] bg-white rounded-2xl shadow-lg p-4 transition-transform duration-300 hover:scale-[1.02] mx-auto ${
//               currentIndex === index
//                 ? "border-4 border-orange-500"
//                 : "border border-gray-200"
//             }`}
//           >
//             <div className="relative">
//               <img
//                 src={slide.img}
//                 alt={`Slide ${index}`}
//                 className="w-full h-[170px] object-cover rounded-xl"
//               />
//               <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
//                 Foods
//               </span>
//             </div>

//             <div className="mt-4">
//               <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
//                 <div
//                   className="h-full bg-orange-500 transition-all duration-500"
//                   style={{ width: `${slide.percent}%` }}
//                 ></div>
//               </div>
//               <p className="text-right text-sm font-bold text-orange-600 mt-1">
//                 {slide.percent}%
//               </p>
//             </div>

//             <div className="flex justify-between text-sm text-gray-700 mt-2">
//               <span>Raised: ${slide.raised.toLocaleString()}</span>
//               <span>Goal: ${slide.goal.toLocaleString()}</span>
//             </div>

//             <h4 className="text-lg font-semibold mt-3 text-gray-800">
//               {slide.title}
//             </h4>
//             <p className="text-sm text-gray-600 mt-1">{slide.desc}</p>

//             <button className="mt-4 w-full flex items-center justify-center gap-2 bg-[#1d242e] hover:bg-orange-600 text-white py-2 rounded-full font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-orange-300 animate-pulse">
//               Donate now <span className="text-lg">→</span>
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Pagination Dots */}
//       <div className="mt-6 flex flex-wrap justify-center gap-2">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => scrollToSlide(index)}
//             className={`w-3 h-3 rounded-full ${
//               currentIndex === index ? "bg-orange-500" : "bg-gray-300"
//             } transition-all`}
//           ></button>
//         ))}
//       </div>

//       {/* Hide scrollbar CSS */}
//       <style>
//         {`
//           .no-scrollbar::-webkit-scrollbar {
//             display: none;
//           }
//           .no-scrollbar {
//             -ms-overflow-style: none;
//             scrollbar-width: none;
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default Slider1;
// import React, { useEffect, useRef, useState } from "react";
// import { assets } from "../assets/assets";

// const slides = [
//   {
//     img: assets.Img1,
//     percent: 80,
//     raised: 25000,
//     goal: 30000,
//     title: "Nourish a Child's Future",
//     desc: "Support underprivileged children with essential food supplies for a better tomorrow.",
//   },
//   {
//     img: assets.Img1,
//     percent: 75,
//     raised: 15000,
//     goal: 20000,
//     title: "Access to Clean Water",
//     desc: "Help us build wells and water systems in remote villages struggling with drought.",
//   },
//   {
//     img: assets.Img1,
//     percent: 90,
//     raised: 45000,
//     goal: 50000,
//     title: "Education for All",
//     desc: "Sponsor school kits and digital tools for children in marginalized communities.",
//   },
//   {
//     img: assets.Img1,
//     percent: 60,
//     raised: 12000,
//     goal: 20000,
//     title: "Healthcare in Crisis",
//     desc: "Deliver emergency healthcare aid and vaccines to those in need.",
//   },
//   {
//     img: assets.Img1,
//     percent: 85,
//     raised: 34000,
//     goal: 40000,
//     title: "Empower Women Farmers",
//     desc: "Fund tools and training to uplift women in agriculture.",
//   },
//   {
//     img: assets.Img1,
//     percent: 70,
//     raised: 21000,
//     goal: 30000,
//     title: "Support Orphan Homes",
//     desc: "Provide love, shelter, and nutrition to children without families.",
//   },
//   {
//     img: assets.Img1,
//     percent: 50,
//     raised: 15000,
//     goal: 30000,
//     title: "Rescue Stray Animals",
//     desc: "Give abandoned animals medical care and a new home.",
//   },
//   {
//     img: assets.Img1,
//     percent: 65,
//     raised: 19500,
//     goal: 30000,
//     title: "Disaster Relief Aid",
//     desc: "Be there when calamity strikes – help us respond faster.",
//   },
//   {
//     img: assets.Img1,
//     percent: 78,
//     raised: 31200,
//     goal: 40000,
//     title: "Mental Health Support",
//     desc: "Fund therapists and mental health services in underserved areas.",
//   },
//   {
//     img: assets.Img1,
//     percent: 88,
//     raised: 35200,
//     goal: 40000,
//     title: "Save Endangered Forests",
//     desc: "Protect biodiversity by helping conserve vital rainforests.",
//   },
// ];

// const Slider1 = () => {
//   const sliderRef = useRef(null);
//   const cardRefs = useRef([]);
//   const intervalRef = useRef(null);
//   const [visibleIndex, setVisibleIndex] = useState(0);

//   // Scroll to next card
//   const scrollToNext = () => {
//     const nextIndex = (visibleIndex + 1) % slides.length;
//     cardRefs.current[nextIndex]?.scrollIntoView({ behavior: "smooth", inline: "start" });
//   };

//   useEffect(() => {
//     startAutoSlide();

//     const slider = sliderRef.current;
//     const pause = () => clearInterval(intervalRef.current);
//     const resume = () => startAutoSlide();

//     slider.addEventListener("mouseenter", pause);
//     slider.addEventListener("mouseleave", resume);

//     return () => {
//       clearInterval(intervalRef.current);
//       slider.removeEventListener("mouseenter", pause);
//       slider.removeEventListener("mouseleave", resume);
//     };
//   }, [visibleIndex]);

//   const startAutoSlide = () => {
//     clearInterval(intervalRef.current);
//     intervalRef.current = setInterval(scrollToNext, 3000);
//   };

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         const visible = entries.find((entry) => entry.isIntersecting);
//         if (visible) {
//           const index = Number(visible.target.getAttribute("data-index"));
//           setVisibleIndex(index);
//         }
//       },
//       {
//         root: sliderRef.current,
//         threshold: 0.5, // At least 50% in view
//       }
//     );

//     cardRefs.current.forEach((ref) => {
//       if (ref) observer.observe(ref);
//     });

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div className="p-4 md:p-8">
//       <h1 className="text-center text-3xl md:text-5xl font-extrabold text-gray-800 mb-10">
//         Empowering Lives, One Act of Kindness at a Time
//       </h1>

//       {/* Slider */}
//       <div
//         ref={sliderRef}
//         className="flex overflow-x-auto scroll-smooth gap-6 snap-x snap-mandatory no-scrollbar"
//       >
//         {slides.map((slide, index) => (
//           <div
//             ref={(el) => (cardRefs.current[index] = el)}
//             key={index}
//             data-index={index}
//             className={`snap-start flex-shrink-0 w-full sm:w-[320px] md:w-[340px] transition-transform duration-300 p-4 bg-white rounded-2xl shadow-md mx-auto ${
//               visibleIndex === index ? "border-4 border-orange-500" : "border border-gray-300"
//             } hover:scale-[1.02]`}
//           >
//             <div className="relative">
//               <img
//                 src={slide.img}
//                 alt={`Slide ${index}`}
//                 className="w-full h-[170px] object-cover rounded-xl"
//               />
//               <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
//                 Foods
//               </span>
//             </div>

//             <div className="mt-4">
//               <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
//                 <div
//                   className="h-full bg-orange-500 transition-all duration-500"
//                   style={{ width: `${slide.percent}%` }}
//                 ></div>
//               </div>
//               <p className="text-right text-sm font-bold text-orange-600 mt-1">
//                 {slide.percent}%
//               </p>
//             </div>

//             <div className="flex justify-between text-sm text-gray-700 mt-2">
//               <span>Raised: ${slide.raised.toLocaleString()}</span>
//               <span>Goal: ${slide.goal.toLocaleString()}</span>
//             </div>

//             <h4 className="text-lg font-semibold mt-3 text-gray-800">{slide.title}</h4>
//             <p className="text-sm text-gray-600 mt-1">{slide.desc}</p>

//             <button className="mt-4 w-full flex items-center justify-center gap-2 bg-[#1d242e] hover:bg-orange-600 text-white py-2 rounded-full font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-orange-300 animate-pulse">
//               Donate now <span className="text-lg">→</span>
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Pagination Dots */}
//       <div className="mt-6 flex justify-center gap-2 flex-wrap">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() =>
//               cardRefs.current[index]?.scrollIntoView({ behavior: "smooth", inline: "start" })
//             }
//             className={`w-3 h-3 rounded-full ${
//               visibleIndex === index ? "bg-orange-500" : "bg-gray-300"
//             } transition-all`}
//           ></button>
//         ))}
//       </div>

//       {/* Hide Scrollbar */}
//       <style>{`
//         .no-scrollbar::-webkit-scrollbar {
//           display: none;
//         }
//         .no-scrollbar {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Slider1;

// import React, { useEffect, useRef, useState } from "react";
// import { assets } from "../assets/assets";

// const slides = [
//   {
//     img: assets.Img1,
//     percent: 80,
//     raised: 25000,
//     goal: 30000,
//     title: "Nourish a Child's Future",
//     desc: "Support underprivileged children with essential food supplies for a better tomorrow.",
//   },
//   {
//     img: assets.Img1,
//     percent: 75,
//     raised: 15000,
//     goal: 20000,
//     title: "Access to Clean Water",
//     desc: "Help us build wells and water systems in remote villages struggling with drought.",
//   },
//   {
//     img: assets.Img1,
//     percent: 90,
//     raised: 45000,
//     goal: 50000,
//     title: "Education for All",
//     desc: "Sponsor school kits and digital tools for children in marginalized communities.",
//   },
//   {
//     img: assets.Img1,
//     percent: 60,
//     raised: 12000,
//     goal: 20000,
//     title: "Healthcare in Crisis",
//     desc: "Deliver emergency healthcare aid and vaccines to those in need.",
//   },
//   {
//     img: assets.Img1,
//     percent: 85,
//     raised: 34000,
//     goal: 40000,
//     title: "Empower Women Farmers",
//     desc: "Fund tools and training to uplift women in agriculture.",
//   },
//   {
//     img: assets.Img1,
//     percent: 70,
//     raised: 21000,
//     goal: 30000,
//     title: "Support Orphan Homes",
//     desc: "Provide love, shelter, and nutrition to children without families.",
//   },
//   {
//     img: assets.Img1,
//     percent: 50,
//     raised: 15000,
//     goal: 30000,
//     title: "Rescue Stray Animals",
//     desc: "Give abandoned animals medical care and a new home.",
//   },
//   {
//     img: assets.Img1,
//     percent: 65,
//     raised: 19500,
//     goal: 30000,
//     title: "Disaster Relief Aid",
//     desc: "Be there when calamity strikes – help us respond faster.",
//   },
//   {
//     img: assets.Img1,
//     percent: 78,
//     raised: 31200,
//     goal: 40000,
//     title: "Mental Health Support",
//     desc: "Fund therapists and mental health services in underserved areas.",
//   },
//   {
//     img: assets.Img1,
//     percent: 88,
//     raised: 35200,
//     goal: 40000,
//     title: "Save Endangered Forests",
//     desc: "Protect biodiversity by helping conserve vital rainforests.",
//   },
// ];

// const Slider1 = () => {
//   const sliderRef = useRef(null);
//   const intervalRef = useRef(null);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const scrollToSlide = (index) => {
//     const slideWidth = sliderRef.current?.children[0]?.offsetWidth || 0;
//     sliderRef.current.scrollTo({
//       left: index * (slideWidth + 24), // +gap (gap-6 = 1.5rem = 24px)
//       behavior: "smooth",
//     });
//     setCurrentIndex(index);
//   };

//   const startAutoSlide = () => {
//     clearInterval(intervalRef.current);
//     intervalRef.current = setInterval(() => {
//       setCurrentIndex((prevIndex) => {
//         const nextIndex = (prevIndex + 1) % slides.length;
//         scrollToSlide(nextIndex);
//         return nextIndex;
//       });
//     }, 3000);
//   };

//   useEffect(() => {
//     startAutoSlide();

//     const slider = sliderRef.current;
//     const pause = () => clearInterval(intervalRef.current);
//     const resume = () => startAutoSlide();

//     slider.addEventListener("mouseenter", pause);
//     slider.addEventListener("mouseleave", resume);

//     return () => {
//       clearInterval(intervalRef.current);
//       slider.removeEventListener("mouseenter", pause);
//       slider.removeEventListener("mouseleave", resume);
//     };
//   }, []);

//   return (
//     <div className="p-4 md:p-8">
//       <h1 className="text-center text-3xl md:text-5xl font-extrabold text-gray-800 mb-10">
//         Empowering Lives, One Act of Kindness at a Time
//       </h1>

//       {/* Slider */}
//       <div
//         ref={sliderRef}
//         className="flex overflow-x-auto scroll-smooth gap-6 no-scrollbar snap-x snap-mandatory"
//       >
//         {slides.map((slide, index) => (
//           <div
//             key={index}
//             className={`snap-start flex-shrink-0 w-full sm:w-[320px] md:w-[340px] transition-transform duration-300 p-4 bg-white rounded-2xl shadow-md ${
//               currentIndex === index
//                 ? "border-4 border-orange-500"
//                 : "border border-gray-300"
//             } hover:scale-[1.02]`}
//           >
//             <div className="relative">
//               <img
//                 src={slide.img}
//                 alt={`Slide ${index}`}
//                 className="w-full h-[170px] object-cover rounded-xl"
//               />
//               <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
//                 Foods
//               </span>
//             </div>

//             <div className="mt-4">
//               <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
//                 <div
//                   className="h-full bg-orange-500 transition-all duration-500"
//                   style={{ width: `${slide.percent}%` }}
//                 ></div>
//               </div>
//               <p className="text-right text-sm font-bold text-orange-600 mt-1">
//                 {slide.percent}%
//               </p>
//             </div>

//             <div className="flex justify-between text-sm text-gray-700 mt-2">
//               <span>Raised: ${slide.raised.toLocaleString()}</span>
//               <span>Goal: ${slide.goal.toLocaleString()}</span>
//             </div>

//             <h4 className="text-lg font-semibold mt-3 text-gray-800">{slide.title}</h4>
//             <p className="text-sm text-gray-600 mt-1">{slide.desc}</p>

//             <button className="mt-4 w-full flex items-center justify-center gap-2 bg-[#1d242e] hover:bg-orange-600 text-white py-2 rounded-full font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-orange-300 animate-pulse">
//               Donate now <span className="text-lg">→</span>
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Pagination Dots */}
//       <div className="mt-6 flex flex-wrap justify-center gap-2">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => scrollToSlide(index)}
//             className={`w-3 h-3 rounded-full ${
//               currentIndex === index ? "bg-orange-500" : "bg-gray-300"
//             } transition-all`}
//           ></button>
//         ))}
//       </div>

//       {/* Hide Scrollbar */}
//       <style>{`
//         .no-scrollbar::-webkit-scrollbar {
//           display: none;
//         }
//         .no-scrollbar {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Slider1;

import React, { useEffect, useRef, useState } from "react";
import { assets } from "../assets/assets";

const slides = [
  {
    img: assets.Img1,
    percent: 80,
    raised: 25000,
    goal: 30000,
    title: "Nourish a Child's Future",
    desc: "Support underprivileged children with essential food supplies for a better tomorrow.",
  },
  {
    img: assets.Img2,
    percent: 75,
    raised: 15000,
    goal: 20000,
    title: "Access to Clean Water",
    desc: "Help us build wells and water systems in remote villages struggling with drought.",
  },
  {
    img: assets.Img3,
    percent: 90,
    raised: 45000,
    goal: 50000,
    title: "Education for All",
    desc: "Sponsor school kits and digital tools for children in marginalized communities.",
  },
  {
    img: assets.Img4,
    percent: 60,
    raised: 12000,
    goal: 20000,
    title: "Healthcare in Crisis",
    desc: "Deliver emergency healthcare aid and vaccines to those in need.",
  },
  {
    img: assets.Img1,
    percent: 85,
    raised: 34000,
    goal: 40000,
    title: "Empower Women Farmers",
    desc: "Fund tools and training to uplift women in agriculture.",
  },
  {
    img: assets.Img1,
    percent: 70,
    raised: 21000,
    goal: 30000,
    title: "Support Orphan Homes",
    desc: "Provide love, shelter, and nutrition to children without families.",
  },
  {
    img: assets.Img1,
    percent: 50,
    raised: 15000,
    goal: 30000,
    title: "Rescue Stray Animals",
    desc: "Give abandoned animals medical care and a new home.",
  },
  {
    img: assets.Img1,
    percent: 65,
    raised: 19500,
    goal: 30000,
    title: "Disaster Relief Aid",
    desc: "Be there when calamity strikes – help us respond faster.",
  },
  {
    img: assets.Img1,
    percent: 78,
    raised: 31200,
    goal: 40000,
    title: "Mental Health Support",
    desc: "Fund therapists and mental health services in underserved areas.",
  },
  {
    img: assets.Img1,
    percent: 88,
    raised: 35200,
    goal: 40000,
    title: "Save Endangered Forests",
    desc: "Protect biodiversity by helping conserve vital rainforests.",
  },
];

const Slider1 = () => {
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToSlide = (index) => {
    const slideWidth = sliderRef.current?.children[0]?.offsetWidth || 0;
    sliderRef.current.scrollTo({
      left: index * (slideWidth + 24),
      behavior: "smooth",
    });
    setCurrentIndex(index);
  };

  const startAutoSlide = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % slides.length;
        scrollToSlide(nextIndex);
        return nextIndex;
      });
    }, 3000);
  };

  useEffect(() => {
    startAutoSlide();

    const slider = sliderRef.current;
    const pause = () => clearInterval(intervalRef.current);
    const resume = () => startAutoSlide();

    slider.addEventListener("mouseenter", pause);
    slider.addEventListener("mouseleave", resume);

    return () => {
      clearInterval(intervalRef.current);
      slider.removeEventListener("mouseenter", pause);
      slider.removeEventListener("mouseleave", resume);
    };
  }, []);

  return (
    <div className="p-4 md:p-8 bg-gradient-to-br from-yellow-50 via-orange-50 to-pink-50">
      <h1 className="text-center text-3xl md:text-5xl font-extrabold text-orange-800 mb-10 leading-snug">
        Empowering Lives, One Act of Kindness at a Time
      </h1>

      {/* Slider */}
      <div
        ref={sliderRef}
        className="flex overflow-x-auto scroll-smooth gap-6 no-scrollbar snap-x snap-mandatory"
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`snap-start flex-shrink-0 w-full sm:w-[320px] md:w-[340px] transition-transform duration-300 p-4 bg-white rounded-2xl shadow-md ${
              currentIndex === index
                ? "border-4 border-orange-500"
                : "border border-gray-200"
            } hover:scale-[1.02]`}
          >
            <div className="relative">
              <img
                src={slide.img}
                alt={`Slide ${index}`}
                className="w-full h-[170px] object-cover rounded-xl"
              />
              <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                Donate
              </span>
            </div>

            <div className="mt-4">
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-orange-500 transition-all duration-500"
                  style={{ width: `${slide.percent}%` }}
                ></div>
              </div>
              <p className="text-right text-sm font-bold text-orange-600 mt-1">
                {slide.percent}%
              </p>
            </div>

            <div className="flex justify-between text-sm text-gray-700 mt-2">
              <span className="font-medium text-green-700">
                Raised: ${slide.raised.toLocaleString()}
              </span>
              <span className="font-medium text-gray-500">
                Goal: ${slide.goal.toLocaleString()}
              </span>
            </div>

            <h4 className="text-lg font-semibold mt-3 text-gray-900">
              {slide.title}
            </h4>
            <p className="text-sm text-gray-600 mt-1">{slide.desc}</p>

            <button className="mt-4 w-full flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white py-2 rounded-full font-semibold shadow hover:shadow-lg transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-orange-300 animate-pulse">
              Donate now <span className="text-lg">→</span>
            </button>
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="mt-6 flex flex-wrap justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-orange-500" : "bg-gray-300"
            } transition-all`}
          ></button>
        ))}
      </div>

      {/* Hide Scrollbar */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default Slider1;
