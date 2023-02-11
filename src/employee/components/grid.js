import React from 'react'
import Card from "./Card";

function EmployeeGrid({data}) {
  return (
    <div className="employee-view-card"> 
        {data && data.map((dt) =>(
            <Card id={dt._id} img={dt.photo} name={dt.first_name +' '+ dt.last_name} email={dt.email} mobile={dt.number} gender={dt.gender}  />
        ))}
    </div>
  )
}

export default EmployeeGrid