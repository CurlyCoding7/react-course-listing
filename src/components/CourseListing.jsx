import axios from "axios";
import { useEffect, useState } from "react";
import CourseItem from "./CourseItem";
import { Link } from "react-router-dom";

const CourseListing = () => {

    const [courses, setCourses] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    //const [studentId, setStudentId] = useState("");


   
    // let data = [];

     const getCourses = async() => {
          // Fetch courses from API
         await axios.get('http://localhost:3000/courses')
          .then(response => {
            setCourses(response.data);
            console.log(response.data);
          })
          .catch(error => {
            console.error('Error fetching courses:', error);
          });        

    }

    useEffect(() => {
      
    getCourses();
     
    }, [])

    const filteredCourses = courses.filter(course =>
        course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
      );
    

  return (
    <div className="course-container">
      <div className="dashbord-link">
        <Link to={`/dashboard/101`}>Dashboard</Link>
      </div>      
      
      <h1>All Courses</h1>

   <input id="search-bar"
        type="text"
        placeholder="Search by course or instructor"
        onChange={(e) => setSearchTerm(e.target.value)}
      />

   <table>
    <thead>
    <tr>
        <th>Course Id</th>
        <th>Course Name</th>
        <th>Description</th>
        <th>Instructor</th>
        <th>Details</th>
    </tr>
    </thead>
 
   {filteredCourses.map(course => (
      <CourseItem key={course.id} id={course.id} name={course.name} instructor={course.instructor} description={course.description} />
    ))}
   </table>
  
  </div>
  );
};

export default CourseListing;
