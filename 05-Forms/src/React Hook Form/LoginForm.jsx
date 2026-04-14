import { useForm } from "react-hook-form";

function LoginForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Login Form</h2>

      <input
        type="email"
        placeholder="Enter Email"
        {...register("email")}
      />

      <input
        type="password"
        placeholder="Enter Password"
        {...register("password")}
      />

      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;