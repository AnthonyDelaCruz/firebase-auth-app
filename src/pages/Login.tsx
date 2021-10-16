import React from "react";

import { Divider } from "antd";

// import AuthPersistenceWrapper from "wrappers/AuthPersistenceWrapper";
import {
  // EmailLinkSignInForm,
  // LoginForm,
  // PersistenceList,
  SignUpForm,
  SocialLoginButtons,
} from "components";

import "./Login.css";

function LoginPage() {
  return (
    <div id="login-page">
      <img src="firebase_logo.png" alt="firebase-logo" />
      <div className="login-form">
        <Divider>Login with</Divider>
        <SocialLoginButtons />
        <Divider>or Sign up</Divider>
        <SignUpForm />
        {/* <AuthPersistenceWrapper> */}
        {/* <PersistenceList /> */}
        {/* <LoginForm /> */}
        {/* </AuthPersistenceWrapper> */}
      </div>
      {/* <EmailLinkSignInForm /> */}
    </div>
  );
}

export default LoginPage;
