import React from "react";
import Slider from "react-slick";

export default function HomeImage({ dataImages }) {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section>
      <div className="data-img-container">
        <div className="slider">
          <h3 className="slider-title">Pure beans</h3>
          <Slider {...settings}>
            {dataImages.map((imageTypes) => {
              if (imageTypes.tags.includes("beans")) {
                return (
                  <img
                    src={imageTypes.photo}
                    alt={imageTypes.author}
                    key={imageTypes.id}
                  ></img>
                );
              }
            })}
          </Slider>
        </div>
        <div className="slider">
          <h3 className="slider-title">Gorgeous Cups</h3>
          <Slider {...settings}>
            {dataImages.map((imageTypes) => {
              if (imageTypes.tags.includes("cups")) {
                return (
                  <img
                    src={imageTypes.photo}
                    alt={imageTypes.author}
                    key={imageTypes.id}
                  ></img>
                );
              }
            })}
          </Slider>
        </div>
        <div className="slider">
          <h3 className="slider-title">Fancy Grinders</h3>
          <Slider {...settings}>
            {dataImages.map((imageTypes) => {
              if (imageTypes.tags.includes("grinder")) {
                return (
                  <img
                    src={imageTypes.photo}
                    alt={imageTypes.author}
                    key={imageTypes.id}
                  ></img>
                );
              }
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
}
