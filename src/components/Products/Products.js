import { useEffect, useState } from "react";
import Product from "./Product/Product";
import Loader from "./../Loader/Loader";
import "./Products.css";

const Products = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState({ sort: "asc" });
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("all");

  useEffect(() => {
    getProducts();

    const abortControlle = new AbortController();

    fetch("https://fakestoreapi.com/products/categories", {
      signal: abortControlle.signal,
    })
      .then((res) => res.json())
      .then((categories) => {
        setCategories(categories);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          abortControlle.abort();
        }
      });
  }, []);

  function getProducts(url = "https://fakestoreapi.com/products") {
    const abortControlle = new AbortController();

    fetch(url, {
      signal: abortControlle.signal,
    })
      .then((obj) => obj.json())
      .then((products) => {
        setIsLoading(false);
        setProducts(products);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          abortControlle.abort();
        }
      });
  }

  function changeOrder() {
    setIsLoading(true);

    if (query.sort === "asc") {
      setQuery({ sort: "desc" });
    } else {
      setQuery({ sort: "asc" });
    }

    const reversedProducts = [...products].reverse();
    setProducts(reversedProducts);

    setIsLoading(false);
  }

  function productsByCategory(category) {
    setIsLoading(true);
    setQuery({ sort: "asc" });
    setCurrentCategory(category);

    if (category === "all") {
      return getProducts();
    }

    getProducts(`https://fakestoreapi.com/products/category/${category}`);
  }

  return (
    <div className="Products__container">
      <div className="Products__controllers d-flex justify-content-between">
        <button onClick={changeOrder} type="button">
          ⇅ Sort <span>({query.sort})</span>
        </button>

        <div className="Categories">
          <button
            className={currentCategory === "all" ? "active" : ""}
            onClick={productsByCategory.bind(this, "all")}
            type="button"
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              className={currentCategory === category ? "active" : ""}
              onClick={productsByCategory.bind(this, category)}
              type="button"
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="Products">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
