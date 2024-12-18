import { useFormik } from 'formik'
import React from 'react'
import { basicSchema } from '../schemas'



const BasicForms = () => {

    const formik =  useFormik ({

        initialValues :{
            email : "",
            age:"",
            // password : "",
            // confirmPassword : " "

        },

        validationSchema : basicSchema,
       

        onSubmit : (values) =>{
          console.log('Form value',values )
        }
    })

    const {values,handleBlur,handleChange,handleSubmit} = formik
    
  return (
    <div>
      <form autoComplete='off'   onSubmit={handleSubmit}>
        <label htmlFor='email'>Email</label>
        <input 
            value={values.email}
            onChange={handleChange}
            id='email'
            type='email'
            placeholder='Enter your email'
            onBlur={handleBlur}
            />
            <label htmlFor='age'>Age</label>
            <input value={values.age}
            onChange={handleChange}
            id='age'
            name='age'
            type='number'
            placeholder='Enter your age'
            onBlur={handleBlur}
            />

      <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default BasicForms
