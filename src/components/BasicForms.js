import { useFormik } from 'formik'
import React from 'react'
import { basicSchema } from '../schemas'




const onSubmit  = (values,actions) =>{

  console.log(values);
  console.log(actions);
  await new Promise((resolve) => setTimeout(resolve,1000))
  actions.resetForm()

  
  
}
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

    const {values,errors,touched,isSubmitting,handleBlur,handleChange,handleSubmit} = formik
    
    console.log(errors);
    
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
            className= {errors.email && touched.email ? "input-error":""}
            />

      <button disabled={}  type='submit'>submit</button>
      </form>
    </div>
  )
}

export default BasicForms