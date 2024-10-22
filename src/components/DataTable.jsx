import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import KeepMountedModal from "./KeepMountedModal";

// Rasmlarni import qiling
import mashinaKomp2 from "../assets/img/mashinaKomp2.jpg";
import mashianOrqaT2 from "../assets/img/mashianOrqaT2.jpg";
import mashinNumberi2 from "../assets/img/mashinNumberi2.jpg";
import mashinaKomputer1 from "../assets/img/mashinaKomputer1.jpg";
import mashinaOrqaT1 from "../assets/img/mashinaOrqaT1.jpg";
import mashinaNumberi1 from "../assets/img/mashinaNumberi1.jpg";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "vehicleNumber", headerName: "Vehicle Number", width: 130 },
  { field: "enterDate", headerName: "Enter Date", width: 130 },
  { field: "exitDate", headerName: "Exit Date", width: 130 },
  { field: "cargoWeight", headerName: "Cargo weight", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90
  },
  {
    field: "driverName",
    headerName: "Driver Name",
    width: 160
  }
  // Rasm maydoni olib tashlandi
];

const rows = [
  {
    id: 1,
    vehicleNumber: "01 H 123 AB",
    exitDate: "12:10",
    enterDate: "10:00",
    cargoWeight: "4 t",
    driverName: "Roziqov Muhammadali",
    age: 35,
    images: [mashinaKomp2, mashianOrqaT2, mashinNumberi2] // Rasm manzillari
  },
  {
    id: 2,
    vehicleNumber: "01 H 103 AB",
    exitDate: "08:00",
    enterDate: "07:00",
    cargoWeight: "4 t",
    driverName: "Jabborov Abbos",
    age: 42,
    images: [mashinaKomp2, mashianOrqaT2, mashinNumberi2]
  },
  {
    id: 3,
    vehicleNumber: "01 H 129 AB",
    exitDate: "09:30",
    enterDate: "8:40",
    cargoWeight: "4 t",
    driverName: "Jabborov Abdumalik",
    age: 45,
    images: [mashinaKomputer1, mashinaOrqaT1, mashinaNumberi1]
  },
  {
    id: 4,
    vehicleNumber: "01 H 213 AB",
    exitDate: "12:10",
    enterDate: "10:00",
    cargoWeight: "4 t",
    driverName: "Do'smatov Abdumalik",
    age: 35,
    images: [mashinaKomp2, mashianOrqaT2, mashinNumberi2] // Rasm manzillari
  },
  {
    id: 5,
    vehicleNumber: "01 H 189 AB",
    exitDate: "08:00",
    enterDate: "07:00",
    cargoWeight: "4 t",
    driverName: "Jabborov Abdumalik",
    age: 42,
    images: [mashinaKomp2, mashianOrqaT2, mashinNumberi2]
  },
  {
    id: 6,
    vehicleNumber: "01 H 683 AB",
    exitDate: "09:30",
    enterDate: "8:40",
    cargoWeight: "4 t",
    driverName: "Jabborov Abdumalik",
    age: 45,
    images: [mashinaKomputer1, mashinaOrqaT1, mashinaNumberi1]
  }
  // Qo'shimcha qatorlar...
];

const paginationModel = { page: 0, pageSize: 5 };

export default function DataTable() {
  const [open, setOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const handleRowClick = (params) => {
    setSelectedRow(params.row); // Tanlangan qatorni saqlaymiz
    setOpen(true); // Modalni ochamiz
  };

  const handleClose = () => {
    setOpen(false); // Modalni yopamiz
    setSelectedRow(null); // Modal yopilganda tanlangan qatorni tozalaymiz
  };

  return (
    <div>
      <Paper sx={{ height: 500, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          sx={{ border: 0 }}
          onRowClick={handleRowClick} // Qator ustiga bosilganda ishga tushadigan funksiya
        />
      </Paper>

      {/* Modalni chaqiramiz */}
      {selectedRow && (
        <KeepMountedModal
          open={open}
          onClose={handleClose}
          rowData={selectedRow} // Tanlangan qator ma'lumotlarini modalga uzatamiz
        />
      )}
    </div>
  );
}
