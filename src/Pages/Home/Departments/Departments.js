import React, { useEffect, useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Department from '../Department/Department';
import './Departmensts.css';
const Departments = () => {
    const [departments,setDepartments] =useState([]);
    useEffect(()=>{
        fetch('/department.json')
        .then(res => res.json())
        .then(data => setDepartments(data))
    },[])
    return (
        <div>
            <h2 className="text-primary mt-5">ALL DEPARTMENTS</h2>
            <div  className="department-container">
            {
                departments.map(department => <Department
                key={department._id}
                department ={department}
                ></Department>)
            }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Departments;