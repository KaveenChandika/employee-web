import React from "react";
import './Card.css';
import {useNavigate} from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { deleteEmployee } from "../action"; 
const IMAGE_PLACEHOLDER = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"

function Card({id,img,name,email,mobile,gender,deleteEmployee}) {
  const navigate = useNavigate();
  const handleEditView = (id) => {
      navigate({
          pathname: `/employee/edit/${id}`,
      });
  }
  const handleDeleteEmployee = (id) =>{
    deleteEmployee(id)
    navigate("/employee/list")
  }
  return (
    <div className="card employee-card">
        <img alt="" src={img ? img : IMAGE_PLACEHOLDER }/>
        <div className="card-body pb-0">
            <p className="card-text mb-0">{name}</p>
            <p className="card-text mb-0">{email}</p>
            <p className="card-text mb-0">{mobile}</p>
            <p >{gender === 'M' ? 'Male' : 'Female'}</p>
        </div>
        <div className="employee-card-btn-sec m-2">
            <button className="btn btn-danger rounded-circle me-1" onClick={() =>{handleDeleteEmployee(id)}}><i class="fa fa-trash "></i></button>
            <button className="btn btn-success rounded-circle" onClick={() =>{handleEditView(id)}}><i class="fa fa-pencil" ></i></button>
        </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) =>{
  return bindActionCreators({
    deleteEmployee
  },dispatch)
}

export default connect(null,mapDispatchToProps)(Card);
