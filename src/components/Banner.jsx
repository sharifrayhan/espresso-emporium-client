

const Banner = () => {
    return (
        <div className=' bg-[url(https://i.ibb.co/4MSNzwL/3.png)]  h-screen bg-cover p-1'>
            <div className=" flex gap-2 flex-col  ml-[600px] justify-center h-full "> 
                <h1 className=' text-white text-4xl  font-rancho'>Would you like a Cup of Delicious Coffee?</h1>
                <p className=" text-white">It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of <br /> every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                <button className='w-24 px-1 py-2 font-rancho text-[#242222] bg-[#E3B577]' >Learn More</button>
            </div>
        </div>
    );
};

export default Banner;