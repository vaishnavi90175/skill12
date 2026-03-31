import React, { useState, useEffect } from "react";
import axios from "axios";

function AddStudent({ fetchStudents, editData, setEditData }) {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    course: ""
  });

  useEffect(() => {
    if (editData) {
      setStudent(editData);
    }
  }, [editData]);

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (student.id) {
      await axios.put(`http://localhost:8080/students/${student.id}`, student);
      setEditData(null);
    } else {
      await axios.post("http://localhost:8080/students", student);
    }

    setStudent({ name: "", email: "", course: "" });
    fetchStudents();
  };

  return (
    <div>
      <h3>{student.id ? "Update Student" : "Add Student"}</h3>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={student.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={student.email}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="course"
          placeholder="Course"
          value={student.course}
          onChange={handleChange}
          required
        />

        <button type="submit">
          {student.id ? "Update" : "Add"}
        </button>
      </form>
    </div>
  );
}

export default AddStudent;