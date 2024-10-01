// Render Prop
import React from 'react';
import './formik01.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState,useEffect } from 'react';
import axios from 'axios';


const Faram = () => (
    <>
     const [userData, setUserData] = useState();
     const userName = "oreximus";

       const fetchUserData = () => {
        axios.get("https://api.github.com/users/"+ userName).then((response) => {
            console.log(response);
            const myData = response.data;
            setUserData(myData);
        });
    };
    
    useEffect(() => {
        fetchUserData();
    },[]);

    <h1>Any place in your app!</h1>
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className='form'>
          <div className='block1'>
          <div className='block0'>
          <Field type="Id" name="Id"/>
          </div>
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" />
          </div>
          <div className='block2'>
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" />
          </div>
          <div className='button'>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
          </div>
          </div>
        </Form>
      )}
    </Formik>
    </>
);

export default Faram;