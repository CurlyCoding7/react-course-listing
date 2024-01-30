import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "./Card.jsx";


const Dashboard = () => {

    const [student, setStudent]  = useState({});
    const [courses, setCourses]  = useState([]);

    const {id=101} = useParams();
    //const id = 101;

    const getStudents = async() => {
      // Fetch courses from API
     await axios.get(`http://localhost:3000/students/${id}`)
      .then(response => {
        setStudent(response.data);
        console.log(response.data);
        console.log(response.data.courses);
        setCourses(response.data.courses);

      })
      .catch(error => {
        console.error('Error fetching courses:', error);
      });        
  
  }
  
  useEffect(() => {
  
  getStudents();
  
  }, [])


  return (

    <div className="dashboard-container">
        <div className="dashboard-box">
        <h3>Student name: {student.name}</h3>
         <h4>Student email: {student.email}</h4>
         <h4>Courses</h4>
          <h5>
          {
            courses.map((item) => (
               <Card key={item.id} course={item.course} instructor={item.instructor} dueDate={item.dueDate} thumbnail={item.thumbnail} progress={item.progress} />
            ))
          }

          </h5>

          <Link to={`/`}>Home</Link>
        </div>
     
    </div>
  );
};

export default Dashboard;
