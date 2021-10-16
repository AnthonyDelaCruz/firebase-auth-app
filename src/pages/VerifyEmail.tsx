import { Typography, Button } from "antd";
import { useContext } from "react";

import { AuthContext } from "wrappers/AuthWrapper";
import { verifyEmail } from "services/auth";

const { Title, Text } = Typography;

function VerifyEmail() {
  const { currentUser } = useContext(AuthContext);
  const isEmailVerified = currentUser?.emailVerified;

  async function handleSendEmailVerification() {
    await verifyEmail();
  }

  return (
    <div>
      <Title>Verify Email</Title>
      <Text>You will get sent a verification email.</Text>
      <div>
        {isEmailVerified ? (
          <Text>Your email for this account is already verified.</Text>
        ) : (
          <Button onClick={handleSendEmailVerification}>
            Verify your email.
          </Button>
        )}
      </div>
    </div>
  );
}

export default VerifyEmail;
