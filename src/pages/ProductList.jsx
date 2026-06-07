import { useState, useEffect } from 'react';
import { FaArrowUp, FaSearch, FaSortAmountUp } from 'react-icons/fa';
import "./ProductList.css";

export default function ProductList() {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedQuery, setSelectedQuery] = useState("all");
  const [sortBy, setSortBy] = useState();
  // get products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const resp = await fetch("https://fakestoreapi.com/products");

        const data = await resp.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  //get category
  useEffect(() => {
    if (!products.length) return;

    const getCategories = ["all", ...new Set(products.map(p => p.category))]

    setCategories(getCategories)
  }, [products]);
  return (
    <div className='container'>
      <div className='row g-3 mb-4 align-items-center'>
        {/* search box */}
        <div className='col-12 col-md-4'>
          <div className='input-group search-box mt-2'>
            <span className='input-group-text bg-white border-end-0'>
              <FaSearch />
            </span>
            <input type='search' className='form-control border-start-0' placeholder='Search...' />
          </div>
        </div>
        {/* categories */}
        <div className='col-12 col-md-5'>
          <div className='d-flex gap-1 flex-wrap gap-1 pb-2 mt-3 justify-content-center'>
            {categories.map((category) =>
            (<button key={category} className={
              category === selectedQuery ? "btn btn-sm btn-dark text-capitalize text-nowrap" : "btn btn-sm btn-outline-dark text-capitalize text-nowrap"
            }
              onClick={() => setSelectedQuery(category)}
            >{category}</button>)
            )}
          </div>
        </div>
        {/* form select */}
        <div className='col-12 col-md-3'>
          <select className='form-select'
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}>
            <option>Sort By</option>
            <option value="price-asc">
              Price ↑
            </option>

            <option value="price-desc">
              Price ↓
            </option>

            <option value="title-asc">Name A-Z</option>
            <option value="title-desc">Name Z-A</option>
          </select>
        </div>
      </div>

      {loading ?
      <div className='text-center py-5'>
        <div className='spinner-border text-dark'>
        </div>
        <p className='mt-2'>Loading...</p>
      </div>
      :
      <div className='row g-4'>
        {products.map(product =>(
        <div className='col-12 col-md-6 col-lg-3'>
          {/* product card */}
          
            <div className='card h-100 shadow-lg border-3 rounded-3'>
              {/* img */}
              <div className='p-3 bg-white text-center'
              style={{
                height: "220px",
                position:"relative"
              }}>
                <img className='img-fluid h-100' src={product.image} alt={product.title}/>
              </div>
              {/* title */}
              <div className='card-body f-flex flex-clomn'>
                <h5 className='card-title text-truncate fs-6 fw-bold' title={product.title}>
                  {product.title}
                </h5>

                <p className='card-text text-danger fw-bold fs-5 mb-2'>
                  {product.price}
                </p>
              </div>
          </div>
        </div>
         ))}
      </div>
      }
    </div>
  )
}
