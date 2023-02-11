import React from 'react'
import EmployeeForm from "../components/Form";
import {useNavigate} from "react-router-dom";
function Create() {
  const navigate = useNavigate();
  const handleRedirectToList = () =>{
    navigate('/employee/list')
  }
  return (
    <div className='employee-create container'>
        <div style={{textAlign:"right"}}>
            <button className='btn btn-primary me-3' onClick={handleRedirectToList}>List View</button>
        </div>
        <EmployeeForm />
    </div>
  )
}

export default Create