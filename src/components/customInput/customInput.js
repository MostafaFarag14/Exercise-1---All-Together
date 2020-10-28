import React from 'react'
import './customInput.css'
const CustomInput = ({label, value, handleChange}) => {
  return (
    <div>
      <label>{label}</label>
      <input type='text' name={label} value={value} onChange={ e => handleChange(e)}/>
    </div>)
}

export default CustomInput;