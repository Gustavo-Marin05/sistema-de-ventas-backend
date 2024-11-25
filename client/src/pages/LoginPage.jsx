import { useForm } from "react-hook-form";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(data => {
    console.log(data);
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-gray-200">
      <div className="w-full max-w-md">
        <form
          onSubmit={onSubmit}
          className="bg-gray-800 shadow-lg rounded-lg p-8"
        >
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-100">
            Login
          </h2>

          {/* Campo Username */}
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-300"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              {...register("username", { required: "Username is required" })}
              className="w-full px-4 py-2 mt-2 bg-gray-700 text-gray-200 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-50"
            />
            {errors.username && (
              <p className="text-red-500">{errors.username.message}</p>
            )}
          </div>

          {/* Campo Password */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-300"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              {...register("password", { required: "Password is required" })}
              className="w-full px-4 py-2 mt-2 bg-gray-700 text-gray-200 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-50"
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-50"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
