import React from 'react'
import { connect } from 'react-redux';
import {useNavigate} from "react-router-dom";
import { bindActionCreators } from 'redux';
import { deleteEmployee } from '../action'; 
import Swal from 'sweetalert2'
const IMAGE_PLACEHOLDER = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"

function EmployeeTable({data,deleteEmployee}) {
    const navigate = useNavigate();
    const handleEditView = (id) => {
        navigate({
            pathname: `/employee/edit/${id}`,
        });
    }
    const handleDeleteEmployee = (id) =>{
        Swal.fire({
            title: '',
            text: 'Do you want to delete this employee',
            icon: 'error',
            showCancelButton: true,
            confirmButtonText: 'Yes delete!',
          }).then((value) =>{
            if(value.isConfirmed){
              Swal.fire(
                'Deleted!',
                'Employee Delete Successfully',
                'success'
              ).then((value) =>{
                if(value){
                  deleteEmployee(id)
                  navigate("/employee/list")
                }
              })
            }
          })
    }
  return (
    <div className="employee-view-table">
        <table class="table">
            <thead class="table-light">
                <tr>
                    <th>Image</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Gender</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {data && data.map((dt) =>(
                    <tr>
                        <td><img alt='' src={dt.photo ? dt.photo : IMAGE_PLACEHOLDER} width="128" height={'128'} /></td>
                        <td>{dt.first_name}</td>
                        <td>{dt.last_name}</td>
                        <td>{dt.email}</td>
                        <td>{dt.number}</td>
                        <td>{dt.gender === "M" ? "Male" : "Female"}</td>
                        <td>
                            <button className="btn btn-danger rounded-circle me-1" onClick={() =>{handleDeleteEmployee(dt._id)}}><i class="fa fa-trash "></i></button>
                            <button className="btn btn-success rounded-circle" onClick={() =>{handleEditView(dt._id)}}><i class="fa fa-pencil"></i></button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators({
      deleteEmployee
    },dispatch)
}
export default connect(null,mapDispatchToProps)(EmployeeTable);