import React, { useState } from "react";

import { Button, Typography } from "antd";
import {
  GooglePlusOutlined,
  FacebookFilled,
  MailOutlined,
  TwitterOutlined,
  UserOutlined,
  FireFilled,
} from "@ant-design/icons";
import { RouteChildrenProps } from "react-router-dom";

import {
  signInWithGoogle,
  signInAnonymously,
  signInWithTwitter,
} from "services/firebaseAuthentication";
import PersistenceList from "components/PersistenceList";
import { Routes } from "enums/routes";
import { AuthPersistence } from "enums/authPersistence";
import useAuthPersistence from "hooks/useAuthPersistence";

import "./Login.css";

const { Title, Text } = Typography;

function LoginPage({ history }: RouteChildrenProps) {
  const [persistenceType, setPersistenceType] = useState<AuthPersistence>(
    AuthPersistence.LOCAL
  );
  const { invokePersistenceMethod } = useAuthPersistence(persistenceType);

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

  function handleChangePersistenceType(type: AuthPersistence) {
    setPersistenceType(type);
  }

  return (
    <div id="login-page">
      <div className="login-form">
        <Title>
          Welcome back!
          <FireFilled />
        </Title>
        <Text>
          This will be a React Application that will feature firebase auth
          functionality.
        </Text>
        <PersistenceList onChange={handleChangePersistenceType} />
        <Button onClick={handleGoogleSignIn} icon={<GooglePlusOutlined />}>
          Sign in with Google
        </Button>
        <Button
          disabled
          onClick={() => console.log("Facebook")}
          icon={<FacebookFilled />}
        >
          Sign in with Facebook
        </Button>
        <Button onClick={handleSignInWIthTwitter} icon={<TwitterOutlined />}>
          Sign in with Twitter
        </Button>
        <Button
          disabled
          onClick={() => console.log("Email")}
          icon={<MailOutlined />}
        >
          Sign in with Email
        </Button>
        <Button onClick={handleAnonymousSignIn} icon={<UserOutlined />}>
          Anonymous
        </Button>
      </div>
    </div>
  );
}

export default LoginPage;
