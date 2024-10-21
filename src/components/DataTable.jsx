import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "carNumber", headerName: "CarNumber", width: 130 },
  { field: "entryTime", headerName: "Entry Time", width: 130 },
  { field: "exitTime", headerName: "ExitTime", width: 130 },
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
];

const rows = [
  {
    id: 1,
    carNumber: "01 H 123 AB",
    exitTime: "12:10",
    entryTime: "10:00",
    driverName: "Jabborov Abdumalik",
    age: 35
  },
  {
    id: 2,
    carNumber: "01 H 123 AB",
    exitTime: "08:00",
    entryTime: "07:00",
    driverName: "Jabborov Abdumalik",
    age: 42
  },
  {
    id: 3,
    carNumber: "01 H 123 AB",
    exitTime: "09:30",
    entryTime: "8:40",
    driverName: "Jabborov Abdumalik",
    age: 45
  },
  {
    id: 4,
    carNumber: "01 H 123 AB",
    exitTime: "14:00",
    entryTime: "13:10",
    driverName: "Jabborov Abdumalik",
    age: 16
  },
  {
    id: 5,
    carNumber: "01 H 123 AB",
    exitTime: "15:20",
    entryTime: "14:30",
    driverName: "Jabborov Abdumalik",
    age: 21
  },
  {
    id: 6,
    carNumber: "01 H 123 AB",
    exitTime: "12:10",
    entryTime: "11:40",
    driverName: "Jabborov Abdumalik",
    age: 25
  },
  {
    id: 7,
    carNumber: "01 H 123 AB",
    exitTime: "10:12",
    entryTime: "09:20",
    driverName: "Jabborov Abdumalik",
    age: 44
  },
  {
    id: 8,
    carNumber: "01 H 123 AB",
    exitTime: "13:20",
    entryTime: "12:35",
    driverName: "Jabborov Abdumalik",
    age: 36
  },
  {
    id: 9,
    carNumber: "01 H 123 AB",
    exitTime: "16:20",
    entryTime: "15:35",
    driverName: "Jabborov Abdumalik",
    age: 65
  }
];

const paginationModel = { page: 0, pageSize: 5 };

export default function DataTable() {
  return (
    <Paper sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
  );
}
