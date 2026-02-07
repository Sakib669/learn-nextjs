"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Props = {};

const ImageSlider = ({}: Props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true, // ইমেজ স্লাইডার সাধারণত অটো-প্লে হলে সুন্দর লাগে
  };

  // র‍্যান্ডম ইমেজের একটি অ্যারে (Picsum IDs ব্যবহার করে)
  const images = [
    "https://picsum.photos/1200/500?random=1",
    "https://picsum.photos/1200/500?random=2",
    "https://picsum.photos/1200/500?random=3",
    "https://picsum.photos/1200/500?random=4",
    "https://picsum.photos/1200/500?random=5",
    "https://picsum.photos/1200/500?random=6",
  ];
  return (
    <div className="max-w-4xl mx-auto py-10 px-10">
      {" "}
      {/* বাটন দেখার জন্য পাশে একটু প্যাডিং দিয়েছি */}
      <style jsx global>{`
        /* ডিফল্ট সাদা বাটনকে কালো করার ট্রিক */
        .slick-prev:before,
        .slick-next:before {
          color: black !important;
          font-size: 30px;
        }
        .slick-prev {
          left: -40px;
        }
        .slick-next {
          right: -40px;
        }
      `}</style>
      <div className="slider-container rounded-lg overflow-hidden shadow-xl border">
        <Slider {...settings}>
          {images.map((url, index) => (
            <div key={index}>
              <img
                src={url}
                alt="Slide"
                className="w-full h-[400px] object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ImageSlider;
