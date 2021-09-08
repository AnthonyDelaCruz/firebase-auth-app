import React, { useContext } from "react";

import { Typography, Layout, Avatar, Image, Row, Col } from "antd";
import { RouteChildrenProps } from "react-router-dom";

import {
  signOut,
  linkAnonymousUserWithGoogleAccount,
  sendEmailVerificationLink,
  sendPasswordResetLink,
} from "services/firebaseAuthentication";
import { Routes } from "enums/routes";
import { AuthContext } from "wrappers/AuthWrapper";
import ProfileDetails from "components/ProfileDetails";

import "./ProfilePage.css";

const { Title, Paragraph, Text } = Typography;
const { Header, Content } = Layout;

function ProfilePage({ history }: RouteChildrenProps): React.ReactElement {
  const { currentUser } = useContext(AuthContext);
  const avatarUrl = currentUser?.photoURL;

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
      <Header className="profile-header">
        <img src="firebase_logo.png" alt="firebase-logo" />
        <div>
          <Avatar src={avatarUrl} alt="profile-picture" />
          <Text
            style={{ color: "#ffffff", marginLeft: 20 }}
            onClick={handleSignOut}
          >
            Logout
          </Text>
        </div>
      </Header>
      <Content className="profile-content">
        <Row justify="center">
          <Col span={4}>
            <Title>Settings</Title>
            <Paragraph>Verify Email</Paragraph>
            <Paragraph>Link Accounts</Paragraph>
            <Paragraph>Reset Password</Paragraph>
          </Col>
          <Col span={8}>
            <Title>Profile</Title>
            <ProfileDetails currentUser={currentUser} />
          </Col>
        </Row>
        {/* <Title>Profile Page</Title>
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
        <Button onClick={handleSendPasswordResetLink}>Reset Password</Button> */}
      </Content>
    </div>
  );
}

export default ProfilePage;
