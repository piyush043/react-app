import { useEffect, useState } from "react";
import "./style.css";

const ScrollProgress = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    fetchData(url);
  }, [url]);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercent);
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  function handleScrollPercent() {
    console.log(
      document.body.scrollTop,
      document.documentElement.scrollTop,
      document.documentElement.scrollHeight,
      document.documentElement.clientHeight
    );
    const scrolled =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    setScrollPercent((scrolled / height) * 100);
  }
  console.log(scrollPercent);

  async function fetchData({ url }) {
    setLoading(true);
    try {
      const response = await fetch(url);
      const res = await response.json();
      if (res && res.products && res.products.length) {
        setData(res.products);
      }
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  }

  if (loading) {
    return <h1>Loading data...</h1>;
  }

  return (
    <div className="scroll-progress-container">
      <div className="header-conatiner">
        <h1>Scroll Progress</h1>
        <div className="scroll-bar-container">
          <div
            className="current-scroll"
            style={{ width: `${scrollPercent}%` }}
          ></div>
        </div>
      </div>
      <div className="content-conatiner">
        {data && data.length
          ? data.map((item) => <p key={item.id}>{item.title}</p>)
          : null}
      </div>
    </div>
  );
};

export default ScrollProgress;
