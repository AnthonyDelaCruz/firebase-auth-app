import { useForm } from "react-hook-form";
import { Button, Form, Input } from "antd";

import { signInWithEmailAndPassword } from "services/firebaseAuthentication";
import { AuthForms } from "types/login";

type Props = {
  changeForm: (form: AuthForms) => void;
};

function LoginForm({ changeForm }: Props) {
  const { register, handleSubmit } = useForm();

  async function onSubmit(data: any) {
    const { username, password } = data;

    await signInWithEmailAndPassword(username, password);
  }

  function handleShowSignUpForm() {
    changeForm(AuthForms.SIGN_UP);
  }

  return (
    <Form onFinish={handleSubmit(onSubmit)}>
      <Form.Item label="Username">
        <Input {...register("username")} placeholder="JuanDelaCruz" />
      </Form.Item>
      <Form.Item label="Password">
        <Input {...register("password")} />
      </Form.Item>
      <Button block htmlType="submit">
        Login
      </Button>
      <Button block type="link" onClick={handleShowSignUpForm}>
        Don't have an account? Sign up here
      </Button>
    </Form>
  );
}

export default LoginForm;
