import { useQuery } from "@apollo/client";
import { QUERY_PRODUCTS } from "../utils/queries";

import Product from "../components/Products";

const Stock = () => {
    const { data } = useQuery(QUERY_PRODUCTS);

    const productsList = data?.products || [];

    return (
        <div className="card bg-white card-rounded w-50">
            <div className="card-header bg-dark text-center">
                <h1>
                    Stock Container
                </h1>
            </div>
            <div className="card-body m-5">
                <h2>List of products:</h2>
                    <ul>
                        {productsList.map((product) => {
                            return (
                                <li key={product._id}>

                                </li>
                            );
                        })}
                    </ul>
            </div>
            
            <div className="card-footer text-center m-3">
                <h2>Ready to create a new product?</h2>
                    <Product/>
                <button className="btn btn-lg btn-danger">Create Product!</button>
            </div>
        </div>
        
    );
}

export default Stock;