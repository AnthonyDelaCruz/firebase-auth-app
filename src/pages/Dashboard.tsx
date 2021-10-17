import React, { useContext } from "react";

import { Typography, Layout, Avatar, Row, Col } from "antd";
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
  sendPasswordResetLink,
} from "services/firebaseAuthentication";
import { DashboardRoutes, Routes } from "enums/routes";
import { AuthContext } from "wrappers/AuthWrapper";

import "./Dashboard.css";
import { VerifyEmail, LinkAccount, ResetPassword, ProfileDetails } from "pages";

const { Title, Text } = Typography;
const { Header, Content } = Layout;

function Dashboard({ history }: RouteChildrenProps): React.ReactElement {
  const match = useRouteMatch();
  const currentPath = match.path;

  const { currentUser } = useContext(AuthContext);
  const avatarUrl = currentUser?.photoURL;

  const profileRoute = createDashboardNestedRoute(DashboardRoutes.PROFILE);
  const verifyEmailRoute = createDashboardNestedRoute(
    DashboardRoutes.VERIFY_EMAIL
  );
  const linkAccountRoute = createDashboardNestedRoute(
    DashboardRoutes.LINK_ACCOUNT
  );
  const resetPasswordRoute = createDashboardNestedRoute(
    DashboardRoutes.RESET_PASSWORD
  );

  function createDashboardNestedRoute(route: DashboardRoutes) {
    return `${currentPath}${route}`; // -> /currentPath/route
  }

  function handleSignOut() {
    signOut();
    history.push(Routes.LOGIN);
  }

  function handleLinkAccountWithGmail() {
    linkAnonymousUserWithGoogleAccount();
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
            <Link to={profileRoute}>Profile</Link>
            <Link to={verifyEmailRoute}>Verify Email</Link>
            <Link to={linkAccountRoute}>Link Account</Link>
            <Link to={resetPasswordRoute}>Reset Password</Link>
          </Col>
          <Col span={8}>
            <Switch>
              <Route exact path={profileRoute}>
                <ProfileDetails currentUser={currentUser} />
              </Route>
              <Route path={verifyEmailRoute} component={VerifyEmail} />
              <Route path={linkAccountRoute} component={LinkAccount} />
              <Route path={resetPasswordRoute} component={ResetPassword} />
            </Switch>
          </Col>
        </Row>
      </Content>
    </>
  );
}

export default Dashboard;
