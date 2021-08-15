import React from "react";

import { Button, Typography } from "antd";
import { RouteChildrenProps } from "react-router-dom";

import {
  signOut,
  linkAnonymousUserWithGoogleAccount,
} from "services/firebaseAuthentication";
import { Routes } from "enums/routes";

const { Title } = Typography;

function ProfilePage({ history }: RouteChildrenProps): React.ReactElement {
  function handleSignOut() {
    signOut();
    history.push(Routes.LOGIN);
  }

  function handleLinkAccountWithGmail() {
    linkAnonymousUserWithGoogleAccount();
  }

  return (
    <div>
      <Title>Profile Page</Title>
      <Button onClick={handleSignOut}>Logout</Button>
      <Button onClick={handleLinkAccountWithGmail}>
        Link current account to Gmail!
      </Button>
    </div>
  );
}

export default ProfilePage;
