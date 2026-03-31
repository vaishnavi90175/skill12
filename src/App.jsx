import React, { useEffect, useState } from "react";
import axios from "axios";
import AddStudent from "./components/AddStudent";
import StudentList from "./components/StudentList";

function App() {
  const [students, setStudents] = useState([]);
  const [editData, setEditData] = useState(null);

  const fetchStudents = async () => {
    const res = await axios.get("http://localhost:8080/students");
    setStudents(res.data);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Student Management System</h2>

      <AddStudent
        fetchStudents={fetchStudents}
        editData={editData}
        setEditData={setEditData}
      />

      <StudentList
        students={students}
        fetchStudents={fetchStudents}
        setEditData={setEditData}
      />
    </div>
  );
}

export default App;