const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 max-w-[1440px] mx-auto px-[150px]">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">Logo</div>
        <div className="space-x-4">
          <a href="#home" className="text-white font-bold">
            Bosh Sahifa
          </a>
          <a href="#about" className="text-white font-bold">
            Haqida
          </a>
          <a href="#services" className="text-white font-bold">
            Xizmatlar
          </a>
          <a href="#contact" className="text-white font-bold">
            Aloqa
          </a>

          <select className="w-[80px] h-[30px] rounded-lg no-underline px-2">
            <option value="uz">Uzb</option>
            <option value="en">Rus</option>
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
