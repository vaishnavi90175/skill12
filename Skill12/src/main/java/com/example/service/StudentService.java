package com.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.model.Student;
import com.example.repository.StudentRepository;

@Service
public class StudentService {

    @Autowired
    private StudentRepository repo;

    // Add Student
    public Student addStudent(Student student) {
        return repo.save(student);
    }

    // Get All Students
    public List<Student> getAllStudents() {
        return repo.findAll();
    }

    // Update Student
    public Student updateStudent(Long id, Student student) {
        Student existing = repo.findById(id).orElseThrow(() -> new RuntimeException("Student not found"));

        existing.setName(student.getName());
        existing.setEmail(student.getEmail());
        existing.setCourse(student.getCourse());

        return repo.save(existing);
    }

    // Delete Student
    public void deleteStudent(Long id) {
        repo.deleteById(id);
    }
}