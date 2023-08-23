import  { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserDetails } from './actions';

const Form = () => {
const store = useSelector(state => (state))

console.log(store)

  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    let tempErrors = {};
    tempErrors.firstName = formData.firstName ? '' : 'This field is required.';
    tempErrors.lastName = formData.lastName ? '' : 'This field is required.';
    tempErrors.email = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email) ? '' : 'Email is not valid.';
    tempErrors.message = formData.message ? '' : 'This field is required.';
    setErrors(tempErrors);

    return Object.values(tempErrors).every(x => x === '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      dispatch(updateUserDetails(formData));
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
      });
      alert('Form submitted successfully!');
    }
  };

  return (
    <form onSubmit={handleSubmit} 
    style={{border: "1px solid red", display: "flex", flexDirection: "column", justifyContent: "space-between",  alignItems: "center", height: "300px"}}>
      <input  style={{ width: "300px"}} type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" />
      {errors.firstName && <span>{errors.firstName}</span>}
      <input  style={{ width: "300px"}} type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" />
      {errors.lastName && <span>{errors.lastName}</span>}
      <input  style={{ width: "300px"}} type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
      {errors.email && <span>{errors.email}</span>}
      <textarea  style={{ width: "300px"}} name="message" value={formData.message} onChange={handleChange} placeholder="Message" />
      {errors.message && <span>{errors.message}</span>}
      <button type="submit" disabled={Object.values(errors).some(x => x)}>Submit</button>
    </form>
  );
};

export default Form;
