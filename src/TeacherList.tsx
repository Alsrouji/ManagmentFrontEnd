import Teacher from "./component/Teacher";


type Teacherlist= {
    addTeacher: (teacher:Teacher) => void
    teacher:Teacher[]
}
export default function TeacherList (props:Teacherlist){




    return (
        <div className={"TeacherList"}>
            {props.teacher.map(teacher => (
                <div>
                    {teacher.firstName +" "+
                     teacher.lastName
                    }
                </div>

            ))
            }
        </div>
    );
}