import React, {useState} from 'react'

export default function RegForm() {
     const [firstName, setFirstName] = useState(``);
  const [lastName, setLastName] = useState(``);
  const [email, setEmail] = useState(``);
  const [DoB, setDoB] = useState(new Date());
  const [Phone, setPhone] = useState(``);

  const firstNameChangeHandler = (e) => setFirstName(e.target.value);
  const lastNameChangeHandler = e => setLastName(e.target.value)
  const emailChangeHandler = e => setEmail(e.target.value)
  const dobChangeHandler = e => setDoB(e.target.value)
  const phoneChangeHandler = e => setPhone(e.target.value)

  return (
    <div className='signup-wrapper'>
      <form className='signup-form'>
          <label htmlFor="Title">Title*&nbsp;</label>
          <select name="Title">
            <option value="mr">Mr</option>
            <option value="ms">Ms</option>
            <option value="mrs">Mrs</option>
            <option value="dr">Dr</option>
            </select>
          <label htmlFor="First Name*">First Name*&nbsp;</label>
          <input name="First Name" type="text" value={firstName} onChange={firstNameChangeHandler} placeholder="First Name..."/>
          <label htmlFor="Last Name">Last Name*&nbsp;</label>
          <input name="Last Name" value={lastName} onChange={lastNameChangeHandler} type="text" placeholder="Last Name..." />
          <label htmlFor="Email">Email*&nbsp;</label>
          <input name="Email" type="email" value={email} onChange={emailChangeHandler} placeholder="Email..." />
          <label htmlFor="DoB">Date of Birth&nbsp;</label>
          <input name="DoB" type="date" value={DoB} onChange={dobChangeHandler} placeholder="Date of Birth..."/>
          <label htmlFor="Phone">Phone*&nbsp;</label>
          <input name="Phone" type="tel" value={Phone} onChange={phoneChangeHandler} placeholder="Phone Number..."/>
          <div></div>
          <div className='btn-wrapper'>
          <input type="button" value="Sign Me Up" />
          </div>
        </form>
      </div>
  )
}
