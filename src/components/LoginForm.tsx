import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import useAuth from "../context/useAuth";

const schema = z.object({
  email: z.string().min(1, { message: "Email is required" }),
  password: z
    .string()
    .min(1, { message: "Password must be at least 8 characters" }),
});
type FormData = z.infer<typeof schema>;

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  const { loginUser } = useAuth();
  const onsubmit = (data: FormData) => {
    console.log(data);
    try {
      loginUser(data.email, data.password);
    } catch (e) {
      console.log(e);
    }
    reset();
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-md bg-white  p-8">
        <div className="text-left mb-6">
          <h1 className="text-4xl font-bold text-black">Welcome back</h1>
          <p className="text-sm text-gray-500">Please enter your details</p>
        </div>
        <form onSubmit={handleSubmit(onsubmit)}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-black">
              Email address
            </label>
            <input
              {...register("email")}
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && (
              <p style={{ fontSize: "11px", color: "red", fontWeight: "bold" }}>
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-black">
              Password
            </label>
            <input
              {...register("password")}
              type="password"
              id="password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.password && (
              <p style={{ fontSize: "11px", color: "red", fontWeight: "bold" }}>
                {errors.password.message}
              </p>
            )}
          </div>

          <div className="flex items-center justify-end mb-4 ">
            <a
              href="#"
              className="text-sm text-blue-500 underline hover:underline"
            >
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2  rounded-md hover:bg-transparent hover:border-black hover:text-black"
          >
            Sign in
          </button>
        </form>

        <p className="text-center mt-6 text-sm text-gray-600">
          Don’t have an account?{" "}
          <a href="#" className="text-blue-500 underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
