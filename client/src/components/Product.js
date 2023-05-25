import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_PRODUCT } from "../utils/queries";
import { CREATE_PRODUCT } from "../utils/mutations";


function Product() {
    const {data} = useQuery(QUERY_PRODUCT);

    const productList = data?.product || [];

    const [formData, setFormData] = useState({
        product: 'Beer',
    });
    let navigate = useNavigate();

    const [createProduct, {error}] = useMutation(CREATE_PRODUCT);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleFormSubmit = async (event) => {
        event.preventDefault();
    
        try {
          const { data } = await createProduct({
            variables: { ...formData },
          });
    
          navigate(`/product/${data.createProduct._id}`);
        } catch (err) {
          console.error(err);
        }
    
        setFormData({
          product: 'Beer',
        });
      };

    return (
        <div className="card bg-white card-rounded w-50">
            <form onSubmit={handleFormSubmit}>
                <label>Select New Product</label>
                <select name="product" onChange={handleInputChange}>
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
            {error && <div>Something went wrong...</div>}
        </div>
    )
};

export default Product