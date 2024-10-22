import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import uzFlag from "../assets/img/uzFlag.png";
import ruFlag from "../assets/img/rusFlag.png";
import { useTranslation } from "react-i18next";
import "../i18n";

// URL manzillllllllll
const API_URL = "https://tarozi.mycoal.uz";

function TelPages() {
  const [isLogin, setIsLogin] = useState(true);
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gray-100"
      id="telPages">
      <div className="bg-white p-8 rounded-xl shadow-md w-96 m-2">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold mb-6 text-center">
            {isLogin ? t("login") : t("register")}
          </h2>
          <div className="relative">
            <select
              onChange={handleLanguageChange}
              className="w-24 bg-slate-100 rounded-md text-slate-700 font-medium p-1 appearance-none">
              <option value="uz" className="p-1">
                Uzb
              </option>
              <option value="ru" className="p-1">
                Rus
              </option>
            </select>
            <div className="absolute top-0 right-0 mt-1 mr-1 pointer-events-none">
              <img
                src={i18n.language === "uz" ? uzFlag : ruFlag}
                alt="Flag"
                className="w-5 h-5"
              />
            </div>
          </div>
        </div>

        {isLogin ? <LoginForm /> : <RegisterForm />}
        <div className="text-center mt-4">
          <button
            className="text-blue-500"
            onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? t("switchToRegister") : t("switchToLogin")}
          </button>
        </div>
      </div>
    </div>
  );
}

function LoginForm() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(`${API_URL}/auth/login`, {
        phoneNumber: phone.trim(),
        password: password.trim()
      });
      setSuccess(t("loginSuccess"));
      setError(null);
      localStorage.setItem("user", JSON.stringify(response.data));
      navigate("/code");
    } catch (error) {
      setError(error.response?.data.message || t("loginError"));
      setSuccess(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700">{t("phone")}</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value.trim())}
          required
          className="w-full px-3 py-2 border rounded-lg"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">{t("password")}</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value.trim())}
          required
          className="w-full px-3 py-2 border rounded-lg"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-slate-800 text-white py-2 rounded font-medium hover:bg-blue-600"
        disabled={loading}>
        {loading ? t("loading") : t("submit")}
      </button>
      {error && <div className="text-red-500">{error}</div>}
      {success && <div className="text-green-500">{success}</div>}
    </form>
  );
}

function RegisterForm() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(`${API_URL}/auth/register`, {
        phoneNumber: phone.trim(),
        email: email.trim(),
        username: username.trim(),
        password: password.trim()
      });
      setSuccess(t("registerSuccess"));
      setError(null);
      navigate("/code");
    } catch (error) {
      setError(error.response?.data.message || t("registerError"));
      setSuccess(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700">{t("phone")}</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value.trim())}
          required
          className="w-full px-3 py-2 border rounded-lg"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">{t("email")}</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value.trim())}
          required
          className="w-full px-3 py-2 border rounded-lg"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">{t("username")}</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value.trim())}
          required
          className="w-full px-3 py-2 border rounded-lg"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">{t("password")}</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value.trim())}
          required
          className="w-full px-3 py-2 border rounded-lg"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-slate-800 text-white py-2 rounded font-medium hover:bg-blue-600"
        disabled={loading}>
        {loading ? t("loading") : t("submit")}
      </button>
      {error && <div className="text-red-500">{error}</div>}
      {success && <div className="text-green-500">{success}</div>}
    </form>
  );
}

export default TelPages;
