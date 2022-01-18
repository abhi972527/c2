import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getJobs } from '../action/jobs/action'
import { Navbar } from './Navbar'

export const Admin = () => {


    const [form, setForm] = useState({})
    const dispatch = useDispatch()

    const handleChng = (e) => {
        let { value, name } = e.target

        setForm({
            ...form,
            [name]: value
        })
    }


    const handleClick = () => {
        fetch("http://localhost:3001/jobs", {
            method: "POST",
            body: JSON.stringify(form),
            headers: {
                'Content-Type': "application/json"
            }
        }).then(res => res.json())
            .then(res => {
                dispatch(getJobs(res))
            })
    }


    return (
        <div>
            <Navbar />
            <h1>Admin</h1>
            <div>
                <input type="text" name='company_name' placeholder='Company Name' onChange={(e) => handleChng(e)} /> <br />
                <input type="text" name='job_title' placeholder='Job Title' onChange={(e) => handleChng(e)} />    <br />
                <input type="number" name='salary_range' placeholder='Salary Range' onChange={(e) => handleChng(e)} />    <br />
                <input type="text" name='description' placeholder='Job Description' onChange={(e) => handleChng(e)} />    <br />
                <input type="text" name='location' placeholder='Job Location' onChange={(e) => handleChng(e)} />  <br />
                <input type="text" name='jobtype' placeholder='Job Type' onChange={(e) => handleChng(e)} />   <br />
                <button onClick={handleClick}>Submit</button>
            </div>
        </div>
    )
}

