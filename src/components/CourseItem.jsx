import { Link } from 'react-router-dom';

const CourseItem = ( {id, name, instructor,description  } ) => {
    // const {id, name, instructor,description } = course;
  return (
    
    <tbody>
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{description}</td>
            <td>{instructor}</td>
            <td><Link to={`/course/${id}`}>View Details</Link></td>
        </tr>
    </tbody>
  );
};

export default CourseItem;
