
import {useState} from "react";
import Teacher from "./Teacher";

type TeacherFormProps = {
    teacher: Teacher[],
    addTeacher: (teacher: Teacher) => void
}
export default function TeacherForm(props: TeacherFormProps) {
    const initialState = {
        id:"",
        firstName: "",
        lastName: "",
        birthDate: "",
        sex: "",
        position: "",
        adress: "",
        tele: "",
        email: ""
    }
    const [teacher, setTeacher] = useState<Teacher>(initialState)
    const change = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = (e.target.name)
        const value = (e.target.value)


        setTeacher({
            ...teacher,
            [name]: value
        })
    }
    const addTeacher = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        props.addTeacher(teacher)

    }


    return (<div>
        <form className={"Teacherform"} onSubmit={addTeacher}>

            <label>
                <div> First Name</div>
                <input value={teacher.firstName} name="firstName" onChange={change}/>
            </label>

            <label>
                <div>Last Name</div>
                <input value={teacher.lastName} name="lastName" onChange={change}/>
            </label>
                <label>
                    <div>Brith Date</div>
                    <input value={teacher.birthDate} name="birthDate" onChange={change}/>
                </label>

                <label>
                    <div>Sex
                    </div>
                    <input value={teacher.sex} name="sex" onChange={change}/>
                </label>

                <label>
                    <div> Position</div>
                    <input value={teacher.position} name="position" onChange={change}/>
                </label>
                <label>
                    <div> Adress</div>
                    <input value={teacher.adress} name="adress" onChange={change}/>
                </label>
                <label>
                    <div> Tele</div>
                    <input value={teacher.tele} name="tele" onChange={change}/>
                </label>
                <label>
                    <div>Email</div>
                    <input value={teacher.email} name="email" onChange={change}/>
                </label>
                <div>
                    <button>
                        send
                    </button>

                </div>
        </form>
    </div>
)
}