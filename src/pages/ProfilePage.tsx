import React from "react";

import { Button, Typography } from "antd";

import { signOut } from "services/firebaseAuthentication";

const { Title } = Typography;

function ProfilePage() {
  function handleSignOut() {
    signOut();
  }
  return (
    <div>
      <Title>Profile Page</Title>
      <Button onClick={handleSignOut}>Logout</Button>
    </div>
  );
}

export default ProfilePage;
