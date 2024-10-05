import AdminSidebar from "../components/AdminSidebar"
import { useModal } from "../context/modal-context"
import Modal from "../components/AddCourseFormModal"
import { useState,useEffect } from "react"
import axios from "axios"
import Card from "../components/Card"
import UpdateModal from "../components/UpdateCourseModal"
const Admin = ()=>{
    const username = localStorage.getItem("username")
    const token = localStorage.getItem("token")
    const {isAddCourseModalOpen,isUpdateCourseModalOpen,courseUpdated} = useModal()
    const [courses, setCourses] = useState([]);
    
    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get('https://coursesellingappbackend.onrender.com/admin/bulk/course',{
                    headers:{
                        token:token
                    }
                });
                console.log(response.data);
                setCourses(response.data.courses);
            } catch (error) {
                console.error('Error fetching courses:', error);
            }
        })();
    }, [courseUpdated]);


    return(
        <>
            <AdminSidebar/>
            {
                isAddCourseModalOpen &&
                <Modal/>
            }
            {
                isUpdateCourseModalOpen &&
                <UpdateModal/>
            }
                    <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-8 lg:px-12 py-4 bg-white border-b-4 border-indigo-500">
                <div className="font-montserrat mb-4 md:mb-0 ml-4 mt-2">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-black pl-4 ">
                        Skillifyx100
                    </h1>
                </div>

                <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
                    <div className="flex bg-slate-200 p-3 rounded-md cursor-pointer">
                        
                        
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-440q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0-80q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0 440q-139-35-229.5-159.5T160-516v-244l320-120 320 120v244q0 152-90.5 276.5T480-80Zm0-400Zm0-315-240 90v189q0 54 15 105t41 96q42-21 88-33t96-12q50 0 96 12t88 33q26-45 41-96t15-105v-189l-240-90Zm0 515q-36 0-70 8t-65 22q29 30 63 52t72 34q38-12 72-34t63-52q-31-14-65-22t-70-8Z"/></svg>
                        <span>Admin</span>
                    </div>

                    <button 
                        
                        className="flex items-center bg-white text-sm md:text-base p-2 rounded-md hover:bg-gray-300 transition duration-300"
                    >
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            height="24px" 
                            viewBox="0 -960 960 960" 
                            width="24px" 
                            fill="#5f6368"
                        >
                            <path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z"/>
                        </svg>
                
                    </button>
                </div>
            </div>
            <div className="font-montserrat mb-4 md:mb-0 ml-16 mt-4">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-black pl-4 ">
                    Welcome {username},
                    </h1>
            </div>
            <div className="flex flex-wrap pl-20 ">


                {courses.map(course => (
                    <div key={course._id} className="m-4 "> 
                        <Card data={course} />
                    </div>
                ))}
            </div>
        </>
    )
}
export default Admin