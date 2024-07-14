import banner from '../assets/banner.jpg';

const Banner = () => {
  return (
    <>
        <img src={banner} className='rounded-[20px] w-full' alt="" />
    </>
  );
}

export default Banner;


{/* <div className="banner-container">
      <img className='rounded-[20px] w-full max-h-[420px]' src={banner} alt="International Day of Education Banner" />
    </div> */}

// <div className="carousel w-full">
//         <div id="slide1" className={`carousel-item relative w-full ${currentSlide === 1 ? '' : 'hidden'}`}>
//             <img src={banner} className="w-full" />
//             <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//                 <a href="#slide4" className="btn btn-circle" onClick={() => handleNavigation('prev')}>❮</a>
//                 <a href="#slide2" className="btn btn-circle" onClick={() => handleNavigation('next')}>❯</a>
//             </div>
//         </div>
//         <div id="slide2" className={`carousel-item relative w-full ${currentSlide === 2 ? '' : 'hidden'}`}>
//             <img src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
//             <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//                 <a href="#slide1" className="btn btn-circle" onClick={() => handleNavigation('prev')}>❮</a>
//                 <a href="#slide3" className="btn btn-circle" onClick={() => handleNavigation('next')}>❮</a>
//             </div>
//         </div>
//     </div>

// const [currentSlide, setCurrentSlide] = useState(1);

// const handleNavigation = (direction) => {
//     if (direction === 'next') {
//         setCurrentSlide(currentSlide + 1);
//     } else if (direction === 'prev') {
//         setCurrentSlide(currentSlide - 1);
//     }
// };

