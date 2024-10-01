import Modal from "../components/SignUpModal";
import Navbar from "../components/Navbar"
import { useNavigate } from "react-router-dom";
import Testimonials from "../components/Testimonials";
import FooterCard from "../components/FooterComponent";
const Home = () => {
    const navigate = useNavigate()
    const handleViewCoursesClick = () =>{
        navigate("/courses")
    }
    return (
        <>
            <Navbar />
            <div className="flex flex-col md:flex-row justify-center pt-10 bg-black">
                <div className="mt-10 md:mt-20 text-center md:text-left">
                    <h1 className="font-montserrat text-4xl md:text-6xl font-extrabold text-white">
                        <span className="block">Achieve Your</span>
                        <span className="block">Career Goals.</span>
                    </h1>
                </div>
    
                <div className="pb-6 mt-6 md:mt-0">
                    <img src="https://media.geeksforgeeks.org/img-practice/premium-page-hero-banner-1719552281.svg" className="w-full md:w-96" alt="Hero Banner"/>
                </div>
            </div>

            <div className="bg-white pt-10 flex flex-col items-center justify-center text-center pb-10 px-4 md:px-20">
                <h1 className="text-3xl md:text-5xl font-extrabold font-montserrat">Start Your Journey With Us.</h1>
                <h1 className="text-slate-500 text-lg md:text-2xl font-extrabold pt-4">Join our courses and get firsthand knowledge about web and web3.</h1>
                <button onClick={handleViewCoursesClick}
                className="mt-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-2xl px-8 py-4 text-lg md:text-2xl font-bold text-white">
                    View Courses
                </button>
            </div>

            <div className="bg-black py-10 flex flex-col items-center">
                <h1 className="text-3xl md:text-5xl font-extrabold font-montserrat text-white">Testimonials</h1>

                <div className="flex flex-wrap  justify-center">
                    <div className="m-4">
                    <Testimonials/>
                    </div>
                    <div className="m-4">
                    <Testimonials/>
                    </div>
                    <div className="m-4">
                    <Testimonials/>
                    </div>
                    <div className="m-4">
                    <Testimonials/>
                    </div>
                    

                </div>
            </div>

            
                <div className="flex justify-center m-4 rounded-lg">
                    <FooterCard/>
                </div>
            

            <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-between pl-14 pr-14 pt-14 pb-14">
                <div className="flex flex-col  max-w-96 ">
                    <h3 className="font-montserrat text-3xl font-extrabold text-white">Skillifyx100</h3>
                    <h5 className="font-montserrat text-white ">This is an initiative by IDK to personally mentor folks in the field of Programming. We believe that today you are either a 1x engineer or a 100x engineer and nothing in the middleware.</h5>
                </div>

                <div>
                    <h3 className="font-montserrat text-3xl font-extrabold text-white">Get in Touch</h3>
                        <div className="mt-4 flex flex-row  justify-center ">
                            <svg className="mr-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-youtube">
                            <path d="M22.54 6.42A2.78 2.78 0 0 0 20.8 4.7C18.78 4 12 4 12 4s-6.78 0-8.8.7A2.78 2.78 0 0 0 1.46 6.42 29.94 29.94 0 0 0 1 12a29.94 29.94 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.74 1.72c2.02.7 8.8.7 8.8.7s6.78 0 8.8-.7a2.78 2.78 0 0 0 1.74-1.72A29.94 29.94 0 0 0 23 12a29.94 29.94 0 0 0-.46-5.58z"></path>
                            <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon>
                            </svg>

                        <svg className="mr-6"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                            
                        <svg  className="mr-6"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter">
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.43 2c-.88.52-1.85.89-2.88 1.09a4.48 4.48 0 0 0-7.7 4.1A12.72 12.72 0 0 1 3 4.1a4.48 4.48 0 0 0 1.39 5.96A4.48 4.48 0 0 1 2.8 9.7v.05a4.48 4.48 0 0 0 3.58 4.39 4.48 4.48 0 0 1-2.03.08 4.48 4.48 0 0 0 4.18 3.11A9 9 0 0 1 2 18.57 12.72 12.72 0 0 0 9 21c7.55 0 11.67-6.23 11.67-11.64 0-.18-.01-.35-.02-.53A8.28 8.28 0 0 0 23 3z"></path>
                        </svg>

                        </div>
                </div>


            </div>
            <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-center h-16">
                <span className="font-montserrat text-white">© 2024 All Rights Reserved.</span>
            </div>




        </>
    )
}

export default Home;
