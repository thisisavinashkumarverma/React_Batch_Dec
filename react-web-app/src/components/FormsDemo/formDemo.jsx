import { useActionState } from 'react';
import './formDemo.css';
import { useFormStatus } from 'react-dom';
import axios from 'axios';

async function userHandleFormSubmit(prevState, formData) {
    console.log("prevState")
    console.log(prevState)
    var userData = {
        username: formData.get('username'),
        password: formData.get('password'),
        age: formData.get('age'),
        email: formData.get('email')
    }

    // await axios.post('https://jsonplaceholder.typicode.com/posts', userData)
    // .then((response) => {
    //     console.log('Response from server')
   
    
    await new Promise((r) => setTimeout(r, 2000)); // forceffly waiting for 2 seconds
    console.log(userData)
    if (userData.username === '' || userData.password === '' || userData.age <= 0 || userData.email === '') {
        return {
            message: 'Please fill all the details correctly',
            errorField: 'all'
        }
    }  else if (userData.age < 20 || userData.age > 50) {
        return {
            message: 'Age should be between 20 and 50',
            errorField: 'age',
            formData: formData
        }
    }
    else {
        return {
            message: 'Details been validated'
        }
    }
}

export default function FormDemo() {
    const[state, formAction] = useActionState(userHandleFormSubmit, {});

  return (
    <>
        <form action={formAction}>
           
            <ul>
                <li className="title">User Registration  page</li>
                <li>
                    <input type="text" placeholder='Enter user name' name="username" />
                </li>
                <li>
                    <input type="password" placeholder='Enter password' name="password" required 
                            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                            title="Must contain at least 8 characters, one uppercase, one lowercase, one number, and one special character"
/>
                </li>
                <li>
                    <input type="number" placeholder='USer age' name="age"  required />
                </li>
                <li>
                    <input type="email" placeholder='Enter email' name="email" required />
                </li>
                <li>
                   <SubmitButton></SubmitButton>
                </li>
                <li>
                    Form Status is - {state.message}
                </li>
            </ul>
        </form>
    </>
  )
}

function SubmitButton() {
    var data = useFormStatus();
    const { pending } = useFormStatus();
    return (
        <>
            {JSON.stringify(data)}
            <button className='btn-submit'>{pending ? 'Submitting...' : 'Submit'}</button>
        </>
    )
}
