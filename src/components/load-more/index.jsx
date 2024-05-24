import { useEffect, useState } from "react";
import "./style.css";

const LoadMore = ({ url, limit = 5 }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  let [count, setCount] = useState(0);
  let [disabled, setDisabled] = useState(false);

  useEffect(() => {
    getProducts();
  }, [count]);

  useEffect(() => {
    if (products && products.length >= 100) {
      setDisabled(true);
    }
  }, [products]);

  async function getProducts() {
    setLoading(true);
    const apiUrl = `${url}?limit=${limit}&skip=${count * limit}`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    if (data && data.products && data.products.length) {
      setProducts((prevData) => [...prevData, ...data.products]);
    }
    setLoading(false);
  }

  const handleLoadMore = () => {
    setCount(count === 5 ? 0 : (count += 1));
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  console.log(products);
  return (
    <div className="load-more-container">
      <div className="product-container">
        {products && products.length ? (
          products.map((item) => (
            <div className="product">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="product-image"
              />
              <p2>{item.title}</p2>
            </div>
          ))
        ) : (
          <h2> No items found!</h2>
        )}
      </div>
      <div className="button-container">
        <button disabled={disabled} onClick={() => handleLoadMore()}>
          Load More
        </button>
        {disabled ? <p>Product limit 100 reached</p> : null}
      </div>
    </div>
  );
};

export default LoadMore;
