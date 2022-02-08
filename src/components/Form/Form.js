import './Form.css'
import React, { useState } from 'react'

function Form () {
  // formats a JS date to 'yyyy-mm-dd'
  // const formatDate = (date) => {
  //   const d = new Date(date)
  //   let month = '' + (d.getMonth() + 1)
  //   let day = '' + d.getDate()
  //   const year = d.getFullYear()
  //
  //   if (month.length < 2) month = '0' + month
  //   if (day.length < 2) day = '0' + day
  //
  //   return [year, month, day].join('-')
  // }

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

  // const [log, setLog] = useState('')

  // const [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()]
  // const [isFocus, setIsFocus] = useState('')

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
      <div>
      <div className="settings-form-container">
      <form className="form-wrapper">
        <label>first name*</label>
        <input
        className="settings-input"
        onChange={ (e) => setFormValues({ ...formValues, firstName: e.target.value })}
        name='firstName'
        value={formValues.firstName}
        type="text" />

        <label>last name*</label>
        <input
        className="settings-input"
        onChange={ (e) => setFormValues({ ...formValues, lastName: e.target.value })}
        name='firstName'
        value={formValues.lastName}
        type="text" />

        <label>email*</label>
        <input
        className="settings-input"
        onChange={ (e) => setFormValues({ ...formValues, email: e.target.value })}
        name='firstName'
        value={formValues.email}
        type="text" />

        <label>phone*</label>
        <input
        className="settings-input"
        onChange={ (e) => setFormValues({ ...formValues, phone: e.target.value })}
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
        <input
        className="settings-input bio"
        onChange={ (e) => setFormValues({ ...formValues, bio: e.target.value })}
        name='firstName'
        value={formValues.bio}
        type="text" />

        <hr className="light-line"/>
      </form>
        <div className="settings-submit-wrapper">
          <button className="save-btn">Save Changes</button>
          <button className="discard-btn">Discard</button>
        </div>
      </div>
      </div>
      <div className="image-drop">
        Image
      </div>
    </div>
  )
}

export default Form
