import DataTable from "../components/DataTable";
//import Header from "../components/Header";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Navbar />
      {/* <Header /> */}
      <DataTable />
    </div>
  );
};

export default Home;
