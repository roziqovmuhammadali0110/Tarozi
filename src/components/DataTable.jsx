import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import KeepMountedModal from "./KeepMountedModal"; // Modal komponentini import qiling

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "carNumber", headerName: "Car Number", width: 130 },
  { field: "entryTime", headerName: "Entry Time", width: 130 },
  { field: "exitTime", headerName: "Exit Time", width: 130 },
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
    carNumber: "01 H 123 AB",
    exitTime: "12:10",
    entryTime: "10:00",
    cargoWeight: "4 t",
    driverName: "Jabborov Abdumalik",
    age: 35,
    images: [
      "/src/assets/img/mashinaKomp2.jpg",
      "/src/assets/img/mashianOrqaT2.jpg",
      "/src/assets/img/mashinNumberi2.jpg"
    ] // Rasm manzillari
  },
  {
    id: 2,
    carNumber: "01 H 123 AB",
    exitTime: "08:00",
    entryTime: "07:00",
    cargoWeight: "4 t",
    driverName: "Jabborov Abdumalik",
    age: 42,
    images: [
      "/src/assets/img/mashinaKomp2.jpg",
      "/src/assets/img/mashianOrqaT2.jpg",
      "/src/assets/img/mashinNumberi2.jpg"
    ]
  },
  {
    id: 3,
    carNumber: "01 H 123 AB",
    exitTime: "09:30",
    entryTime: "8:40",
    cargoWeight: "4 t",
    driverName: "Jabborov Abdumalik",
    age: 45,
    images: [
      "/src/assets/img/mashinaKomputer1.jpg",
      "/src/assets/img/mashinaOrqaT1.jpg",
      "/src/assets/img/mashinaNumberi1.jpg"
    ]
  },
  {
    id: 4,
    carNumber: "01 H 123 AB",
    exitTime: "12:10",
    entryTime: "10:00",
    cargoWeight: "4 t",
    driverName: "Jabborov Abdumalik",
    age: 35,
    images: [
      "/src/assets/img/mashinaKomp2.jpg",
      "/src/assets/img/mashianOrqaT2.jpg",
      "/src/assets/img/mashinNumberi2.jpg"
    ] // Rasm manzillari
  },
  {
    id: 5,
    carNumber: "01 H 123 AB",
    exitTime: "08:00",
    entryTime: "07:00",
    cargoWeight: "4 t",
    driverName: "Jabborov Abdumalik",
    age: 42,
    images: [
      "/src/assets/img/mashinaKomp2.jpg",
      "/src/assets/img/mashianOrqaT2.jpg",
      "/src/assets/img/mashinNumberi2.jpg"
    ]
  },
  {
    id: 6,
    carNumber: "01 H 123 AB",
    exitTime: "09:30",
    entryTime: "8:40",
    cargoWeight: "4 t",
    driverName: "Jabborov Abdumalik",
    age: 45,
    images: [
      "/src/assets/img/mashinaKomputer1.jpg",
      "/src/assets/img/mashinaOrqaT1.jpg",
      "/src/assets/img/mashinaNumberi1.jpg"
    ]
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
      <Paper sx={{ height: 400, width: "100%" }}>
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
