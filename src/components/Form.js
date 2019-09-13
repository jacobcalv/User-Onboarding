import React from 'react';
import {withFormik, Form, Field} from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import '../App.css'

const UserForm = ({errors, touched, status}) => {
    return(
        <div className='reg'>
            <h1>Registration</h1>
            <Form>
                {touched.name && errors.name && <p className='error'>{errors.name}</p>}
                <Field type='text' name='name' placeholder='Name'/>

                {touched.email && errors.email && <p className='error'>{errors.email}</p>}
                <Field type='text' name='email' placeholder='Email'/>

                {touched.password && errors.password && <p className='error'>{errors.password}</p>}
                <Field type='text' name='password' placeholder='Password'/>

                {touched.terms && errors.terms && <p className='error'>{errors.terms}</p>}
                <label>
                    <Field type='checkbox' name='terms'/>
                    <span>Accept Terms of Service</span>
                </label>
                <button type='submit'>Submit</button>
            </Form>
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
        name: yup.string().required('Name Field Must Be Filled Out'),
        email: yup.string().required('Email Field Must Be Filled Out'),
        password: yup.string().required('Password Must Be Filled Out'),
        terms: yup.boolean().oneOf([true], 'You Must Accept Terms of Service')
    }),
    handleSubmit: (values)=>{
        console.log(values)
    }
})(UserForm);
