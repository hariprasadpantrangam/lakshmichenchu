import React, { useState } from "react";

const courselist = [
  { id: 1, name: "react basics", price: 45000 },
  { id: 2, name: "angular basics", price: 55000 },
  { id: 3, name: "java basics", price: 25000 },
  { id: 4, name: "python basics", price: 67000 },
  { id: 5, name: "aws basics", price: 34500 },
  { id: 6, name: "datascience basics", price: 105000 }
];

function Courseselector() {
  const [selectedcourses, setSelectedcourses] = useState([]);

  const handlecheckboxchange = (course) => {
    if (selectedcourses.includes(course.id)) {
      setSelectedcourses(selectedcourses.filter((id) => id !== course.id));
    } else {
      setSelectedcourses([...selectedcourses, course.id]);
    }
  };

  const totalprice = selectedcourses.reduce((total, courseid) => {
    const course = courselist.find((c) => c.id === courseid);
    return total + (course ? course.price : 0);
  }, 0);

  const selectedCourseDetails = courselist.filter(course =>
    selectedcourses.includes(course.id)
  );

  return (
    <div style={{ padding: "20px" }}>
      <h4>Available Courses</h4>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {courselist.map((course) => (
          <li key={course.id}>
            <label>
              <input
                type="checkbox"
                checked={selectedcourses.includes(course.id)}
                onChange={() => handlecheckboxchange(course)}
              />
              {course.name} - ₹{course.price}
            </label>
          </li>
        ))}
      </ul>

      <h3>Selected Courses</h3>
      {selectedCourseDetails.length > 0 ? (
        <ul>
          {selectedCourseDetails.map((course) => (
            <li style={{color:'deeppink'}} key={course.id}>
             {course.id} - {course.name} - ₹{course.price}
            </li>
          ))}
        </ul>
      ) : (
        <p>No courses selected</p>
      )}

      <h3 style={{color:'darkblue'}}>Total Price: ₹{totalprice}</h3>
    </div>
  );
}

export default Courseselector;
