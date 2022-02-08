// Organized most CSS relevant for form page into one file
import './Form.css'
// React and useState import
import React, { useState } from 'react'

// images exported from figma
import unicorn from '../../img/unicorn.png'
import check from '../../img/check.png'
import upload from '../../img/upload.png'

// Form component (functional)
function Form () {
  // State management for form
  const [formValues, setFormValues] = useState(
    {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      birthMonth: '',
      birthDay: '',
      birthYear: ''
    }
  )

  // state hook used for show/hide toaster notification
  const [toasterShow, setToasterShow] = useState('no-toast')

  // Functionw that validates unique inputs
  // and updates the UI to let the prompt the user when
  // inputs are invalid
  const firstNameValidation = (e) => {
    if (!e.target.value) {
      setFirstValid({ isValid: false, classes: 'settings-input not-valid' })
    } else {
      setFirstValid({ isValid: true, classes: 'settings-input' })
    }
  }
  const lastNameValidation = (e) => {
    if (!e.target.value) {
      setLastValid({ isValid: false, classes: 'settings-input not-valid' })
    } else {
      setLastValid({ isValid: true, classes: 'settings-input' })
    }
  }
  const emailValidation = (e) => {
    const validateEmail = (email) => {
      return String(email)
        .toLowerCase()
        .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    }

    if (!validateEmail(e.target.value)) {
      setEmailValid({ isValid: false, classes: 'settings-input not-valid' })
    } else {
      setEmailValid({ isValid: true, classes: 'settings-input' })
    }
  }
  const phoneValidation = (e) => {
    const validatePhone = (phone) => {
      // eslint-disable-next-line
      const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
      return re.test(phone)
    }
    if (!validatePhone(e.target.value)) {
      setPhoneValid({ isValid: false, classes: 'settings-input not-valid' })
    } else {
      setPhoneValid({ isValid: true, classes: 'settings-input' })
    }
  }
  const bioValidation = (e) => {
    if (!e.target.value) {
      setBioValid({ isValid: false, classes: 'settings-input bio not-valid' })
    } else {
      setBioValid({ isValid: true, classes: 'settings-input bio' })
    }
  }

  const [firstValid, setFirstValid] = useState({ isValid: true, classes: 'settings-input' })
  const [lastValid, setLastValid] = useState({ isValid: true, classes: 'settings-input' })
  const [emailValid, setEmailValid] = useState({ isValid: true, classes: 'settings-input' })
  const [phoneValid, setPhoneValid] = useState({ isValid: true, classes: 'settings-input' })
  const [bioValid, setBioValid] = useState({ isValid: true, classes: 'settings-input bio' })

  // Function that handles the submission of the form and calls the toaster function
  // if form is completed and validated
  const handleSubmit = () => {
    setToasterShow('toast')

    setTimeout(function () {
      setToasterShow('no-toast')
    }, 3000)
  }

  // loop creating date options
  const years = []
  for (let i = 100; i > 0; i--) {
    years.push(<option value={1922 + i}>{1922 + i}</option>)
  }
  const days = []
  for (let i = 1; i <= 31; i++) {
    days.push(<option value={i}>{i}</option>)
  }

  return (
    <div className="settings-form-with-img">
      <div className={toasterShow}><img id="check" src={check} />Changes have been saved successfully</div>
      <div>
      <div className="settings-form-container">
      <h2>Settings</h2>
      <form className="form-wrapper">
        <label>first name*</label>
        <input
        className={firstValid.classes}
        onChange={ (e) => setFormValues({ ...formValues, firstName: e.target.value })}
        onBlur={(e) => firstNameValidation(e) }
        name='firstName'
        value={formValues.firstName}
        type="text" />
        {firstValid.isValid}
        <label>last name*</label>
        <input
        className={lastValid.classes}
        onChange={ (e) => setFormValues({ ...formValues, lastName: e.target.value })}
        onBlur={(e) => lastNameValidation(e) }
        name='lastname'
        value={formValues.lastName}
        type="text" />

        <label>email*</label>
        <input
        className={emailValid.classes}
        onChange={ (e) => setFormValues({ ...formValues, email: e.target.value })}
        onBlur={(e) => emailValidation(e) }
        name='firstName'
        value={formValues.email}
        type="text" />

        <label>phone*</label>
        <input
        className={phoneValid.classes}
        onChange={ (e) => setFormValues({ ...formValues, phone: e.target.value })}
        onBlur={(e) => phoneValidation(e) }
        name='firstName'
        value={formValues.phone}
        type="text" />

        {
          // Date Picker
        }

        <label>select your date of birth*</label>
        <div id="dropdown-date">
        <select className="month-picker">
          <option value="Month">Month</option>
          <option value="1">January</option>
          <option value="2">Februrary</option>
          <option value="3">March</option>
          <option value="4">April</option>
          <option value="5">May</option>
          <option value="6">June</option>
          <option value="7">July</option>
          <option value="8">August</option>
          <option value="9">September</option>
          <option value="10">October</option>
          <option value="11">November</option>
          <option value="12">December</option>
        </select>
        <select className='day-picker'>
          <option value="Day">Day</option>
          {days}
        </select>
        <select className='year-picker'>
          <option>Year</option>
          {years}
        </select>
        </div>

        {
          // End of Date Picker
        }

        <label>bio*</label>
        <textarea
        className={bioValid.classes}
        onChange={ (e) => setFormValues({ ...formValues, bio: e.target.value })}
        onBlur={(e) => bioValidation(e) }
        name='firstName'
        value={formValues.bio}
        rows="20" cols="50" />

        <hr className="light-line"/>
      </form>
        <div className="settings-submit-wrapper">
          <button disabled={(toasterShow === 'toast')} onClick={ () => handleSubmit() } className="save-btn">Save Changes</button>
          <button className="discard-btn">Discard</button>
        </div>
      </div>
      </div>
      <div className="image-drop">
        <label className="image">image</label>
        <div className="image-wrapper">
        <img src={unicorn}/>
        <img id="upload" src={upload}/>
        </div>
        <h5 className="remove-image">Remove</h5>
      </div>
    </div>
  )
}

export default Form
