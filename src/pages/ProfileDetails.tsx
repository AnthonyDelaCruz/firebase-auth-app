import React from "react";
import { Avatar, Row, Col, Typography } from "antd";
import { UserOutlined } from "@ant-design/icons";

import { User } from "types/user";

type Props = {
  currentUser: User;
};

const { Title, Paragraph } = Typography;

function ProfileDetails({ currentUser }: Props): React.ReactElement {
  const avatarUrl = currentUser?.photoURL;
  const displayName = currentUser?.displayName;
  const email = currentUser?.email;
  const isEmailVerified = currentUser?.emailVerified;
  const authProviders = currentUser?.providerData;

  const avatarProps = avatarUrl
    ? { src: avatarUrl }
    : { icon: <UserOutlined /> };

  return (
    <div>
      <Title level={3}>Profile details</Title>
      <Avatar alt="profile-picture" shape="square" size={90} {...avatarProps} />
      <Row>
        <Col span={12}>
          <Paragraph strong>Display name</Paragraph>
          <Paragraph>{displayName}</Paragraph>
        </Col>
        <Col span={12}>
          <Paragraph strong>
            Email ({isEmailVerified ? "Verified" : "Not verified"})
          </Paragraph>
          <Paragraph>{email}</Paragraph>
        </Col>
      </Row>
      <Row>
        <Col>
          <Paragraph strong>Auth Providers</Paragraph>
          {authProviders?.map((provider) => (
            <Paragraph>{provider?.providerId}</Paragraph>
          ))}
        </Col>
      </Row>
    </div>
  );
}

export default ProfileDetails;
