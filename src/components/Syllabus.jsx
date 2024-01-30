import { useState } from 'react';

const Syllabus = ({ title, content }) => {
    console.log(content);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="syllabus">
      <div className="header" onClick={toggleExpand}>
        <h3>{title}</h3>
        <button className='expand-button'>{isExpanded ? '-' : '+'}</button>
      </div>
      {isExpanded && (
        <div className="content">
          {
            content.map((item, index) => {
                return(
                    <ul key={index}>
                        <li>Week: {item.week}</li>
                        <li>Topic: {item.topic}</li>
                        <li>Content: {item.content}</li>

                    </ul>
                )
            })
          }
        </div>
      )}
    </div>
  );
};

export default Syllabus;
