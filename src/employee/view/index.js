import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getEmployeeDetails } from "../action";
import EmployeeGrid from "../components/grid";
import EmployeeTable from "../components/table";

function Employee({ getEmployeeDetails,employeeDetails }) {
    const [viewStatus,setViewStatus] = useState(true);
    useEffect(() => {
        getEmployeeDetails();
    },[getEmployeeDetails]);

    const handleView = () =>{
        setViewStatus(state => !state);
    }

    return (
        <div className="employee-view">
            <div className="employee-view-btn mt-3">
                <a href="/employee/add" className="btn btn-primary me-2" >Add Employee</a>
                <button className="btn btn-primary rounded-circle" onClick={handleView}><i className="fa fa-list"></i></button>
            </div>
            {viewStatus ? <EmployeeGrid data={employeeDetails} /> : <EmployeeTable data={employeeDetails} />}
        </div>
    );
}

const mapStateToProps = (state) => {
    
  return {
    employeeDetails: state.employee.employeeDetails,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getEmployeeDetails,
  },dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Employee);
