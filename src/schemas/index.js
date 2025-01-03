import * as yup from "yup";


const passwordRules = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/; 


export const basicSchema = yup.object().shape({

    email : yup.string().email("Please enter  a valid email ").required("Required"),

    age:yup.number().positive().integer().required("Required"),

    password : yup
    .string()
    .min(5)
    .matches(passwordRules,{message:"Please create a stronger password"})
    .required("Required")
    

})



export const advancedSchema = yup.object().shape()
username : yup
.string()
.min(3,"Username must be 3 characters")
.required("Required")


jobType : yup
.string()
.oneOf(["designer","developer","manager","other"])
.required("Required")


acceptedTos : yup
.boolean()
.oneOf([true],"please accept the  terms of service")