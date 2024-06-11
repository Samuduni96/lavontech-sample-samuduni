import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef<(typeof rows)[number]>[] = [
  { field: "id", headerName: "ID" },
  {
    field: "Name",
    headerName: "Name",
    flex: 1,
    editable: true,
  },
  {
    field: "Email",
    headerName: "Email",
    flex: 1, 
    editable: true,
  },
  {
    field: "City",
    headerName: "City",
    flex: 1,
    editable: true,
  },
  {
    field: "State",
    headerName: "State",
    flex: 1,
    editable: true,
  },
  {
    field: "Country",
    headerName: "Country",
    flex: 1,
    editable: true,
  },
  {
    field: "Phone",
    headerName: "Phone",
    flex: 1,
    editable: true,
  },
];

const rows = [
  {
    id: 1,
    Name: "Jon Snow",
    Email: "jon@example.com",
    City: "Winterfell",
    State: "The North",
    Country: "Westeros",
    Phone: "123-456-7890",
  },
  {
    id: 2,
    Name: "Cersei Lannister",
    Email: "cersei@example.com",
    City: "King's Landing",
    State: "The Crownlands",
    Country: "Westeros",
    Phone: "123-456-7890",
  },
  {
    id: 3,
    Name: "Jaime Lannister",
    Email: "jaime@example.com",
    City: "Casterly Rock",
    State: "The Westerlands",
    Country: "Westeros",
    Phone: "123-456-7890",
  },
  {
    id: 4,
    Name: "Arya Stark",
    Email: "arya@example.com",
    City: "Winterfell",
    State: "The North",
    Country: "Westeros",
    Phone: "123-456-7890",
  },
  {
    id: 5,
    Name: "Daenerys Targaryen",
    Email: "daenerys@example.com",
    City: "Dragonstone",
    State: "The Crownlands",
    Country: "Westeros",
    Phone: "123-456-7890",
  },
  {
    id: 6,
    Name: "Melisandre",
    Email: "melisandre@example.com",
    City: "Asshai",
    State: "Shadow Lands",
    Country: "Essos",
    Phone: "123-456-7890",
  },
  {
    id: 7,
    Name: "Ferrara Clifford",
    Email: "ferrara@example.com",
    City: "Braavos",
    State: "Free Cities",
    Country: "Essos",
    Phone: "123-456-7890",
  },
  {
    id: 8,
    Name: "Rossini Frances",
    Email: "rossini@example.com",
    City: "Volantis",
    State: "Free Cities",
    Country: "Essos",
    Phone: "123-456-7890",
  },
  {
    id: 9,
    Name: "Harvey Roxie",
    Email: "harvey@example.com",
    City: "Meereen",
    State: "Bay of Dragons",
    Country: "Essos",
    Phone: "123-456-7890",
  },
];

export default function DataGridDemo() {
  return (
    <Box
      sx={{
        height: 400,
        width: "100%",
        backgroundColor: "primary.main",
        p: 1,
        borderRadius: 2,
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        disableRowSelectionOnClick
        sx={{
          borderColor: "transparent",
          width: "100%",
          backgroundColor: "primary.main",
        }}
      />
    </Box>
  );
}
