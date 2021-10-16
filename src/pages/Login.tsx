import React from "react";

import { Typography, Divider } from "antd";
// import { FireFilled } from "@ant-design/icons";

// import PersistenceList from "components/PersistenceList";
// import SignUpForm from "components/SignUpForm";
// import LoginForm from "components/LoginForm";
// import EmailLinkSignInForm from "components/EmailLinkSignInForm";
// import AuthPersistenceWrapper from "wrappers/AuthPersistenceWrapper";
import { SignUpForm, SocialLoginButtons } from "components";

import "./Login.css";

const { Title, Text } = Typography;

function LoginPage() {
  return (
    <div id="login-page">
      <img src="firebase_logo.png" alt="firebase-logo" />
      <div className="login-form">
        <Title level={2}>Firebase Auth</Title>
        {/* <Title>
          Firebase Auth
          <FireFilled />
        </Title>
        <Text>
          This will be a React Application that will feature firebase auth
          functionality.
        </Text> */}
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
