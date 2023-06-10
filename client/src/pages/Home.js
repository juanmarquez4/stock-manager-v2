import Product from "../components/Product";
import Navbar from "../components/Navbar";
import Stock from "../components/Stock";
import Category from "../components/Category";
import "../styles/index.css"

const Home= () => {
    return (
        <>
        <Navbar/>
        <Stock/>
        <Category/>
        <Product/>
        </>
       
    );
}

export default Home;