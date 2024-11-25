import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, isAuthenticated, errors: registerErrors } = useAuth();

  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated) navigate("/venta");
  }, [isAuthenticated, navigate]);

  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-gray-200">
      <div className="w-full max-w-md ">
        {/* Error messages at the top */}
        {registerErrors && registerErrors.length > 0 && (
          <div className="bg-red-500 p-2 text-white mb-4 rounded text-center">
            {registerErrors.map((error, i) => (
              <p key={i}>{error}</p>
            ))}
          </div>
        )}

        <form
          onSubmit={onSubmit}
          className="bg-gray-800 shadow-lg rounded-lg p-8"
        >
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-100">
            Register
          </h2>

          {/* Campo Fullname */}
          <div className="mb-4">
            <label
              htmlFor="fullname"
              className="block text-sm font-medium text-gray-300"
            >
              Full Name
            </label>
            <input
              id="fullname"
              type="text"
              {...register("fullname", { required: "Fullname is required" })}
              className="w-full px-4 py-2 mt-2 bg-gray-700 text-gray-200 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-50"
            />
            {errors.fullname && (
              <p className="text-red-500">{errors.fullname.message}</p>
            )}
          </div>

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
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
