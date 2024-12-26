import { useField } from "formik";

const customselect = ({label,...props}) => {
    const [field,meta] = useField(props)

                                    
  return (
    <>
    <label>{label}</label>
    <input 
    {...field}
    {...props}
    className={meta.touched && meta.error}
    />

    <span>I accept  the terms of service</span>
    {/* {meta.touched && meta.error && <div className="error"}
    </> */}
  )
}


export default customselect
