import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Syllabus from "./Syllabus";

const CourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse]  = useState({});


  const getCourse = async() => {
    // Fetch courses from API
   await axios.get(`http://localhost:3000/courses/${id}`)
    .then(response => {
      setCourse(response.data);
      console.log(response.data);
    })
    .catch(error => {
      console.error('Error fetching courses:', error);
    });        

}

useEffect(() => {

getCourse();

}, [])


  

  return (
    <div className="course-details">
        <div className="details">
        <h1>Course Details</h1>
      <ol className="course-list">
        <li><h3>Name: </h3>{course.name}</li>
        <li><h3>Instructor: </h3>{course.instructor}</li>
        <li><h3>Description: </h3>{course.description}</li>
        <li><h3>Enrollment Status: </h3>{course.enrollmentStatus}</li>
        <li><h3>Course Duration: </h3>{course.duration}</li>
        <li><h3>Schedule: </h3>{course.schedule}</li>
        <li><h3>Location: </h3>{course.location}</li>
        <li><h3>Prerequisites: </h3>{course.prerequisites}</li>
        <li><Syllabus title="syllabus" content={course.syllabus}/></li>
      </ol>

      <Link to={`/`}>Back</Link>
        </div>

    </div>
  );
};

export default CourseDetails;
