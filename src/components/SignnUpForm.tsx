import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import useAuth from "../context/useAuth";

const schema = z.object({
  email: z.string().min(1, { message: "Email is required" }),
  username: z.string().min(1, { message: "Username is required" }),
  password: z
    .string()
    .min(1, { message: "Password must be at least 8 characters" }),
});
type FormData = z.infer<typeof schema>;

const SignUpForm = () => {
  const { registerMethod } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  const onsubmit = async (data: FormData) => {
    try {
      console.log(data);
      registerMethod(data.email, data.username, data.password);
    } catch (e) {
      console.log(e);
    }

    reset();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-md bg-white  p-8">
        <div className="text-left mb-6">
          <h1 className="text-4xl font-bold text-black">Register</h1>
          <p className="text-sm text-gray-500">Just a few steps away</p>
        </div>
        <form onSubmit={handleSubmit(onsubmit)}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-black">
              Username
            </label>
            <input
              {...register("username")}
              id="email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.username && (
              <p style={{ fontSize: "11px", color: "red", fontWeight: "bold" }}>
                {errors.username.message}
              </p>
            )}
          </div>
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

          <button
            type="submit"
            className="w-full bg-black text-white py-2  rounded-md hover:bg-transparent hover:border-black hover:text-black"
          >
            Sign in
          </button>
        </form>

        <p className="text-center mt-6 text-sm text-gray-600">
          Already have an account{" "}
          <a href="#" className="text-blue-500 underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUpForm;
