import React from "react";
import {
  StyledForm,
} from "../../styledComponents/FormRelatedComponents/FormRelatedComponents";
import { Formik } from "formik";
import LoginFields from "./LoginFields";
import { loginUser } from "../../../redux/reducers/loginReducer";
import { useDispatch } from "react-redux";

const Login = (props) => {
  const dispatch = useDispatch();
  return (
    <StyledForm>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values, actions) => {
          actions.setSubmitting(false);
          dispatch(loginUser(values, props.history));
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
