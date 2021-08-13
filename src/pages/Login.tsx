import React from "react";

import { Button, Typography } from "antd";
import {
  GooglePlusOutlined,
  FacebookFilled,
  MailOutlined,
  TwitterOutlined,
  UserOutlined,
  FireFilled,
} from "@ant-design/icons";

import {
  signInWithGoogle,
  signInAnonymously,
} from "services/firebaseAuthentication";
import { RouteChildrenProps } from "react-router-dom";

import { Routes } from "enums/routes";

import "./Login.css";

const { Title, Text } = Typography;

function LoginPage({ history }: RouteChildrenProps) {
  function handleGoogleSignIn() {
    signInWithGoogle();
    history.push(Routes.PROFILE);
  }

  function handleAnonymousSignIn() {
    signInAnonymously();
    history.push(Routes.PROFILE);
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
        <Button
          disabled
          onClick={() => console.log("Twitter")}
          icon={<TwitterOutlined />}
        >
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
