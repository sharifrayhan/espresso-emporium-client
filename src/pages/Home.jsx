import Banner from "../components/Banner";
import BannerTwo from "../components/BannerTwo";
import Navbar from "../components/Navbar";
import Products from "./Products";



const Home = () => {
    return (
        <div className='max-w-8xl mx-auto '>
            <Navbar></Navbar>
            <Banner></Banner>
            <BannerTwo></BannerTwo>
            <Products></Products>
        </div>
    );
};

export default Home;