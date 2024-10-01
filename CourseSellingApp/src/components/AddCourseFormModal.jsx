import React, { useState } from 'react';
import { useModal } from '../context/modal-context';
import axios from 'axios';

const Modal = () => {
    const {modalDispatch} = useModal()
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const [price,setPrice] = useState('')
    const [ImageURL,setImageURL] = useState('')

    const token = localStorage.getItem("token")

    const closeModal = () =>{
        modalDispatch({
            type:"OPEN_ADDCOURSE_MODAL"
        })
    }

    const handleTitleChange = (e) =>{
        setTitle(e.target.value)
    }
    const handleDescriptionChange = (e) =>{
        setDescription(e.target.value)
    }
    const handlePriceChange = (e) =>{
        setPrice(e.target.value)
    }

    const handleImageURLChange = (e) =>{
        setImageURL(e.target.value)
    }
    const handleAddCourseClick = async (e)=>{
        console.log(title,description,price,ImageURL)
        try{
            const response = await axios.post("http://localhost:3002/admin/course",{
                title,
                description,
                price,
                imageUrl:ImageURL
            },
            {
                headers:{
                    token:token
                }
            }
        )

            console.log(response)
            modalDispatch({
                type:"OPEN_ADDCOURSE_MODAL"
            })
        }catch(e){
            console.log("Could not add course")
        }
    }
  return (
    <>

    
        <div
          id="static-modal"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-[calc(100%-1rem)] max-h-full bg-black bg-opacity-50"
        >
          <div className="relative p-4 w-full max-w-2xl max-h-full">
            {/* Modal content */}
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              {/* Modal header */}
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white ">
                  Course Details
                </h3>
                <button
                    onClick={closeModal}
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>

              {/* Modal body */}
              <div className="p-4 md:p-5 space-y-4">
                
                    <form >
                       
                        <div class="mb-6">
                            <label htmlFor={title} class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Course Title</label>
                            <input onChange={handleTitleChange}
                             type="text" id="title" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
                        </div> 

                        
                        <div class="mb-6">
                            <label htmlFor={description} class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                            <input onChange={handleDescriptionChange}
                            type="text" id="desc" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
                        </div> 
                        <div class="mb-6">
                            <label htmlFor={price} class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                            <input onChange={handlePriceChange}
                             type="number" id="Price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div> 
                        <div class="mb-6">
                            <label htmlFor={ImageURL}class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image URL</label>
                            <input onChange={handleImageURLChange} 
                            type="text" id="imageurl" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Enter the url'required />
                        </div> 
                    </form>

              </div>
              <div className="flex justify-center items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">

                <button
                    onClick={handleAddCourseClick}
                  className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                    Add Course
                </button>
              </div>
            </div>
          </div>
        </div>
      
    </>
  );
};

export default Modal;
