import React from "react";
import { StyledForm } from "../../styledComponents/FormRelatedComponents/FormRelatedComponents";
import { Formik } from "formik";
import LoginFields from "../LoginSection/LoginFields";
import { registerUser } from "../../../redux/reducers/loginReducer";

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
          registerUser(values, props.history);
        }}
        validateOnBlur
      >
        {(props) => {
          return (
            <LoginFields props={props} isRegis={true}/>
          );
        }}
      </Formik>
    </StyledForm>
  );
};

export default Registration;
