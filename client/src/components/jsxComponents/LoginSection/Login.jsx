import React from "react";
import {
  StyledForm,
} from "../../styledComponents/FormRelatedComponents/FormRelatedComponents";
import { Formik } from "formik";
import LoginFields from "./LoginFields";

const Login = (props) => {

  return (
    <StyledForm>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values, actions) => {
          actions.setSubmitting(false);
        }}
        validateOnBlur
      >
        {(props) => {
          return (
            <LoginFields {...props}/>
          );
        }}
      </Formik>
    </StyledForm>
  );
};

export default Login;
