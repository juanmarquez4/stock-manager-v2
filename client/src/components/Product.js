import React from "react";
import {useQuery} from "@apollo/client";
import {QUERY_PRODUCT} from "../utils/queries";



function Product() {
    const {data} = useQuery(QUERY_PRODUCT);
    const productList = data?.product || [];
    
    return (
      <>
      <div className="card-body m-5">
        <h2>List of products:</h2>
        <ul>
          {productList.map((product) => {
            return (
              <li key={product._id}>{product.name}</li>
            )
          })}
        </ul>
      </div>
      <div className="card-footer text-center m-3">
        <h2>Ready to create a new product?</h2>        
      </div>
      <div className="card bg-white card-rounded w-50">
        <form>
          <label>Select New Product</label>
          <select>
              {productList.map((product) => {
                  return (
                      <option key={product._id} value={product.name}>
                          {product.name}
                      </option>
                  );
              })}
          </select>
          <button className="btn btn-danger" type="submit">
            Create Product!
          </button>
        </form>
      </div>
      </>
      
    )
};

export default Product