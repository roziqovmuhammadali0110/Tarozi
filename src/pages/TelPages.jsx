import { useState } from "react";
import { useNavigate } from "react-router-dom";

function TelPages() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gray-100"
      id="telPages">
      <div className="bg-white p-8 rounded shadow-md w-96 mt-2">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {isLogin ? "Login" : "Register"}
        </h2>
        {isLogin ? <LoginForm /> : <RegisterForm />}
        <div className="text-center mt-4">
          <button
            className="text-blue-500"
            onClick={() => setIsLogin(!isLogin)}>
            {isLogin
              ? "Don't have an account? Register"
              : "Already have an account? Login"}
          </button>
        </div>
      </div>
    </div>
  );
}

function LoginForm() {
  const navigate = useNavigate(); // Sahifa o'tishini boshqarish
  const handleSubmit = (e) => {
    e.preventDefault();
    // Login muvaffaqiyatli bo'lsa, sahifani o'zgartiramiz
    navigate("/code");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700">Phone</label>
        <input
          type="text"
          required
          className="w-full px-3 py-2 border rounded-lg"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Password</label>
        <input
          type="password"
          required
          className="w-full px-3 py-2 border rounded-lg"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-slate-800  text-white py-2 rounded font-medium hover:bg-blue-600">
        Login
      </button>
    </form>
  );
}

function RegisterForm() {
  const navigate = useNavigate(); // Sahifa o'tishini boshqarish
  const handleSubmit = (e) => {
    e.preventDefault();
    // Registratsiya muvaffaqiyatli bo'lsa, sahifani o'zgartiramiz
    navigate("/code");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700">Phone</label>
        <input
          type="text"
          required
          className="w-full px-3 py-2 border rounded-lg"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Email</label>
        <input
          type="email"
          required
          className="w-full px-3 py-2 border rounded-lg"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Username</label>
        <input
          type="text"
          required
          className="w-full px-3 py-2 border rounded-lg"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Password</label>
        <input
          type="password"
          required
          className="w-full px-3 py-2 border rounded-lg"
        />
      </div>
      <button
        type="submit"
        className="w-full hover:bg-green-500 text-white py-2 rounded font-medium bg-green-800">
        Register
      </button>
    </form>
  );
}

export default TelPages;
