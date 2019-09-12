import React from 'react';
import {withFormik, Form, Field} from 'formik';
import * as yup from 'yup';
import axios from 'axios';

const UserForm = () => {
    return(
        <div>
            <h1>Registration</h1>
            <Form>
                <Field type='text' name='name' placeholder='Name'/>
                <Field type='text' name='email' placeholder='Email'/>
                <Field type='text' name='password' placeholder='Password'/>
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

        }
    }
})(UserForm);
