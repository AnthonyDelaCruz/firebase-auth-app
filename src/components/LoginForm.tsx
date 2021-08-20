import React from "react";
import { useForm } from "react-hook-form";
import { Button, Form, Input, Typography } from "antd";
import { signInWithEmailAndPassword } from "services/firebaseAuthentication";
import { Link } from "react-router-dom";

const { Title } = Typography;

function LoginForm() {
  const { register, handleSubmit } = useForm();

  async function onSubmit(data: any) {
    const { username, password } = data;

    await signInWithEmailAndPassword(username, password);
  }
  return (
    <Form onFinish={handleSubmit(onSubmit)}>
      <Title>Login</Title>
      <Form.Item label="Username">
        <Input {...register("username")} placeholder="JuanDelaCruz" />
      </Form.Item>
      <Form.Item label="Password">
        <Input {...register("password")} />
      </Form.Item>
      <Button htmlType="submit">Login</Button>
      <Link to="/">Don't have an account yet? sign up here</Link>
    </Form>
  );
}

export default LoginForm;
