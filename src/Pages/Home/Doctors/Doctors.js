import React, { useEffect, useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Doctor from '../Doctor/Doctor';
import './Doctors.css';


const Doctors = () => {
    const [doctors,setDoctors]=useState([])
    useEffect(()=>{
        fetch('/doctors.json')
        .then(res => res.json())
        .then(data => setDoctors(data))
    },[])
    return (
        <div>
           <h2 className="text-primary mt-5">OUR DOCTORS</h2>
            <div className="doctors-container">
                {
                    doctors.map(doctor => <Doctor
                    key={doctor._id}
                    doctor={doctor}
                    ></Doctor>)
                }
            </div> 
            <Footer></Footer>
        </div>
    );
};

export default Doctors;