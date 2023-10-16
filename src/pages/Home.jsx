import Banner from "../components/Banner";
import BannerTwo from "../components/BannerTwo";
import Navbar from "../components/Navbar";
import Products from "./Products";
import FollowPage from "./FollowPage";
import Footer from "./Footer";



const Home = () => {
    return (
        <div className='max-w-8xl mx-auto '>
            <Navbar></Navbar>
            <Banner></Banner>
            <BannerTwo></BannerTwo>
            <Products></Products>
            <FollowPage></FollowPage>
            <Footer></Footer>
        </div>
    );
};

export default Home;