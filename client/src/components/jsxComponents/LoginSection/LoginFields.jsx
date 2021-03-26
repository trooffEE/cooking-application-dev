import { Field, Form } from "formik";
import React from "react";
import { StyledButton } from "../../styledComponents/FormRelatedComponents/FormRelatedComponents";
import FieldCustom from "../HandyComponents/Field/Field";

const LoginFields = (props) => {
  console.log(props);
  const validateEmail = (email) => {
    const error = {};

    if (!email)
      error.email = "Required"
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email))
      error.email = "Invalid format. Check if email is correct!"
 
    return error;
  }

  const validatePassword = (password) => {
    const error = {};
    const passwordRegex = /^[A-Za-z]\w{7,14}$/;

    if (!password)
      error.password = "Required"
    else if (!passwordRegex.test(password))
      error.password = "Invalid format. Password between 7 to 16 characters which contain only characters, numeric digits, underscore and first character must be a letter!"
 
    return error;
  }

  return (
    <Form>
      <Field name="email" validate={validateEmail}>
        {(props) => <FieldCustom type="email" title="Email" {...props}/>}
      </Field>
      
      <Field name="password" validate={validatePassword}>
        {(props) => <FieldCustom type="password" title="Password" {...props}/>}
      </Field>

      <StyledButton disabled={props.isSubmitting}>
        Submit
      </StyledButton>
    </Form>
  );
};

export default LoginFields;
