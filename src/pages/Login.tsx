import { useState } from "react";

import { Divider } from "antd";

// import AuthPersistenceWrapper from "wrappers/AuthPersistenceWrapper";
import {
  // EmailLinkSignInForm,
  // PersistenceList,
  LoginForm,
  SignUpForm,
  SocialLoginButtons,
} from "components";

import "./Login.css";
import { AuthForms } from "types/login";

function LoginPage() {
  const [currentForm, setCurrentForm] = useState<AuthForms>(AuthForms.LOGIN);
  const isLogin = currentForm === AuthForms.LOGIN;

  function handleChangeForm(form: AuthForms) {
    setCurrentForm(form);
  }

  return (
    <div id="login-page">
      <img src="firebase_logo.png" alt="firebase-logo" />
      <div className="login-form">
        {isLogin ? (
          <>
            <SocialLoginButtons />
            <Divider>or</Divider>
            <LoginForm changeForm={handleChangeForm} />
          </>
        ) : (
          <SignUpForm changeForm={handleChangeForm} />
        )}
        {/* <AuthPersistenceWrapper> */}
        {/* <PersistenceList /> */}
        {/* </AuthPersistenceWrapper> */}
      </div>
      {/* <EmailLinkSignInForm /> */}
    </div>
  );
}

export default LoginPage;
