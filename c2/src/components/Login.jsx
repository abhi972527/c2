import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { nanoid } from 'nanoid'
import { getUser } from '../action/auth/action'
import { useNavigate } from 'react-router-dom'

export const Login = () => {

    const [form, setForm] = useState({})

    const { user } = useSelector(state => state.authState)
    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handleChange = (e) => {
        let { value, name } = e.target

        setForm({
            ...form,
            [name]: value
        })
    }

    const handleLogin = () => {
        form["token"] = nanoid(7)

        dispatch(getUser(form.role))

        if (user[0] == "admin") {
            navigate("/admin")
        } else {
            navigate("/")
        }
    }


    return (
        <div>
            <h1>Login</h1>
            <div>
                Email
            </div>
            <input type="text" placeholder='email' name="email" onChange={(e) => handleChange(e)} /> <br />
            <div>
                Password
            </div>
            <input type="text" placeholder='password' name='password' onChange={(e) => handleChange(e)} /> <br />
            <div>
                Id
            </div>
            <input type="text" placeholder='admin or user' name='role' onChange={(e) => handleChange(e)} /> <br />
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}
