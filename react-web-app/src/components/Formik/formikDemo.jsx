
import { ErrorMessage, Field, Form, Formik } from "formik";

export function UserRegistrationForm() {
  return (
    <div>
            <Formik
                initialValues={{username: 'Raj', password: '', email: ''}}
                onSubmit={(userDetails) => {
                    console.log('Form data:', userDetails);
                }}

                validate={(values) => {
                    const errors = {};  
                    if (!values.username) {
                        errors.username = 'Username is required';
                    }       
                    if (!values.email) {
                        errors.email = 'Email is required';
                    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
                        errors.email = 'Email is invalid';
                    }   
                    if (!values.password) {
                        errors.password = 'Password is required';
                    } else if (values.password.length < 6) {
                        errors.password = 'Password must be at least 6 characters';
                    }   
                    return errors;
                }}
            >
                <Form>
                    <label htmlFor="username">Username:</label>
                    <Field type="text" id="username" name="username" />
                    <ErrorMessage name="username" component="div" className="error" />
                    <br />
                    <label htmlFor="email">Email:</label>
                    <Field type="email" id="email" name="email" required/>
                   
                    <ErrorMessage name="email" component="div" className="error" />
                    <br />
                    <label htmlFor="password">Password:</label>
                    <Field type="password" id="password" name="password" />
                    <ErrorMessage name="password" component="div" className="error" />
                    <br />
                    <button type="submit">Register</button>
                </Form>
            </Formik>
    </div>
  );
}