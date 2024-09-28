import Modal from "../components/SignUpModal";
import Navbar from "../components/Navbar"
import { useNavigate } from "react-router-dom";
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
            </div>
            



        </>
    )
}

export default Home;
