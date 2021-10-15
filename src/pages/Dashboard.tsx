import React, { useContext } from "react";

import { Typography, Layout, Avatar, Row, Col, Anchor } from "antd";
import {
  RouteChildrenProps,
  Link,
  Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";

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
import VerifyEmail from "./VerifyEmail";
import LinkAccount from "./LinkAccount";
import ResetPassword from "./ResetPassword";

const { Title, Text } = Typography;
const { Header, Content } = Layout;

function ProfilePage({ history }: RouteChildrenProps): React.ReactElement {
  const match = useRouteMatch();
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
    <>
      <Header className="profile-header">
        <img src="firebase_logo.png" alt="firebase-logo" />
        <div>
          <Avatar src={avatarUrl} alt="profile-picture" />
          <Text className="profile-logout" onClick={handleSignOut}>
            Logout
          </Text>
        </div>
      </Header>
      <Content className="profile-content">
        <Row justify="center">
          <Col span={4} className="profile-content-settings">
            <Title>Settings</Title>
            <Link to="/dashboard/profile">Profile</Link>
            <Link to="/dashboard/verify-email">Verify Email</Link>
            <Link to="/dashboard/link-account">Link Account</Link>
            <Link to="/dashboard/reset-password">Reset Password</Link>
          </Col>
          <Col span={8}>
            <Switch>
              <Route exact path={`${match.path}/profile`}>
                <ProfileDetails currentUser={currentUser} />
              </Route>
              <Route
                path={`${match.path}/verify-email`}
                component={VerifyEmail}
              />
              <Route
                path={`${match.path}/link-account`}
                component={LinkAccount}
              />
              <Route
                path={`${match.path}/reset-password`}
                component={ResetPassword}
              />
            </Switch>
          </Col>
        </Row>
      </Content>
    </>
  );
}

export default ProfilePage;
