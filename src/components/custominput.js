import { useField } from "formik"


const custominput = ({label,...props }) => {
const {field,meta} = useField(props)
console.log("field",field)
console.log("meta",meta)


  return (
    <>
    <label>{label}</label>
    <input {...field} {...props} />
    </>
  )
}

export default custominput
    