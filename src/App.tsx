
import './App.css';
import useTeacher from "./component/useTeacher";
import TeacherForm from "./component/TeacherForm";
import TeacherList from "./TeacherList";
function App() {
  const {teacher,addTeacher}=useTeacher()
  return (
    <div className="App">
      <header className="App-header">
      </header> <TeacherList addTeacher={addTeacher} teacher={teacher}/>
      <TeacherForm teacher={teacher} addTeacher={addTeacher}/>
    </div>
  );
}

export default App;
