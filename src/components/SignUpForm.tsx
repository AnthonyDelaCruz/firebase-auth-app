import { useForm } from "react-hook-form";
import { Button, Form, Input } from "antd";
import { withSnackbar, WithSnackbarProps } from "notistack";

import { signUpWithEmailAndPassword } from "services/auth";
import { AuthForms } from "types/login";

/**
 *
 * @TODO
 * Add toasts when email has been sent...
 */
type Props = {
  changeForm: (form: AuthForms) => void;
};

function SignUpForm({
  changeForm,
  enqueueSnackbar,
}: WithSnackbarProps & Props) {
  const { register, handleSubmit } = useForm();

  async function onSubmit(data: any) {
    const { username, password } = data;

    try {
      await signUpWithEmailAndPassword(username, password);
    } catch (error: any) {
      enqueueSnackbar(error.message, {
        variant: "error",
      });
    }
  }

  function handleShowLoginForm() {
    changeForm(AuthForms.LOGIN);
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
      <Button block htmlType="submit">
        Create account
      </Button>
      <Button block type="link" onClick={handleShowLoginForm}>
        Back to login
      </Button>
    </Form>
  );
}

export default withSnackbar(SignUpForm);
