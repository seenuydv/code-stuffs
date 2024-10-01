import React from 'react';
import { Formik } from 'formik';
import axios from 'axios';
import { useState,useEffect } from 'react';


const Suraj = () => (
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

    return error
    <>
    <div>
    <h1>Anywhere in your app!</h1>
    <div>
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
           <Field type="email" name="email" />
           <ErrorMessage name="email" component="div" />
           <Field type="password" name="password" />
           <ErrorMessage name="password" component="div" />
           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </Form>
       )}
     </Formik>
   </div>
    </>
);

export default Suraj;