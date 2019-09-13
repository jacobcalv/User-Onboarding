import React, {useState, useEffect} from 'react';
import {withFormik, Form, Field} from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import '../App.css'

const UserForm = ({errors, touched, status}) => {
    console.log(status)
    const [users, setUser] = useState([])

    useEffect(()=>{
        if(status) {
            setUser([...users, status])
        }
    }, [status])
    return(
        <div className='container'>
            <div className='reg'>
                <h1>Registration</h1>
                <Form>
                    {touched.name && errors.name && <p className='error'>{errors.name}</p>}
                    <Field type='text' name='name' placeholder='Name'/>

                    {touched.email && errors.email && <p className='error'>{errors.email}</p>}
                    <Field type='text' name='email' placeholder='Email'/>

                    {touched.password && errors.password && <p className='error'>{errors.password}</p>}
                    <Field type='password' name='password' placeholder='Password'/>

                    {touched.terms && errors.terms && <p className='error'>{errors.terms}</p>}
                    <label>
                        <Field type='checkbox' name='terms'/>
                        <span>Accept Terms of Service</span>
                    </label>
                    <button type='submit'>Submit</button>
                </Form>
            </div>
            <div className='nameBoat'>
                <h2 className='title'>Current Users</h2>
                    {users.map(user => (
                        <h3 className='listOfNames'>{user.name}</h3>
                    ))}
            </div>
        </div>
    )
}

export default withFormik({
    mapPropsToValues: (values) => {
        return{
            name: values.name || '',
            email: values.email || '',
            password: values.password || '',
            terms: values.terms || false,
            
        }
    },
    validationSchema: yup.object().shape({
        name: yup.string().required('Name Field Must Be Filled Out').min(2| ReferenceError,'✔️ Name must be more than 2 characters'),
        email: yup.string().required('Email Field Must Be Filled Out').email('✔️ Must Be a Vaild Email'),
        password: yup.string().required('Password Must Be Filled Out').min(5 | ReferenceError, '✔️ Password Must Be >5'),
        terms: yup.boolean().oneOf([true], '✔️ You Must Accept Terms of Service')
    }),
    handleSubmit: (values, {setStatus})=>{
        console.log(values)
        axios.post("https://reqres.in/api/users", values)
            .then((res)=>{
                console.log(res)
                setStatus(res.data)
            })
            .catch((err)=>{
                console.log(err)
            })
    }
})(UserForm);
