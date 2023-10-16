

const Footer = () => {
    return (
        <div className="bg-[url(https://i.ibb.co/hKTvd2f/13.jpg)] mt-5">

            <div className=" flex gap-36 items-center p-9">
                {/* Left Side */}
                <div className=" flex mx-5 flex-col gap-3">

                    <div>
                        <img className=" h-[50px]" src="https://i.ibb.co/N6xNz0P/logo1.png" alt="" />
                        <h1 className=" text-[#331A15] font-rancho text-[32px]">Espresso Emporium</h1>
                        <p>Always ready to be your friend. Come & Contact with us to share your <br /> memorable moments, to share with your best companion.</p>
                    </div>

                    {/* Media Icons */}
                    <div className=" flex gap-2">
                        <img className=" h-5" src="https://i.ibb.co/hfGzrwd/fb-square-icon.png" alt="" />
                        <img className=" h-5" src="https://i.ibb.co/jDvqn9C/twitter-square-icon.png" alt="" />
                        <img className=" h-5" src="https://i.ibb.co/z2rFF0M/instagram-square-icon.png" alt="" />
                    </div>

                    <div>
                        <h1 className=" text-[#331A15] font-rancho text-[32px]">Get in Touch</h1>
                        <div className="flex gap-2 items-center"><img className=" h-5" src="https://i.ibb.co/p1Nmh1Y/phone-receiver-silhouette.png" alt="" /><p>+88 01533 333 333</p></div>
                        <div className="flex gap-2 items-center"><img className=" h-5" src="https://i.ibb.co/C7Yp4ys/email.png" alt="" /><p>info@gmail.com</p></div>
                        <div className="flex gap-2 items-center"><img className=" h-5" src="https://i.ibb.co/TBZYN9h/location-pin.png" alt="" /><p>72, Wall street, King Road, Dhaka</p></div>
                    </div>

                    </div>

                    {/* Form */}
                    <div>
                        <h1 className=" text-[#331A15] font-rancho text-[32px]">Connect With Us</h1>
                        <form >
                            <input className="mb-2  p-2 rounded-md" type="text" placeholder="Name" name="" id="" />
                            <br />
                            <input className="mb-2 p-2 rounded-md" type="email" placeholder="Email" name="" id="" />
                            <br />
                            <textarea className=" h-[100px] p-2 rounded-md" type="text" name="message" placeholder="Message" id="" cols="30" rows="10"></textarea>
                            <br />
                            <button type="submit" className=" p-3 rounded-3xl border-2 border-[#331A15]">Send Message</button>
                        </form>
                    </div>
            </div>

            <div className=" bg-[url(https://i.ibb.co/HCJ13Mh/15.jpg)] px-3 py-2">
                <div className=" items-center justify-center flex gap-2">
                    <h1 className=" text-white font-rancho ">Copyright Espresso Emporium ! All Rights Reserved</h1>
                </div>
            </div>

        </div>
    );
};

export default Footer;