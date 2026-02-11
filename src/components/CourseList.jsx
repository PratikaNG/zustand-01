import { Fragment } from "react"
import useCourseStore from "../courseStore"

const CourseList = () => {
    // const {courses,removeCourse,toggleCourseStatus} = useCourseStore((state)=>({
    //     courses: state.courses,
    //     removeCourse:state.removeCourse,
    //     toggleCourseStatus:state.toggleCourseStatus
    // }))
    const courses = useCourseStore((state) => state.courses);
const removeCourse = useCourseStore((state) => state.removeCourse);
const toggleCourseStatus = useCourseStore((state) => state.toggleCourseStatus);

  return (
    <>
      <ul>
        {courses.map((item,index)=>{
            return(
                <Fragment key={index}>
                    <li className={`course-item`} style={{backgroundColor:item.isCompleted ? "green" : "grey"}}>
                        <span className="course-item-col-1">
                            <input 
                            type="checkbox" 
                            checked={item.isCompleted}
                            onChange={(e)=>{toggleCourseStatus(item.id)}}
                            />
                        </span>
                        <span>{item?.title}</span>
                        <button className="delete-btn" onClick={()=>{removeCourse(item.id)}}>Delete</button>
                    </li>
                </Fragment>
            )
        })}
      </ul>
    </>
  )
}

export default CourseList

