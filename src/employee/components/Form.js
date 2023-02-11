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
    },[getEmployeeById,id])

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
            <form onSubmit={handleSubmit}>
            <table>
                <thead>
                    <th colSpan={2} className='text-center'><h3  style={{marginBottom:'30px'}}>{FORM_NAME}</h3></th>
                </thead>
                <tbody>
                    <tr >
                        <td width={'150px'}><label>First Name</label></td>
                        <td>
                            <input  
                                type="text" 
                                className="form-control" 
                                onChange={(e) => setFirstName(e.target.value)} 
                                value={firstName} 
                                required
                                pattern={'^[A-Za-z0-9]{6,10}$'} />
                            <span>Firstname should be minimum 6 and maximam 10 character and Cannot be Empty</span>
                        </td>
                    </tr>
                    <tr>
                        <td><label>Last Name</label></td>
                        <td>
                            <input 
                                type="text" 
                                className="form-control" 
                                onChange={(e) => setLastName(e.target.value)}  
                                value={lastName}
                                required
                                pattern={'^[A-Za-z0-9]{6,10}$'} />
                            <span>Lastname should be minimum 6 and maximam 10 character and Cannot be Empty</span>
                        </td>
                    </tr>
                    <tr>
                        <td><label>Email</label></td>
                        <td>
                            <input 
                                type="email" 
                                className="form-control" 
                                onChange={(e) => setEmail(e.target.value)} 
                                value={email} />
                            <span className='text-danger' >It should be a valid email address</span>
                        </td>
                    </tr>
                    <tr>
                        <td><label>Phone</label></td>
                        <td> 
                            <input 
                                type="text" 
                                className="form-control" 
                                onChange={(e) => setPhone(e.target.value)} 
                                value={phone} 
                                pattern={'^[0-9]{10}$'}
                                />
                             <span className='text-danger' >Mobile number should be valid</span>
                        </td>
                    </tr>
                    <tr>
                        <td><label>Gender</label></td>
                        <td>
                        <select className="form-select" aria-label="Default select example" onChange={(e) => setGender(e.target.value)} value={gender}>
                            <option selected>Select Gender</option>
                            <option value="M">Male</option>
                            <option value="F">Female</option>
                        </select>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        {
                        id ? (<td align={"right"}><button className='btn btn-primary w-50 edit-btn' onClick={handleEdit}>Edit</button></td>)
                            :(<td align={"right"}><button type="submit" className='btn btn-primary w-50' >Add</button></td>) 
                        }
                    </tr>
                </tbody>
            </table>
            </form>
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