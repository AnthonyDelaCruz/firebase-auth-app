import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { signInwithEmailLink } from "services/firebaseAuthentication";

function EmailLinkSignInForm(): JSX.Element {
  const { register, handleSubmit } = useForm();

  async function handleFormSubmit(data: { email: string }) {
    await signInwithEmailLink(data.email);
  }

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <input {...register("email")} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default EmailLinkSignInForm;
