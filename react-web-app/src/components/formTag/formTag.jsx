import {useActionState, useState} from 'react';
import {useFormStatus} from 'react-dom';
// import './app.css'
import axios from 'axios';


    // Step 1
    async function handleFormSubmit(prevState, formData) {       
        var accountId = formData.get('accountId');
        if (accountId.length < 8) {
            // send data to server 
        } else {
            // show error
        }
        
   
        await new Promise((r) => setTimeout(r, 2000));

        await axios.get('url', {formData:formData }).then(() => {})

        return {msg: `Hello ${accountId}, Form got submitted`};
    }

export default function AccountSignupForm() {
    const [state, formAction] = useActionState(handleFormSubmit, {msg: ''}); // Step 2
    return (
        <>
            <h3>User Signup Form</h3>
            <form action={formAction}>  {/* Step 3 */}
                <ul>
                    <li>
                        <input className='form-control' type="text" placeholder='Enter Account Id' maxLength={8} name='accountId'></input>
                    </li>
                    <li>
                        <input required className='form-control' type='password' placeholder='Account password' name='accountPwd'></input>
                    </li>
                    <li>
                        <input className='form-control' type='password' placeholder='Reenter password' name='r_accountPwd'></input>
                    </li>
                    <li>
                        <input className='form-control' type='text' placeholder='Mail Id' name='mailId'></input>
                    </li>
                    <li>
                        <SubmitButton/>
                    </li>
                    <li>
                        {state.msg}
                    </li>
                    
                </ul>
            </form>
        </>
    )
}

function SubmitButton() { // Step 4
    console.log(useFormStatus());
    var {pending} = useFormStatus();
    return (
        <button disabled={pending}>{pending ? 'Submitting...' : 'Submit'}</button>
    )
}