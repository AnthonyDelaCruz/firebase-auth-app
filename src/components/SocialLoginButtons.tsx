import React, { useContext } from "react";
import { Button } from "antd";
import {
  GooglePlusOutlined,
  FacebookFilled,
  MailOutlined,
  TwitterOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useHistory } from "react-router-dom";

import {
  signInWithGoogle,
  signInAnonymously,
  signInWithTwitter,
} from "services/firebaseAuthentication";
import { Routes } from "enums/routes";
import { AuthPersistenceContext } from "wrappers/AuthPersistenceWrapper";
import "./SocialLoginButtons.css";

function SocialLoginButtons(): JSX.Element {
  const history = useHistory();
  const { invokePersistenceMethod } = useContext(AuthPersistenceContext);

  function handleGoogleSignIn() {
    invokePersistenceMethod();
    signInWithGoogle();
    history.push(Routes.PROFILE);
  }

  function handleAnonymousSignIn() {
    invokePersistenceMethod();
    signInAnonymously();
    history.push(Routes.PROFILE);
  }

  function handleSignInWIthTwitter() {
    invokePersistenceMethod();
    signInWithTwitter();
    history.push(Routes.PROFILE);
  }

  return (
    <div className="social-login-buttons-container">
      <Button onClick={handleGoogleSignIn} icon={<GooglePlusOutlined />}>
        Sign in with Google
      </Button>
      {/* <Button
        disabled
        onClick={() => console.log("Facebook")}
        icon={<FacebookFilled />}
      >
        Sign in with Facebook
      </Button> */}
      <Button onClick={handleSignInWIthTwitter} icon={<TwitterOutlined />}>
        Sign in with Twitter
      </Button>
      {/* <Button
        disabled
        onClick={() => console.log("Email")}
        icon={<MailOutlined />}
      >
        Sign in with Email
      </Button> */}
      <Button onClick={handleAnonymousSignIn} icon={<UserOutlined />}>
        Anonymous
      </Button>
    </div>
  );
}

export default SocialLoginButtons;
