import React, { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  StyledButton,
  StyledForm,
} from "../../styledComponents/FormRelatedComponents/FormRelatedComponents";
import FieldCustom from "../HandyComponents/Field/Field";
import { Field, Form, Formik } from "formik";
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
