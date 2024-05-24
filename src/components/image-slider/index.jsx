import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./style.css";

const ImageSlider = ({ url, limit }) => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (url !== "") {
      fetchImages(url);
    }
  }, [url]);

  async function fetchImages(url, limit=10) {
    try {
      setLoading(true);
      const response = await fetch(`${url}?limit=${limit}`);
      const data = await response.json();
      if (data) {
        setImages(data);
      }
    } catch (e) {
      console.log(e.message);
    }
    setLoading(false);
  }

  function handlePrevious() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }

  function handleNext() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }

  if (loading) {
    return <div> Loading data! </div>;
  }

  return (
    <div className="container">
      <BsArrowLeftCircleFill
        onClick={handlePrevious}
        className="arrow arrow-left"
      />
      {images && images.length
        ? images.map((item, idx) => (
            <img
              key={item.id}
              alt={item.author}
              src={item.download_url}
              className={
                currentSlide === idx
                  ? "current-image"
                  : "current-image hide-current-image"
              }
            />
          ))
        : null}
      <BsArrowRightCircleFill
        onClick={handleNext}
        className="arrow arrow-right"
      />

      <span className="circle-indicators">
        {images && images.length
          ? images.map((_, idx) => (
              <button
                key={idx}
                className={
                  currentSlide === idx
                    ? "current-indicator"
                    : "current-indicator inactive-indicator"
                }
                onClick={()=>setCurrentSlide(idx)}
              ></button>
            ))
          : null}
      </span>
    </div>
  );
};

export default ImageSlider;
