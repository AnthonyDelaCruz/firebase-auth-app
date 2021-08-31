import React from "react";

import { Typography } from "antd";
import { FireFilled } from "@ant-design/icons";

import PersistenceList from "components/PersistenceList";
import SignUpForm from "components/SignUpForm";
import LoginForm from "components/LoginForm";
import EmailLinkSignInForm from "components/EmailLinkSignInForm";
import SocialLoginButtons from "components/SocialLoginButtons";
import AuthPersistenceWrapper from "wrappers/AuthPersistenceWrapper";

import "./Login.css";

const { Title, Text } = Typography;

function LoginPage() {
  return (
    <div id="login-page">
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
        {/* <AuthPersistenceWrapper> */}
        {/* <PersistenceList /> */}
        {/* <LoginForm /> */}
        {/* </AuthPersistenceWrapper> */}
      </div>
      {/* <SignUpForm /> */}
      {/* <EmailLinkSignInForm /> */}
    </div>
  );
}

export default LoginPage;
