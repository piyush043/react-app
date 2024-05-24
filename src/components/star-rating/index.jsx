import { FaStar } from "react-icons/fa";
import "./style.css";
import { useState } from "react";

const StarRating = (props) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (idx) => {
    setRating(idx);
  }

  const handleMouseEnter = (idx) => {
    setHover(idx);
  }
  
  const handleMouseLeave = () => {
    setHover(rating);
  }


  const elements = [...Array(props?.numberOfStars || 5)].map((_, idx) => {
    idx += 1
    return (
      <FaStar
        key={idx}
        className={idx <= (hover || rating) ? 'active': 'inactive' }
        onClick={()=>handleClick(idx)}
        onMouseEnter={()=>handleMouseEnter(idx)}
        onMouseLeave={()=>handleMouseLeave()}
        size='40'
      ></FaStar>
    );
  });

  return <div className="star-rating">{elements}</div>;
};

export default StarRating;
