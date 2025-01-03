import { ManagementApp } from "./components/modules/managementApp/managementApp";
import  StudentForm  from "./components/modules/addstudent/addstudent";
import ModifyStudent from "./components/modules/modifystudent/modifystudent";
import "./App.css";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="*" element={ <ManagementApp />} /> 
        <Route path="/addstudent" element={ <StudentForm />} />
        <Route path="/modifyStudent" element={<ModifyStudent />} />
        </Routes>
    </div>
  );
}

export default App;
