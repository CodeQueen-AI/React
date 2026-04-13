import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// ✅ Zod Schema (rules)
const schema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

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
      <p>{errors.email?.message}</p>

      <input
        type="password"
        placeholder="Enter Password"
        {...register("password")}
      />
      <p>{errors.password?.message}</p>

      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;