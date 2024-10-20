import { useState } from "react";
import { useNavigate } from "react-router-dom";

const TelPages = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isPhoneValid, setIsPhoneValid] = useState(false);
  const navigate = useNavigate();

  // LocalStorage-da telefon raqamning mavjudligini tekshirish va yo'naltirish
  // useEffect(() => {
  //   const savedPhoneNumber = localStorage.getItem("phoneNumber");
  //   if (savedPhoneNumber) {
  //     navigate("/code"); // Telefon raqam saqlangan bo'lsa, "/code" sahifasiga yo'naltiramiz
  //   }
  // }, [navigate]);

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    setPhoneNumber(value);

    // Telefon raqam formatini tekshirish (10 yoki 12 raqam, faqat raqamlar)
    const phoneRegex = /^\+?\d{10,12}$/;
    setIsPhoneValid(phoneRegex.test(value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Agar telefon raqam to'g'ri bo'lsa
    if (isPhoneValid) {
      // Telefon raqamni localStorage-ga saqlash
      // localStorage.setItem("phoneNumber", phoneNumber);

      // Kod kiritish sahifasiga o'tkazish
      navigate("/code");
    }
  };

  return (
    <div
      id="telPages"
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4 text-white">
        Telefon raqam yordamida kodni olish
      </h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
        <div className="mb-4">
          <input
            type="tel"
            placeholder="Telephone Number"
            value={phoneNumber}
            onChange={handlePhoneChange}
            className="border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          disabled={!isPhoneValid} // Agar raqam xato bo'lsa disable
          className={`w-full p-2 rounded-md text-white ${
            isPhoneValid
              ? "bg-blue-500 hover:bg-blue-600"
              : "bg-gray-400 cursor-not-allowed"
          }`}>
          Yuborish
        </button>
      </form>
    </div>
  );
};

export default TelPages;
