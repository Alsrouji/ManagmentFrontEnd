import axios from "axios";
import Teacher from "./Teacher";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;
import {useEffect, useState} from "react";

export default function (){
    const [teacher,setTeacher]=useState<Teacher[]>([])
    const [editTeacher,setEditTeacher]=useState<Teacher>()
    const getTeachers=()=>{
        axios.get("/api/teachers")
            .then(response =>{
            return response.data
        })
            .then(data=>setTeacher(data))
    }
    useEffect (()=>getTeachers(),[])
    const addTeacher=(teacher:Teacher)=> {
        axios.post("/api/teachers", teacher)
            .then(() => getTeachers())
            .catch(() => ("error"))
    }

    const editTeacherTeacher = () => {
        setEditTeacher({
            id:"",
            firstName: "",
            lastName: "",
            birthDate: "",
            sex: "",
            position: "",
            adress: "",
            tele: "",
            email: ""
        })
    }

    return {
           teacher,addTeacher,editTeacherTeacher
     }


}