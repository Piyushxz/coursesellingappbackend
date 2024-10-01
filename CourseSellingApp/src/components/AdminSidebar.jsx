import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useModal } from "../context/modal-context";
const AdminSidebar = () =>{
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate()
    const {modalDispatch} = useModal()


    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };

    const handleLogoutClick = () =>{
        localStorage.removeItem("token")
        localStorage.removeItem("username")
        navigate("/")
      }
      const handleAddCourseClick = () =>{
        modalDispatch({
            type:"OPEN_ADDCOURSE_MODAL"
        })
      }

      const handleAllCoursesClick = () =>{
        if(localStorage.getItem("token") && localStorage.getItem("username")==="Admin1"){
            navigate("/admin")
        }else{
            navigate("/")
        }
        
      }
    return(
        <>
       
        <button
          data-drawer-target="default-sidebar"
          data-drawer-toggle="default-sidebar"
          aria-controls="default-sidebar"
          type="button"
          onClick={toggleSidebar}
          className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          style={{ position: 'fixed', top: '20px', left: '20px', zIndex: '50' }} 
        >
          <span className="sr-only">Open sidebar</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            />
          </svg>
        </button>
  
        {/* Sidebar */}
        {
          isOpen &&
          <aside
          id="default-sidebar"
          className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          } sm:translate-x-0 border-r-4 border-indigo-500`}
          aria-label="Sidebar"
        >
          <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
            <ul className="space-y-2 font-medium">
              <li>
                <div 
                  onClick={handleAllCoursesClick}
                  className=" cursor-pointer flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group mt-14 ml-4"
                >
                  <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                   xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M440-600v-120H320v-80h120v-120h80v120h120v80H520v120h-80ZM280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM40-800v-80h131l170 360h280l156-280h91L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68.5-39t-1.5-79l54-98-144-304H40Z"/>
                  </svg>
                  <span className="ms-3  ">Your Courses</span>
                </div>
              </li>
              <li>
              <div
                    onClick={handleAddCourseClick}
                  className="cursor-pointer flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group mt-4 ml-4"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg>
                  <span className="ms-3  ">Add Course</span>
                </div>
              </li>
              <li>
              <div
                    onClick={handleLogoutClick}
                  className=" cursor-pointer flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group mt-4 ml-4"
                >
                      <svg  className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                      
                      xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z"/>
                      </svg>
                  <span className="ms-3  ">Logout</span>
                </div>
              </li>
             
            </ul>
          </div>
        </aside>
        }
       
      </>
    )
}
export default AdminSidebar