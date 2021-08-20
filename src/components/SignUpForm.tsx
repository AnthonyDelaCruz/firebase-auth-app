import React from "react";
import { useForm } from "react-hook-form";
import { Button, Form, Input, Typography } from "antd";
import { signUpWithEmailAndPassword } from "services/firebaseAuthentication";
import { withSnackbar, WithSnackbarProps } from "notistack";

const { Title } = Typography;

function SignUpForm({ enqueueSnackbar }: WithSnackbarProps): JSX.Element {
  const { register, handleSubmit } = useForm();

  async function onSubmit(data: any) {
    const { username, password } = data;

    try {
      await signUpWithEmailAndPassword(username, password);
    } catch (error) {
      enqueueSnackbar(error.message, {
        variant: "error",
      });
    }
  }

  return (
    <Form onFinish={handleSubmit(onSubmit)}>
      <Title>Sign Up</Title>
      <Form.Item label="Username">
        <Input {...register("username")} placeholder="JuanDelaCruz" />
      </Form.Item>
      <Form.Item label="Password">
        <Input {...register("password")} />
      </Form.Item>
      <Form.Item label="Confirm Password">
        <Input {...register("confirm_password")} />
      </Form.Item>
      <Button htmlType="submit">Sign In</Button>
    </Form>
  );
}

export default withSnackbar(SignUpForm);
