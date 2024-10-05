import React, { useState, useEffect } from 'react';
import { useModal } from '../context/modal-context';
import axios from 'axios';
import Alert from './Alert';

const Modal = () => {
    const { modalDispatch } = useModal();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [alert, setAlert] = useState({ visible: false, message: '', type: 'error' });

    // Handle form input changes
    const handleUsernameChange = (e) => setUsername(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    // Function to close the modal
    const closeModal = () => {
        modalDispatch({
            type: 'OPEN_SIGNUP_MODAL'
        });
    };


    const handleSignUpClick = async () => {
        try {
            const response = await axios.post('https://coursesellingappbackend.onrender.com/user/signup', {
                username,
                email,
                password
            });

            if (response.status === 200) {
                setAlert({ visible: true, message: 'Signup successful', type: 'success' });
                modalDispatch({
                  type: 'OPEN_SIGNUP_MODAL'
              });
            } else if (response.status === 409) {
                setAlert({ visible: true, message: 'User already exists', type: 'error' });
            } else {
                setAlert({ visible: true, message: 'Invalid format', type: 'error' });
            }
        } catch (e) {
            console.error('Could not sign up:', e);
            setAlert({ visible: true, message: 'Signup failed. Please try again.cPlease Check the format', type: 'error' });
        }
    };

    
    useEffect(() => {
        if (alert.visible) {
            const timer = setTimeout(() => {
                setAlert({ ...alert, visible: false });
            }, 3000); 

            return () => clearTimeout(timer); 
        }
    }, [alert]);

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
                        {/* Alert */}
                        {alert.visible && <Alert message={alert.message} type={alert.type} />}

                        {/* Modal header */}
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">SignUp</h3>
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
                            <form>
                                <div className="grid gap-6 mb-6 md:grid-cols-2">
                                    <div>
                                        <label
                                            htmlFor="first_name"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Username
                                        </label>
                                        <input
                                            onChange={handleUsernameChange}
                                            type="text"
                                            id="first_name"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="John"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <label
                                        htmlFor="email"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Email address
                                    </label>
                                    <input
                                        onChange={handleEmailChange}
                                        type="email"
                                        id="email"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="john.doe@company.com"
                                        required
                                    />
                                </div>
                                <div className="mb-6">
                                    <label
                                        htmlFor="password"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Password
                                    </label>
                                    <input
                                        onChange={handlePasswordChange}
                                        type="password"
                                        id="password"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="•••••••••"
                                        required
                                    />
                                </div>
                            </form>
                        </div>

                        {/* Modal footer */}
                        <div className="flex justify-center items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                            <button
                                onClick={handleSignUpClick}
                                className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;
