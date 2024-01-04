// // src/components/MainContent.js
// import React from "react";

// const MainContent = () => {
//   return (
//     <div className="flex flex-col items-center mt-8 mx-4 lg:mx-0">
//       {/* Title */}
//       <h1 className="text-3xl indent-2 lg:text-4xl font-bold text-center lg:text-left tracking-wide leading-4 mt-8">
//         Unleash your potential: A <pre></pre> Journey into Tech excellence
//       </h1>

//       <div className="bg-orange-500 w-16 h-1 my-2 mx-auto lg:hidden"></div>
//       <p className="text-sm indent-1 lg:text-base text-center lg:text-left mt-4">
//         In the dynamic realm of technology, where innovation and advancement{" "}
//         <pre></pre> are the driving forces, staying ahead of the curve is
//         essential.
//       </p>

//       <button className="bg-orange-500 hover:bg-red-700 text-white px-4 py-2 w-1/6  border rounded-full mt-8">
//         Get started
//       </button>

//       <div className="flex items-center mt-4">
//         <div className="flex -space-x-4 rtl:space-x-reverse">
//           <img
//             className="w-10 h-10 border-2 border-white rounded-full"
//             src="https://pbs.twimg.com/profile_images/1581964383013720064/Ae8N6OT9_400x400.jpg"
//             alt=""
//           />
//           <img
//             className="w-10 h-10 border-2 border-white rounded-full"
//             src="https://pbs.twimg.com/profile_images/1581964383013720064/Ae8N6OT9_400x400.jpg"
//             alt=""
//           />
//           <img
//             class="w-10 h-10 border-2 border-white rounded-full"
//             src="https://pbs.twimg.com/profile_images/1581964383013720064/Ae8N6OT9_400x400.jpg"
//             alt=""
//           />
//           <img
//             class="w-10 h-10 border-2 border-white rounded-full"
//             src="https://pbs.twimg.com/profile_images/1581964383013720064/Ae8N6OT9_400x400.jpg"
//             alt=""
//           />
//         </div>

//         <p className="text-black ml-2">
//           Trusted by <b>1000+</b> Students
//         </p>
//       </div>

//       <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
//         <img
//           src="https://twitter.com/AkshayPSingh09/photo"
//           alt="Image 1"
//           className="w-full h-48 object-cover rounded"
//         />
//         <img
//           src="https://twitter.com/AkshayPSingh09/photo"
//           alt="Image 2"
//           className="w-full h-48 object-cover rounded"
//         />
//         <img
//           src="https://twitter.com/AkshayPSingh09/photo"
//           alt="Image 3"
//           className="w-full h-48 object-cover rounded"
//         />
//         <img
//           src="https://twitter.com/AkshayPSingh09/photo"
//           alt="Image 4"
//           className="w-full h-48 object-cover rounded"
//         />
//         <img
//           src="https://twitter.com/AkshayPSingh09/photo"
//           alt="Image 5"
//           className="w-full h-48 object-cover rounded"
//         />
//         <img
//           src="https://twitter.com/AkshayPSingh09/photo"
//           alt="Image 6"
//           className="w-full h-48 object-cover rounded"
//         />
//       </div>
//     </div>
//   );
// };

// export default MainContent;

// src/components/MainContent.js
import React from "react";

const MainContent = () => {
  return (
    // import * as React from "react";

    // function MyComponent(props) {
    //   return (
    <div className="items-center flex flex-col py-12">
      <div className="text-stone-900 text-center text-5xl font-bold leading-[60px] self-center max-w-[716px] mt-3.5 max-md:max-w-full">
        Unleash your potential: A journey into Tech excellence
      </div>
      <div className="text-stone-900 text-opacity-80 text-center text-base self-center max-w-[594px] mt-6 max-md:max-w-full">
        In the dynamic realm of technology, where innovation and advancement are
        the driving forces, staying ahead of the curve is essential.
      </div>

      <div
        className="text-zinc-50 text-base font-medium leading-6 whitespace-nowrap justify-center items-center self-center w-[287px] max-w-full mt-10 px-16 py-3 rounded-[80px] max-md:px-5"
        style={{
          borderRadius: "80px",
          background: "linear-gradient(101deg, #F29C1F 0%, #EE3F24 53.37%)",
        }}
      >
        Get started
      </div>

      {/* <div className="text-zinc-50 text-base font-medium leading-6 whitespace-nowrap justify-center items-center self-center w-[287px] max-w-full mt-10 px-16 py-3 rounded-[80px] max-md:px-5">
            Get started
          </div> */}

      <div className="items-stretch self-center flex w-[287px] max-w-full gap-1 mt-2.5 px-5">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e4f8c3933046a90060bf386954f4eb76259934868a242a6d43f93063ba05e2e3?apiKey=d6479c9759d24260a152efdb16e597f6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4f8c3933046a90060bf386954f4eb76259934868a242a6d43f93063ba05e2e3?apiKey=d6479c9759d24260a152efdb16e597f6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4f8c3933046a90060bf386954f4eb76259934868a242a6d43f93063ba05e2e3?apiKey=d6479c9759d24260a152efdb16e597f6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4f8c3933046a90060bf386954f4eb76259934868a242a6d43f93063ba05e2e3?apiKey=d6479c9759d24260a152efdb16e597f6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4f8c3933046a90060bf386954f4eb76259934868a242a6d43f93063ba05e2e3?apiKey=d6479c9759d24260a152efdb16e597f6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4f8c3933046a90060bf386954f4eb76259934868a242a6d43f93063ba05e2e3?apiKey=d6479c9759d24260a152efdb16e597f6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4f8c3933046a90060bf386954f4eb76259934868a242a6d43f93063ba05e2e3?apiKey=d6479c9759d24260a152efdb16e597f6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4f8c3933046a90060bf386954f4eb76259934868a242a6d43f93063ba05e2e3?apiKey=d6479c9759d24260a152efdb16e597f6&"
          className="aspect-[3] object-contain object-center w-[72px] items-start overflow-hidden shrink-0 max-w-full"
        />
        <div className="text-stone-900 text-base grow whitespace-nowrap">
          Trusted by <span className="font-semibold text-stone-900">1000+</span>Students
        </div>
      </div>
      <div className="self-stretch flex w-full items-stretch justify-between gap-5 mt-16 px-5 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f5a01a6eb4d46498d22c0295995047f5727c38956277f0d7621cc24aa95b39a5?apiKey=d6479c9759d24260a152efdb16e597f6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5a01a6eb4d46498d22c0295995047f5727c38956277f0d7621cc24aa95b39a5?apiKey=d6479c9759d24260a152efdb16e597f6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5a01a6eb4d46498d22c0295995047f5727c38956277f0d7621cc24aa95b39a5?apiKey=d6479c9759d24260a152efdb16e597f6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5a01a6eb4d46498d22c0295995047f5727c38956277f0d7621cc24aa95b39a5?apiKey=d6479c9759d24260a152efdb16e597f6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5a01a6eb4d46498d22c0295995047f5727c38956277f0d7621cc24aa95b39a5?apiKey=d6479c9759d24260a152efdb16e597f6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5a01a6eb4d46498d22c0295995047f5727c38956277f0d7621cc24aa95b39a5?apiKey=d6479c9759d24260a152efdb16e597f6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5a01a6eb4d46498d22c0295995047f5727c38956277f0d7621cc24aa95b39a5?apiKey=d6479c9759d24260a152efdb16e597f6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5a01a6eb4d46498d22c0295995047f5727c38956277f0d7621cc24aa95b39a5?apiKey=d6479c9759d24260a152efdb16e597f6&"
          className="aspect-[0.47] object-contain object-center w-[126px] overflow-hidden shrink-0 max-w-full"
        />
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2787d8a72849617e54e9703d3d2412cb95d40e2bec0fbe06e552a321a32de9fe?apiKey=d6479c9759d24260a152efdb16e597f6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2787d8a72849617e54e9703d3d2412cb95d40e2bec0fbe06e552a321a32de9fe?apiKey=d6479c9759d24260a152efdb16e597f6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2787d8a72849617e54e9703d3d2412cb95d40e2bec0fbe06e552a321a32de9fe?apiKey=d6479c9759d24260a152efdb16e597f6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2787d8a72849617e54e9703d3d2412cb95d40e2bec0fbe06e552a321a32de9fe?apiKey=d6479c9759d24260a152efdb16e597f6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2787d8a72849617e54e9703d3d2412cb95d40e2bec0fbe06e552a321a32de9fe?apiKey=d6479c9759d24260a152efdb16e597f6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2787d8a72849617e54e9703d3d2412cb95d40e2bec0fbe06e552a321a32de9fe?apiKey=d6479c9759d24260a152efdb16e597f6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2787d8a72849617e54e9703d3d2412cb95d40e2bec0fbe06e552a321a32de9fe?apiKey=d6479c9759d24260a152efdb16e597f6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2787d8a72849617e54e9703d3d2412cb95d40e2bec0fbe06e552a321a32de9fe?apiKey=d6479c9759d24260a152efdb16e597f6&"
          className="aspect-[1.36] object-contain object-center w-full overflow-hidden grow basis-[0%]"
        />
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/aa8d6769440a99ca825e0d9f6baebd2e5a9fc31e713762e709ef5af66be982a7?apiKey=d6479c9759d24260a152efdb16e597f6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/aa8d6769440a99ca825e0d9f6baebd2e5a9fc31e713762e709ef5af66be982a7?apiKey=d6479c9759d24260a152efdb16e597f6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/aa8d6769440a99ca825e0d9f6baebd2e5a9fc31e713762e709ef5af66be982a7?apiKey=d6479c9759d24260a152efdb16e597f6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/aa8d6769440a99ca825e0d9f6baebd2e5a9fc31e713762e709ef5af66be982a7?apiKey=d6479c9759d24260a152efdb16e597f6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/aa8d6769440a99ca825e0d9f6baebd2e5a9fc31e713762e709ef5af66be982a7?apiKey=d6479c9759d24260a152efdb16e597f6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/aa8d6769440a99ca825e0d9f6baebd2e5a9fc31e713762e709ef5af66be982a7?apiKey=d6479c9759d24260a152efdb16e597f6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/aa8d6769440a99ca825e0d9f6baebd2e5a9fc31e713762e709ef5af66be982a7?apiKey=d6479c9759d24260a152efdb16e597f6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/aa8d6769440a99ca825e0d9f6baebd2e5a9fc31e713762e709ef5af66be982a7?apiKey=d6479c9759d24260a152efdb16e597f6&"
          className="aspect-[1.36] object-contain object-center w-full overflow-hidden grow basis-[0%]"
        />
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e14595f22a78c755a5fcb1c53adc1c15b30ceb31dd069e81d45747ff140ee218?apiKey=d6479c9759d24260a152efdb16e597f6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e14595f22a78c755a5fcb1c53adc1c15b30ceb31dd069e81d45747ff140ee218?apiKey=d6479c9759d24260a152efdb16e597f6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e14595f22a78c755a5fcb1c53adc1c15b30ceb31dd069e81d45747ff140ee218?apiKey=d6479c9759d24260a152efdb16e597f6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e14595f22a78c755a5fcb1c53adc1c15b30ceb31dd069e81d45747ff140ee218?apiKey=d6479c9759d24260a152efdb16e597f6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e14595f22a78c755a5fcb1c53adc1c15b30ceb31dd069e81d45747ff140ee218?apiKey=d6479c9759d24260a152efdb16e597f6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e14595f22a78c755a5fcb1c53adc1c15b30ceb31dd069e81d45747ff140ee218?apiKey=d6479c9759d24260a152efdb16e597f6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e14595f22a78c755a5fcb1c53adc1c15b30ceb31dd069e81d45747ff140ee218?apiKey=d6479c9759d24260a152efdb16e597f6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e14595f22a78c755a5fcb1c53adc1c15b30ceb31dd069e81d45747ff140ee218?apiKey=d6479c9759d24260a152efdb16e597f6&"
          className="aspect-[1.36] object-contain object-center w-full overflow-hidden grow basis-[0%]"
        />
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e5f5096148d612d03e95de60d2d8176f76cf6003286ed5a9d99365e92a7956d0?apiKey=d6479c9759d24260a152efdb16e597f6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e5f5096148d612d03e95de60d2d8176f76cf6003286ed5a9d99365e92a7956d0?apiKey=d6479c9759d24260a152efdb16e597f6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e5f5096148d612d03e95de60d2d8176f76cf6003286ed5a9d99365e92a7956d0?apiKey=d6479c9759d24260a152efdb16e597f6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e5f5096148d612d03e95de60d2d8176f76cf6003286ed5a9d99365e92a7956d0?apiKey=d6479c9759d24260a152efdb16e597f6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e5f5096148d612d03e95de60d2d8176f76cf6003286ed5a9d99365e92a7956d0?apiKey=d6479c9759d24260a152efdb16e597f6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e5f5096148d612d03e95de60d2d8176f76cf6003286ed5a9d99365e92a7956d0?apiKey=d6479c9759d24260a152efdb16e597f6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e5f5096148d612d03e95de60d2d8176f76cf6003286ed5a9d99365e92a7956d0?apiKey=d6479c9759d24260a152efdb16e597f6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e5f5096148d612d03e95de60d2d8176f76cf6003286ed5a9d99365e92a7956d0?apiKey=d6479c9759d24260a152efdb16e597f6&"
          className="aspect-[0.47] object-contain object-center w-[126px] overflow-hidden shrink-0 max-w-full"
        />
      </div>
      <div className="self-stretch w-full mt-6 mb-3.5 px-5 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[27%] max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/623985982be37854070f87309ed6ba3c31ca6c1206ee700a3dd4ed2a9bbd329f?apiKey=d6479c9759d24260a152efdb16e597f6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/623985982be37854070f87309ed6ba3c31ca6c1206ee700a3dd4ed2a9bbd329f?apiKey=d6479c9759d24260a152efdb16e597f6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/623985982be37854070f87309ed6ba3c31ca6c1206ee700a3dd4ed2a9bbd329f?apiKey=d6479c9759d24260a152efdb16e597f6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/623985982be37854070f87309ed6ba3c31ca6c1206ee700a3dd4ed2a9bbd329f?apiKey=d6479c9759d24260a152efdb16e597f6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/623985982be37854070f87309ed6ba3c31ca6c1206ee700a3dd4ed2a9bbd329f?apiKey=d6479c9759d24260a152efdb16e597f6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/623985982be37854070f87309ed6ba3c31ca6c1206ee700a3dd4ed2a9bbd329f?apiKey=d6479c9759d24260a152efdb16e597f6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/623985982be37854070f87309ed6ba3c31ca6c1206ee700a3dd4ed2a9bbd329f?apiKey=d6479c9759d24260a152efdb16e597f6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/623985982be37854070f87309ed6ba3c31ca6c1206ee700a3dd4ed2a9bbd329f?apiKey=d6479c9759d24260a152efdb16e597f6&"
              className="aspect-[1.36] object-contain object-center w-full overflow-hidden grow max-md:mt-6"
            />
          </div>
          <div className="flex flex-col items-stretch w-[27%] ml-5 max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/470038fb95fa11b8b4d8e67e993cf34274ec9678b230d0fcf63efc16e88af02d?apiKey=d6479c9759d24260a152efdb16e597f6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/470038fb95fa11b8b4d8e67e993cf34274ec9678b230d0fcf63efc16e88af02d?apiKey=d6479c9759d24260a152efdb16e597f6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/470038fb95fa11b8b4d8e67e993cf34274ec9678b230d0fcf63efc16e88af02d?apiKey=d6479c9759d24260a152efdb16e597f6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/470038fb95fa11b8b4d8e67e993cf34274ec9678b230d0fcf63efc16e88af02d?apiKey=d6479c9759d24260a152efdb16e597f6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/470038fb95fa11b8b4d8e67e993cf34274ec9678b230d0fcf63efc16e88af02d?apiKey=d6479c9759d24260a152efdb16e597f6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/470038fb95fa11b8b4d8e67e993cf34274ec9678b230d0fcf63efc16e88af02d?apiKey=d6479c9759d24260a152efdb16e597f6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/470038fb95fa11b8b4d8e67e993cf34274ec9678b230d0fcf63efc16e88af02d?apiKey=d6479c9759d24260a152efdb16e597f6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/470038fb95fa11b8b4d8e67e993cf34274ec9678b230d0fcf63efc16e88af02d?apiKey=d6479c9759d24260a152efdb16e597f6&"
              className="aspect-[1.36] object-contain object-center w-full overflow-hidden grow max-md:mt-6"
            />
          </div>
          <div className="flex flex-col items-stretch w-[27%] ml-5 max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/978a71fe9815f52a076e22d0f3346aa1731a1d8564beda4565f455ffa00e40b4?apiKey=d6479c9759d24260a152efdb16e597f6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/978a71fe9815f52a076e22d0f3346aa1731a1d8564beda4565f455ffa00e40b4?apiKey=d6479c9759d24260a152efdb16e597f6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/978a71fe9815f52a076e22d0f3346aa1731a1d8564beda4565f455ffa00e40b4?apiKey=d6479c9759d24260a152efdb16e597f6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/978a71fe9815f52a076e22d0f3346aa1731a1d8564beda4565f455ffa00e40b4?apiKey=d6479c9759d24260a152efdb16e597f6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/978a71fe9815f52a076e22d0f3346aa1731a1d8564beda4565f455ffa00e40b4?apiKey=d6479c9759d24260a152efdb16e597f6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/978a71fe9815f52a076e22d0f3346aa1731a1d8564beda4565f455ffa00e40b4?apiKey=d6479c9759d24260a152efdb16e597f6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/978a71fe9815f52a076e22d0f3346aa1731a1d8564beda4565f455ffa00e40b4?apiKey=d6479c9759d24260a152efdb16e597f6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/978a71fe9815f52a076e22d0f3346aa1731a1d8564beda4565f455ffa00e40b4?apiKey=d6479c9759d24260a152efdb16e597f6&"
              className="aspect-[1.36] object-contain object-center w-full overflow-hidden grow max-md:mt-6"
            />
          </div>
          <div className="flex flex-col items-stretch w-[27%] ml-5 max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2787d8a72849617e54e9703d3d2412cb95d40e2bec0fbe06e552a321a32de9fe?apiKey=d6479c9759d24260a152efdb16e597f6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2787d8a72849617e54e9703d3d2412cb95d40e2bec0fbe06e552a321a32de9fe?apiKey=d6479c9759d24260a152efdb16e597f6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2787d8a72849617e54e9703d3d2412cb95d40e2bec0fbe06e552a321a32de9fe?apiKey=d6479c9759d24260a152efdb16e597f6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2787d8a72849617e54e9703d3d2412cb95d40e2bec0fbe06e552a321a32de9fe?apiKey=d6479c9759d24260a152efdb16e597f6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2787d8a72849617e54e9703d3d2412cb95d40e2bec0fbe06e552a321a32de9fe?apiKey=d6479c9759d24260a152efdb16e597f6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2787d8a72849617e54e9703d3d2412cb95d40e2bec0fbe06e552a321a32de9fe?apiKey=d6479c9759d24260a152efdb16e597f6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2787d8a72849617e54e9703d3d2412cb95d40e2bec0fbe06e552a321a32de9fe?apiKey=d6479c9759d24260a152efdb16e597f6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2787d8a72849617e54e9703d3d2412cb95d40e2bec0fbe06e552a321a32de9fe?apiKey=d6479c9759d24260a152efdb16e597f6&"
              className="aspect-[1.03] object-contain object-center w-[275px] overflow-hidden shrink-0 max-w-full grow max-md:mt-6"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

//     <div className="flex flex-col items-center mt-8 mx-4 lg:mx-0 sm:tracking-wider">
//       {/* Title */}
//       <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center lg:text-left tracking-wide leading-4 mt-8">
//         Unleash your potential: A <pre></pre>
//         <p className="sm: mt-2">Journey into Tech excellence</p>
//       </h1>

//       {/* Divider for mobile screens */}
//       {/* <div className="bg-orange-500 w-16 h-1 my-2 mx-auto sm:hidden"></div> */}

//       {/* Paragraph */}
//       <p className="text-sm sm:text-base text-center lg:text-left mt-8">
//         In the dynamic realm of technology, where innovation and advancement{" "}
//         <pre></pre> are the driving forces, staying ahead of the curve is
//         essential.
//       </p>

//       {/* Button below the title */}
//       <button className="bg-orange-500 hover:bg-red-700 text-white px-4 py-2 w-full sm:w-1/2 lg:w-1/6 border rounded-full mt-8">
//         Get started
//       </button>

//       {/* User icons and trusted by */}
//       <div className="flex items-center mt-4">
//         <div className="flex -space-x-4 rtl:space-x-reverse">
//           <img
//             className="w-10 h-10 border-2 border-white rounded-full"
//             src="https://pbs.twimg.com/profile_images/1581964383013720064/Ae8N6OT9_400x400.jpg"
//             alt=""
//           />
//           <img
//             className="w-10 h-10 border-2 border-white rounded-full"
//             src="https://pbs.twimg.com/profile_images/1581964383013720064/Ae8N6OT9_400x400.jpg"
//             alt=""
//           />
//           <img
//             className="w-10 h-10 border-2 border-white rounded-full"
//             src="https://pbs.twimg.com/profile_images/1581964383013720064/Ae8N6OT9_400x400.jpg"
//             alt=""
//           />
//           <img
//             className="w-10 h-10 border-2 border-white rounded-full"
//             src="https://pbs.twimg.com/profile_images/1581964383013720064/Ae8N6OT9_400x400.jpg"
//             alt=""
//           />
//         </div>
//         <pre className="lg:hidden"></pre>
//         <p className="text-black ml-2">
//           Trusted by <b>1000+</b> Students
//         </p>
//       </div>

//       {/* Image collage */}

// <div class="grid grid-cols-4 md:grid-cols-4 gap-4 mt-16">
//     <div class="grid gap-4">
//         <div>
//             <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt="" />
//         </div>
//         <div>
//             <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt="" />
//         </div>
//         <div>
//             <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt="" />
//         </div>
//     </div>
//     <div class="grid gap-4">
//         <div>
//             <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt="" />
//         </div>
//         <div>
//             <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt="" />
//         </div>
//         <div>
//             <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt="" />
//         </div>
//     </div>
//     <div class="grid gap-4">
//         <div>
//             <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt="" />
//         </div>
//         <div>
//             <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt="" />
//         </div>
//         <div>
//             <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt="" />
//         </div>
//     </div>
//     <div class="grid gap-4">
//         <div>
//             <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt="" />
//         </div>
//         <div>
//             <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt="" />
//         </div>
//         <div>
//             <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt="" />
//         </div>
//     </div>
// </div>

//       {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
//         <img
//           src="https://twitter.com/AkshayPSingh09/photo"
//           alt="Image 1"
//           className="w-full h-48 object-cover rounded"
//         />
//         <img
//           src="https://twitter.com/AkshayPSingh09/photo"
//           alt="Image 2"
//           className="w-full h-48 object-cover rounded"
//         />
//         <img
//           src="https://twitter.com/AkshayPSingh09/photo"
//           alt="Image 3"
//           className="w-full h-48 object-cover rounded"
//         />
//         <img
//           src="https://twitter.com/AkshayPSingh09/photo"
//           alt="Image 4"
//           className="w-full h-48 object-cover rounded"
//         />
//         <img
//           src="https://twitter.com/AkshayPSingh09/photo"
//           alt="Image 5"
//           className="w-full h-48 object-cover rounded"
//         />
//         <img
//           src="https://twitter.com/AkshayPSingh09/photo"
//           alt="Image 6"
//           className="w-full h-48 object-cover rounded"
//         />
//       </div> */}
//     </div>
//   );
// };

export default MainContent;
