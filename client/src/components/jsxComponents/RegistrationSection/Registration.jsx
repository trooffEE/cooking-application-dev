import React from "react";
import { StyledForm } from "../../styledComponents/FormRelatedComponents/FormRelatedComponents";
import { Formik } from "formik";
import LoginFields from "../LoginSection/LoginFields";

const Registration = (props) => {
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
            <LoginFields {...props} isRegis={true}/>
          );
        }}
      </Formik>
    </StyledForm>
  );
};

export default Registration;
