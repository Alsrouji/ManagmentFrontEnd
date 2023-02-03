
import TeacherList from "./TeacherList";
import useTeacher from "./component/useTeacher";
import TeacherForm from "./component/TeacherForm";
import Dialog from "./component/Dialog";
import {useState} from "react";

export default function TeacherPage() {
    const {
        teacher,
        addTeacher,
    }=useTeacher();

const [openDialog,setOpenDialog]=useState<boolean>(false)
const change=()=>{
    setOpenDialog(!openDialog)
}


    return (
        <div className={"page"}>
<div className={"PageHeader"}>
    <h1 className={"PageHeaderTitle"}>Teacher Managment</h1>
    <div className={"PageHeaderAction"}>
    <button className={"button"} onClick={change}>addTeacher</button>
    </div>

    <div>
    <TeacherList addTeacher={addTeacher} teacher={teacher}/>
    </div>
    {openDialog && <Dialog onClose={change}>
    <TeacherForm
        teacher={teacher}
    addTeacher={addTeacher}
        />
        </Dialog>}
        </div>
        </div>
    );
    }

