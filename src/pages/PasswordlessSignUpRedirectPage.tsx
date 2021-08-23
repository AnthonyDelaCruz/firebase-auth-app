import React, { useEffect } from "react";
import { Typography } from "antd";
import { firebaseAuth } from "firebaseApp";

const { Title } = Typography;

/**
 *
 * @todo
 * code clean up
 */
function PasswordlessSignUpRedirectPage(): JSX.Element {
  useEffect(() => {
    completePasswordlessSignUp();
  }, []);

  async function completePasswordlessSignUp() {
    if (firebaseAuth.isSignInWithEmailLink(window.location.href)) {
      try {
        // get the email from localstorage, there should be an email if user is using the same device to complete the flow
        const userEmail = window.localStorage.getItem("emailForSignIn");

        if (!userEmail) {
          alert("Prompt user for email");
        } else {
          await firebaseAuth.signInWithEmailLink(
            userEmail,
            window.location.href
          );

          window.localStorage.removeItem("emailForSignIn");
        }
      } catch (error) {
        console.error(
          "error signing in user with email link... ",
          error.message
        );
      }
    }
  }

  return (
    <div>
      <Title>Logging you in passwordless...</Title>
    </div>
  );
}

export default PasswordlessSignUpRedirectPage;
