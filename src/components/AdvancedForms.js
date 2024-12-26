import { Field, Form, Formik } from "formik";



const AdvancedForms = () => {
  return (
   <Formik initialValues={{name:"jared"}}>
    {(props)=>{

  <Form>
    <CustomInput
    label= "Username"   
    />
    }}
   
      <Field type="text"  name="name"  placeholder="Name" class />
    
      <input type="text" 
      onChange={props.handleChange}
      onBlur={props.handleBlur}
      value={props.values.name}
      name="name"
      />

      <button type="submit">submit</button>
    </Form>

   </Formik>
  )
}

export default AdvancedForms
