import { useLoaderData } from "react-router-dom";
import Product from "./Product";


const Products = () => {

        const products = useLoaderData()

    return (
        <div className=" bg-[url(https://i.ibb.co/Fs5p48H/4.png),_url(https://i.ibb.co/3yf90s5/5.png)] bg-[position:left_top,_right_bottom]  bg-no-repeat ">
            <div className=" flex flex-col items-center justify-center my-5">
                <p>--- Sip & Savor ---</p>
                <h1 className=' text-[#331A15] text-4xl  font-rancho'>Our Popular Products</h1>
                <button className='w-24 px-2 gap-1 py-2 font-rancho flex  text-[#242222] bg-[#E3B577]' >Add Coffee <img className=" h-5" src="https://i.ibb.co/ZSyYG3T/1.png" alt="" /></button>
            </div>
            <div className=" grid grid-cols-2 gap-2 mx-[150px]">
            {
                products.map(product => (
                    <Product key={product.id} product={product}></Product>
                ))
            }
            </div>
        </div>
    );
};

export default Products;