import { useState } from "react";
import { useNavigate } from "react-router-dom";

//const API_POST = "http://localhost:1234/auth/login";
const CodePages = () => {
  const [code, setCode] = useState("");
  const [isCodeValid, setIsCodeValid] = useState(false);
  const navigate = useNavigate();

  const handleCodeChange = (e) => {
    const value = e.target.value;
    setCode(value);

    // Kod formatini tekshirish (kamida 4 ta raqam bo'lishi kerak)
    const codeRegex = /^\d{4,}$/;
    setIsCodeValid(codeRegex.test(value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Agar kod to'g'ri bo'lsa, HomePage ga yo'naltiramiz
    if (isCodeValid) {
      navigate("/home");
    } else {
      alert("Kod noto'g'ri! Iltimos, to'g'ri kodni kiriting.");
    }
  };

  return (
    <div
      id="codePage"
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-[40px] font-bold mb-4 text-white">Kodni kiritish</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
        <div className="mb-4">
          <input
            type="password"
            placeholder="Kodni kiriting"
            value={code}
            onChange={handleCodeChange}
            className="border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          disabled={!isCodeValid}
          className={`w-full p-2 rounded-md text-white ${
            isCodeValid
              ? "bg-blue-500 hover:bg-blue-600"
              : "bg-gray-400 cursor-not-allowed"
          }`}>
          Yuborish
        </button>
      </form>
    </div>
  );
};

export default CodePages;
