
const Card = ({course, instructor, dueDate, thumbnail, progress }) => {
  return (
    <div className="card">
        <img src={thumbnail} alt="thumbnail" />
        <h3>{course}</h3>
        <p>{instructor}</p>
        <p>{dueDate}</p>
        <progress value={progress} max="100"> {progress}% </progress> 
        <div>
        <label htmlFor="completed">Course Complete</label>
        <input type="checkbox" name="completed" id="completed" />
        </div>
    </div>
  )
}

export default Card;