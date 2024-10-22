import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next"; // i18n dan foydalanish uchun import

const CodePages = () => {
  const { t } = useTranslation(); // Tarjima funksiyasini olish
  const [code, setCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleCodeChange = (e) => {
    const value = e.target.value;
    setCode(value);

    // Kod formatini tekshirish (kamida 4 ta raqam bo'lishi kerak)
    const codeRegex = /^\d{4,}$/;
    // Kod to'g'ri ekanligini aniqlovchi o'zgaruvchi qo'shilgan (ba'zi joylarda ishlatish uchun)
    setIsCodeValid(codeRegex.test(value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    // Ma'lumotlar APIga yuborish uchun tayyorlanadi
    const data = {
      phoneNumber: phoneNumber,
      code: code,
      password: password
    };

    try {
      // API chaqiruvi
      const response = await fetch("https://tarozi.mycoal.uz/auth/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error(t("apiError"));
      }

      // Javob JSON emas, balki matn (token)
      const token = await response.text();
      console.log(token); // Tokenni ko'rish uchun

      // Tokenni localStorage ga saqlash
      if (token) {
        localStorage.setItem("token", token);
        setSuccess(t("codeVerified"));

        // 2 soniyadan keyin Home sahifasiga yo'naltirish
        setTimeout(() => {
          navigate("/home");
        }, 2000);
      } else {
        throw new Error(t("noToken"));
      }
    } catch (error) {
      setError(error.message || t("apiError"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      id="codePage"
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-[40px] font-bold mb-4 text-white">
        {t("enterCode")}
      </h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
        <div className="mb-4">
          <label className="block text-gray-700">{t("Phone Number")}</label>
          <input
            type="text"
            placeholder={t("Phone Number")}
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value.trim())}
            className="border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">{t("Code")}</label>
          <input
            type="text"
            placeholder={t("Code")}
            value={code}
            onChange={handleCodeChange}
            className="border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">{t("password")}</label>
          <input
            type="password"
            placeholder={t("Password")}
            value={password}
            onChange={(e) => setPassword(e.target.value.trim())}
            className="border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full p-2 rounded-md text-white ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          }`}>
          {loading ? t("loading") : t("toSend")}
        </button>

        {error && <div className="text-red-500 mt-2">{error}</div>}
        {success && <div className="text-green-500 mt-2">{success}</div>}
      </form>
    </div>
  );
};

export default CodePages;
