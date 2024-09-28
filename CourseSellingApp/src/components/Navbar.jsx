import { useModal } from "../context/modal-context";

const Navbar = () => {


    const {modalDispatch} = useModal()

    const handleSignUpClick = () =>{
        modalDispatch({
            type:"OPEN_SIGNUP_MODAL"
        })
    }

    const handleSignInClick = () =>{
        modalDispatch({
            type:"OPEN_SIGNIN_MODAL"
        })

    }
    return (
        <>
            <div className="flex flex-col md:flex-row justify-between px-6 md:px-12 py-4 bg-white items-center">
                <div className="font-montserrat mb-4 md:mb-0">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-black">
                        Coursera
                    </h1>
                </div>

                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
                    <button 
                    onClick={handleSignInClick}
                    className="bg-white text-sm md:text-base p-2 rounded-md hover:bg-gray-300 transition duration-300">
                        Login
                    </button>
                    <button 
                    onClick={handleSignUpClick}
                    className="bg-white text-sm md:text-base p-2 rounded-md hover:bg-gray-300 transition duration-300">
                        Signup
                    </button>
                </div>
            </div>
        </>
    );
};

export default Navbar;
