import React, { useEffect, useState } from 'react'
import { bindActionCreators } from 'redux'
import "./Form.css"
import {insertEmployee,getEmployeeById,updateEmployee} from '../action';
import { connect } from 'react-redux';
import { useParams } from 'react-router';
import {useNavigate} from "react-router-dom";

function EmployeeForm({insertEmployee,getEmployeeById,employeeDetail,updateEmployee}) {
    const [firstName,setFirstName] = useState("")
    const [lastName,setLastName] = useState("")
    const [email,setEmail] = useState("")
    const [phone,setPhone] = useState("")
    const [gender,setGender] = useState("");
    const {id} = useParams();
    const FORM_NAME = id ? "Edit Employee" :"Add Employee";
    const navigate = useNavigate();

    useEffect(() =>{
        if(id){
            getEmployeeById(id)
        }
    },[id])

    useEffect(() =>{
        setFirstName(employeeDetail.first_name)
        setLastName(employeeDetail.last_name)
        setEmail(employeeDetail.email)
        setPhone(employeeDetail.number)
        setGender(employeeDetail.gender)
    },[employeeDetail])

    const handleSubmit = () =>{
        let insertObj = {
            first_name:firstName,
            last_name:lastName,
            email:email,
            number:phone,
            gender:gender
        }
        insertEmployee(insertObj);
        navigate('/employee/list');
    }

    const handleEdit = () =>{
        let editedObj = {
            first_name:firstName,
            last_name:lastName,
            email:email,
            number:phone,
            gender:gender
        }
        console.log(editedObj)
        updateEmployee(id,editedObj)
        navigate('/employee/list');
    }
  return (
   <div className='employee-form container'>
        <div className=''>
            <table>
                <thead>
                    <th colSpan={2} className='text-center'><h3  style={{marginBottom:'30px'}}>{FORM_NAME}</h3></th>
                </thead>
                <tbody>
                    <tr >
                        <td><label>First Name</label></td>
                        <td><input  type="text" class="form-control" onChange={(e) => setFirstName(e.target.value)} value={firstName} /></td>
                    </tr>
                    <tr>
                        <td><label>Last Name</label></td>
                        <td> <input type="text" class="form-control" onChange={(e) => setLastName(e.target.value)}  value={lastName} /></td>
                    </tr>
                    <tr>
                        <td><label>Email</label></td>
                        <td> <input type="text" class="form-control" onChange={(e) => setEmail(e.target.value)} value={email} /></td>
                    </tr>
                    <tr>
                        <td><label>Phone</label></td>
                        <td> <input type="text" class="form-control" onChange={(e) => setPhone(e.target.value)} value={phone} /></td>
                    </tr>
                    <tr>
                        <td><label>Gender</label></td>
                        <td>
                        <select class="form-select" aria-label="Default select example" onChange={(e) => setGender(e.target.value)} value={gender}>
                            <option selected>Select Gender</option>
                            <option value="M">Male</option>
                            <option value="F">Female</option>
                        </select>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        {
                        id ? (<td align={"right"}><button className='btn btn-primary w-50' onClick={handleEdit}>Edit</button></td>)
                            :(<td align={"right"}><button className='btn btn-primary w-50' onClick={handleSubmit}>Add</button></td>) 
                        }
                    </tr>
                </tbody>
            </table>
        </div>
   </div>
  )
}

const mapStateToProps = (state) =>{
    return {
        employeeDetail: state.employee.employeeDetail
    }
}

const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators({
        insertEmployee,
        getEmployeeById,
        updateEmployee
    },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(EmployeeForm);