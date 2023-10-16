

const Product = ({product}) => {
    return (
        <div className=" bg-[#F5F4F1] p-10 rounded-md flex items-center w-[520px]">
            <div>
                <img className=" h-[200px]" src={product?.image} alt="" />
            </div>

            <div>
                <p><span className=" font-medium">Name: </span>{product?.Name}</p>
                <p><span className=" font-medium">Chef: </span>{product?.Chef}</p>
                <p><span className=" font-medium">Price: </span>{product?.Price}</p>
            </div>

            <div className=" ml-10">
                <div className="mb-2 rounded-md bg-[#D2B48C] h-8 w-8 flex items-center justify-center p-2"><img className="text-white  h-5" src="https://i.ibb.co/QYkjsVQ/view.png" alt="" /></div>
                <div className="mb-2 rounded-md bg-[#3C393B] h-8 w-8 flex items-center justify-center p-2"><img className="text-white h-4"  src="https://i.ibb.co/nDpjYRP/pencil.png" alt="" /></div>
                <div className="mb-2 rounded-md bg-[#EA4744] h-8 w-8 flex items-center justify-center p-2"><img  className="text-white h-[17px]" src="https://i.ibb.co/sqNz6jc/delete.png" alt="" /></div>
            </div>
        </div>
    );
};

export default Product;