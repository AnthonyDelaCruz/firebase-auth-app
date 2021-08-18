import React from "react";
import { useForm } from "react-hook-form";
import { Button, Form, Input } from "antd";

function SignUpForm() {
  const { register, handleSubmit } = useForm();

  function onSubmit(data: any) {
    console.log("data", data);
  }
  return (
    <Form onFinish={handleSubmit(onSubmit)}>
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

export default SignUpForm;
