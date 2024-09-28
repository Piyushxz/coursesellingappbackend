import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import axios from "axios";

const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get('http://localhost:3002/course/preview');
                console.log(response.data);
                setCourses(response.data.courses);
            } catch (error) {
                console.error('Error fetching courses:', error);
            }
        })();
    }, []);

    return (
        <>
            <Navbar />

            <div className="flex flex-wrap pl-20 bg-stone-100">


                {courses.map(course => (
                    <div key={course._id} className="m-4 "> 
                        <Card data={course} />
                    </div>
                ))}
            </div>
        </>
    );
}

export default Courses;
