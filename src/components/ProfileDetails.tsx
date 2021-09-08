import React from "react";
import { Avatar, Row, Col, Typography, Image } from "antd";

import { User } from "types/user";

type Props = {
  currentUser: User;
};

const { Paragraph } = Typography;

function ProfileDetails({ currentUser }: Props): React.ReactElement {
  const avatarUrl = currentUser?.photoURL;
  const displayName = currentUser?.displayName;
  const email = currentUser?.email;
  const isAnonymous = currentUser?.isAnonymous;

  return (
    <div>
      <Avatar
        src={<Image src={avatarUrl || ""} />}
        alt="profile-picture"
        size={90}
      />
      <Row>
        <Col span={12}>
          <Paragraph strong>Display name</Paragraph>
          <Paragraph>{displayName}</Paragraph>
        </Col>
        <Col span={12}>
          <Paragraph strong>Email</Paragraph>
          <Paragraph>{email}</Paragraph>
        </Col>
      </Row>
      <Row>
        <Col>
          <Paragraph strong>Anonymous account?</Paragraph>
          <Paragraph>{isAnonymous ? "Anonymous" : "Not anonymous"}</Paragraph>
        </Col>
      </Row>
    </div>
  );
}

export default ProfileDetails;
