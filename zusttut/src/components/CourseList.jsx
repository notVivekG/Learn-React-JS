import React from 'react'
import useCourseStore from '../app/courseStore'
import {useShallow} from 'zustand/shallow'


const CourseList = () => {
    const {courses, removeCourse, toggleCourseStatus} = useCourseStore(
        useShallow((state) => ({
            courses: state.courses,
            removeCourse: state.removeCourse,
            toggleCourseStatus: state.toggleCourseStatus
        }))
    )
    return (
        <>
        <ul>
            {courses.map((course, i) => {
                return (
                    <React.Fragment key={course.id}>
                        <li
                        className={`course-item`}
                        style={{
                            backgroundColor: course.completed ? "#00FF0044" : "white",
                            color: course.completed ? "white" : "black"
                        }}
                        >
                            <span className="course-item-col-1">
                                <input 
                                checked={course.completed}
                                onChange={(e) => {
                                    toggleCourseStatus(course.id)
                                }}
                                type="checkbox" />
                            </span>
                            <span>{course.title}</span>
                            <button
                            onClick={(e) => {
                                removeCourse(course.id)
                            }}
                            className='delete-btn'>
                                Delete
                            </button>
                        </li>
                    </React.Fragment>
                )
            })}
        </ul>
        </>
    )
}

export default CourseList 