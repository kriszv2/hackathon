import React from 'react'
import RegForm from './RegForm';
import "./SignUp.css"

export default function SignUp() {

 
  return (
    <main className='signup-main'>
      <div className='signup-pictures'>
        <img src="https://picsum.photos/800/300" alt="lorem" />
        <img src="https://picsum.photos/800/300" alt="lorem" />
        <img src="https://picsum.photos/800/300" alt="lorem" />
      </div>
      <RegForm />
      {/* <div className='signup-wrapper'>
      <form className='signup-form'>
          <label htmlFor="Title">Title*&nbsp;</label>
          <select name="Title">
            <option value="mr">Mr</option>
            <option value="ms">Ms</option>
            <option value="mrs">Mrs</option>
            <option value="dr">Dr</option>
            </select>
          <label htmlFor="First Name*">First Name*&nbsp;</label>
          <input name="First Name" type="text" value={firstName} onChange={firstNameChangeHandler}/>
          <label htmlFor="Last Name">Last Name*&nbsp;</label>
          <input name="Last Name" value={lastName} onChange={lastNameChangeHandler} type="text" />
          <label htmlFor="Email">Email*&nbsp;</label>
          <input name="Email" type="email" value={email} onChange={emailChangeHandler} />
          <label htmlFor="DoB">Date of Birth&nbsp;</label>
          <input name="DoB" type="date" value={DoB} onChange={dobChangeHandler}/>
          <label htmlFor="Phone">Phone*&nbsp;</label>
          <input name="Phone" type="tel" value={Phone} onChange={phoneChangeHandler}/>
          <div></div>
          <div className='btn-wrapper'>
          <input type="button" value="Sign Me Up" />
          </div>
        </form>
      </div>       */}
    </main>
  )
}
