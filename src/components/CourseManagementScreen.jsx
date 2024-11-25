import React, { useState } from "react";
import "./CourseManagementScreen.css";

const CourseManagementScreen = () => {
    const [courseTypes, setCourseTypes] = useState([]);
    const [courses, setCourses] = useState([]);
    const [publishedCourses, setPublishedCourses] = useState([]);
    const [registrations, setRegistrations] = useState([]);
    const [selectedCourseType, setSelectedCourseType] = useState("");
    const [selectedCourse, setSelectedCourse] = useState("");
    const [selectedPublishedCourse, setSelectedPublishedCourse] = useState("");
    const [filteredPublishedCourses, setFilteredPublishedCourses] = useState([]);
    const [studentName, setStudentName] = useState("");

    // Add new course type
    const handleAddCourseType = () => {
        if (selectedCourseType && !courseTypes.includes(selectedCourseType)) {
            setCourseTypes([...courseTypes, selectedCourseType]);
            setSelectedCourseType("");
        }
    };

    // Add new course
    const handleAddCourse = () => {
        if (selectedCourse && !courses.includes(selectedCourse)) {
            setCourses([...courses, selectedCourse]);
            setSelectedCourse("");
        }
    };

    // Publish course based on type and course selection
    const handlePublishCourse = () => {
        if (selectedCourseType && selectedCourse) {
            const newPublishedCourse = `${selectedCourseType}, ${selectedCourse}`;
            if (!publishedCourses.includes(newPublishedCourse)) {
                setPublishedCourses([...publishedCourses, newPublishedCourse]);
            }
        }
    };

    // Filter published courses by selected course type
    const handleFilterCourses = (courseType) => {
        const filtered = publishedCourses.filter((pubCourse) =>
            pubCourse.startsWith(courseType)
        );
        setFilteredPublishedCourses(filtered);
    };

    // Register student for a published course
    const handleRegister = () => {
        if (studentName && selectedPublishedCourse) {
            setRegistrations([
                ...registrations,
                { student: studentName, course: selectedPublishedCourse },
            ]);
            setStudentName("");
            setSelectedPublishedCourse("");
        }
    };

    return (
        <div className="container">
            <h2>Course Management</h2>

            {/* Course Type Section */}
            <div className="section">
                <h3>Add Course Type</h3>
                <input
                    type="text"
                    placeholder="Enter Course Type"
                    value={selectedCourseType}
                    onChange={(e) => setSelectedCourseType(e.target.value)}
                />
                <button onClick={handleAddCourseType}>Add Course Type</button>
                <ul>
                    {courseTypes.map((type, index) => (
                        <li key={index} onClick={() => handleFilterCourses(type)}>
                            {type}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Course Section */}
            <div className="section">
                <h3>Add Course</h3>
                <input
                    type="text"
                    placeholder="Enter Course Name"
                    value={selectedCourse}
                    onChange={(e) => setSelectedCourse(e.target.value)}
                />
                <button onClick={handleAddCourse}>Add Course</button>
                <ul>
                    {courses.map((course, index) => (
                        <li key={index}>{course}</li>
                    ))}
                </ul>
            </div>

            {/* Publish Course Section */}
            <div className="section">
                <h3>Publish Course</h3>
                <select
                    value={selectedCourseType}
                    onChange={(e) => setSelectedCourseType(e.target.value)}
                >
                    <option value="">Select Course Type</option>
                    {courseTypes.map((type, index) => (
                        <option key={index} value={type}>
                            {type}
                        </option>
                    ))}
                </select>
                <select
                    value={selectedCourse}
                    onChange={(e) => setSelectedCourse(e.target.value)}
                >
                    <option value="">Select Course</option>
                    {courses.map((course, index) => (
                        <option key={index} value={course}>
                            {course}
                        </option>
                    ))}
                </select>
                <button onClick={handlePublishCourse}>Publish Course</button>
                <ul>
                    {publishedCourses.map((pubCourse, index) => (
                        <li key={index}>{pubCourse}</li>
                    ))}
                </ul>
            </div>

            {/* Student Registration Section */}
            <div className="section">
                <h3>Register for a Course</h3>
                <input
                    type="text"
                    placeholder="Enter Student Name"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                />
                <select
                    value={selectedPublishedCourse}
                    onChange={(e) => setSelectedPublishedCourse(e.target.value)}
                >
                    <option value="">Select Published Course</option>
                    {filteredPublishedCourses.map((pubCourse, index) => (
                        <option key={index} value={pubCourse}>
                            {pubCourse}
                        </option>
                    ))}
                </select>
                <button onClick={handleRegister}>Register</button>
                <ul className="registration-list">
                    {registrations.map((registration, index) => (
                        <li key={index}>
                            {registration.student} registered for {registration.course}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CourseManagementScreen;