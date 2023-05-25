import Product from "../components/Product";

const Home= () => {
    return (
        <div className="card bg-white card-rounded w-50">
            <div className="card-header bg-dark text-center">
                <h1>
                    Stock Container
                </h1>
            </div>
            <Product/>
        </div>
    );
}

export default Home;