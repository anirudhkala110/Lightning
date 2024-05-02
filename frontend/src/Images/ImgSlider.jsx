// import React, { useState } from 'react';

// const data = {
//     cards: [
//         {
//             index: 0,
//             picture:
//                 "https://cdn.pixabay.com/photo/2018/01/11/09/52/two-3075753_960_720.jpg",
//             description: "#fashion",
//             reviewPic:
//                 "https://cdn.pixabay.com/photo/2017/07/31/21/01/laptop-2561018_1280.jpg",
//             reviewerName: "Olivia Bell",
//             reviewerPosition: "Freelancer",
//             review:
//                 '"Lorem ipsum dolor sit amet, ea est patrioque cotidieque, accusam patrioque consequuntur vim at. Rebum nulla melius cu usu, pro erant abhorreant moderatius ei. Errem oporteat gloriatur ad est."',
//         },
//         {
//             index: 1,
//             picture:
//                 "https://cdn.pixabay.com/photo/2016/01/19/19/26/amsterdam-1150319_1280.jpg",
//             description: "#tonight",
//             reviewPic: "https://pixabay.com/images/download/woman-6212065_640.jpg",
//             reviewerName: "Briam Cute",
//             reviewerPosition: "Beauty/Fashion",
//             review:
//                 '"Lorem ipsum dolor sit amet, ea est patrioque cotidieque, accusam patrioque consequuntur vim at. Rebum nulla melius cu usu"',
//         },
//         {
//             index: 2,
//             picture:
//                 "https://cdn.pixabay.com/photo/2019/03/10/18/31/hong-kong-4046913_1280.jpg",
//             description: "#hongkong",
//             reviewPic:
//                 "https://images.pexels.com/photos/936229/pexels-photo-936229.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//             reviewerName: "William White",
//             reviewerPosition: "Project Manager",
//             review:
//                 '"Lorem ipsum dolor sit amet, ea est patrioque cotidieque, accusam patrioque consequuntur vim at. Rebum nulla melius cu usu, pro erant abhorreant moderatius ei. Errem oporteat gloriatur ad est."',
//         },
//         {
//             index: 3,
//             picture:
//                 "https://cdn.pixabay.com/photo/2019/10/31/06/58/avenue-4591121_1280.jpg",
//             description: "#fall",
//             reviewPic: "https://pixabay.com/images/download/woman-1439909_640.jpg",
//             reviewerName: "Emma Doran",
//             reviewerPosition: "FamilyPhotoStudio",
//             review:
//                 '"Lorem ipsum dolor sit amet, ea est patrioque cotidieque, accusam patrioque consequuntur vim at. Rebum nulla melius cu usu, pro erant abhorreant moderatius ei. Errem oporteat gloriatur ad est."',
//         },
//         {
//             index: 4,
//             picture:
//                 "https://cdn.pixabay.com/photo/2019/11/19/02/05/seascape-4636264_1280.jpg",
//             description: "#tide",
//             reviewPic:
//                 "https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg",
//             reviewerName: "Lorenzo Papapietro",
//             reviewerPosition: "Art Director",
//             review:
//                 '"Lorem ipsum dolor sit amet, ea est patrioque cotidieque, accusam patrioque consequuntur vim at. Rebum nulla melius cu usu, pro erant abhorreant moderatius ei. Errem oporteat gloriatur ad est."',
//         },
//         {
//             index: 5,
//             picture:
//                 "https://cdn.pixabay.com/photo/2019/05/23/02/15/marching-band-4223023_1280.jpg",
//             description: "#parade",
//             reviewPic:
//                 "https://images.pexels.com/photos/935969/pexels-photo-935969.jpeg",
//             reviewerName: "Samuel Karter",
//             reviewerPosition: "Consulting",
//             review:
//                 '"Lorem ipsum dolor sit amet, ea est patrioque cotidieque, accusam patrioque consequuntur vim at. Rebum nulla melius cu usu, pro erant abhorreant moderatius ei. Errem oporteat gloriatur ad est."',
//         },
//         {
//             index: 6,
//             picture:
//                 "https://cdn.pixabay.com/photo/2017/08/10/04/29/girl-2618180_1280.jpg",
//             description: "#bicycle",
//             reviewPic:
//                 "https://images.pexels.com/photos/555790/pexels-photo-555790.png",
//             reviewerName: "Elliott Finn",
//             reviewerPosition: 'CEO "Cordex"',
//             review:
//                 '"Accusam patrioque consequuntur vim at. Rebum nulla melius cu usu, pro erant abhorreant moderatius ei. Errem oporteat gloriatur ad est."',
//         },
//     ],
// };

// const ImgSlider = () => {
//     const [index, setIndex] = useState(0);

//     const prevSlide = (currentIndex) => {
//         if (currentIndex === 0) {
//             return data.cards.length - 1;
//         }
//         return currentIndex - 1;
//     };

//     const nextSlide = (currentIndex) => {
//         if (currentIndex === data.cards.length - 1) {
//             return 0;
//         }
//         return currentIndex + 1;
//     };

//     const handlePrevSlide = () => {
//         setIndex(prevSlide(index));
//     };

//     const handleNextSlide = () => {
//         setIndex(nextSlide(index));
//     };

//     return (
//         <div className="slider-wrap">
//             {/* Slider */}
//             <div className="slider d-flex">
//                 <button className='text-success' onClick={handlePrevSlide} id="leftArrow">
//                     <i class="bi bi-chevron-compact-left"></i>
//                 </button>
//                 <div className="holder">
//                     {/* Left Slide */}
//                     <div className="slide">
//                         {/* <span className="text">{data.cards[prevSlide(index)].description}</span> */}
//                     </div>
//                     {/* Central Slide */}
//                     <div className="slide central">
//                         {/* <span className="text">{data.cards[index].description}</span> */}
//                         <img src={data.cards[index].reviewPic} alt={data.cards[index].reviewerName} className="reviewPic w-100" style={{ maxHeight: '350px' }} />
//                         {/* <span className="reviewerName">{data.cards[index].reviewerName}</span> */}
//                         {/* <span className="reviewerPosition">{data.cards[index].reviewerPosition}</span> */}
//                         {/* <span className="review">{data.cards[index].review}</span> */}
//                         <span className="top">
//                             <i className="fa fa-star-o"></i>
//                             <i className="fa fa-star-o"></i>
//                             <i className="fa fa-star-o"></i>
//                             <i className="fa fa-star-o"></i>
//                             <i className="fa fa-star-o"></i>
//                         </span>
//                     </div>
//                     {/* Right Slide */}
//                     <div className="slide">
//                         {/* Include right slide background image */}
//                     </div>
//                 </div>
//                 <button onClick={handleNextSlide} id="rightArrow" className='text-primary'>
//                     <i class="bi bi-chevron-compact-right"></i>
//                 </button>
//             </div>

//         </div>
//     );
// };

// export default ImgSlider;
