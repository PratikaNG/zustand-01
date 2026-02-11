import { create } from "zustand";

import {devtools,persist} from "zustand/middleware"

const courseStore = (set) =>({
    courses:[],
    addCourse:(course)=>{
        set((state)=>({
            courses:[...state.courses,course]
        }))
    },
    removeCourse:(courseId)=>{
        set((state)=>({
            courses:state.courses.filter((item)=>item.id !== courseId)
        }))
    },
    toggleCourseStatus:(courseId)=>{
        set((state)=>({
            courses:state.courses.map((item)=> item.id === courseId ? {...item,isCompleted: !item.isCompleted} : item)
        }))
    }

})

const useCourseStore = create(devtools(persist(courseStore,{name:"courses"})))

export default useCourseStore