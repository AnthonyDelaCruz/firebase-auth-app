import React, { useContext } from "react";

import { Button, Typography } from "antd";
import { RouteChildrenProps } from "react-router-dom";

import {
  signOut,
  linkAnonymousUserWithGoogleAccount,
  sendEmailVerificationLink,
  sendPasswordResetLink,
} from "services/firebaseAuthentication";
import { Routes } from "enums/routes";
import { AuthContext } from "wrappers/AuthWrapper";

const { Title } = Typography;

function ProfilePage({ history }: RouteChildrenProps): React.ReactElement {
  const { currentUser } = useContext(AuthContext);

  function handleSignOut() {
    signOut();
    history.push(Routes.LOGIN);
  }

  function handleLinkAccountWithGmail() {
    linkAnonymousUserWithGoogleAccount();
  }

  function handleSendEmailVerificationLink() {
    sendEmailVerificationLink();
  }

  function handleSendPasswordResetLink() {
    sendPasswordResetLink(currentUser?.email || "");
  }

  return (
    <div>
      <Title>Profile Page</Title>
      {currentUser?.emailVerified
        ? "Email verified"
        : "Email has not been verified"}
      <Button onClick={handleSignOut}>Logout</Button>
      <Button onClick={handleLinkAccountWithGmail}>
        Link current account to Gmail!
      </Button>
      <Button onClick={handleSendEmailVerificationLink}>
        Send Email Verifciation
      </Button>
      <Button onClick={handleSendPasswordResetLink}>Reset Password</Button>
    </div>
  );
}

export default ProfilePage;
