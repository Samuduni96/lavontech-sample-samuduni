import React from "react";
import { Box, ListItemText } from "@mui/material";
import GetAppOutlinedIcon from "@mui/icons-material/GetAppOutlined";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PointOfSaleOutlinedIcon from "@mui/icons-material/PointOfSaleOutlined";
import DataGridDemo from "./DataTable";

const drawerWidth = 250;

interface DashboardProps {
  drawerOpen: boolean;
}

const Dashboard: React.FC<DashboardProps> = ({ drawerOpen }) => {
   
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        color: "text.primary",
        borderRadius: 0,
        p: 6,
        width: drawerOpen ? `calc(100% - ${drawerWidth}px)` : "100%",
        ml: drawerOpen ? `${drawerWidth}px` : 0,
        transition: "width 0.3s, margin-left 0.3s",
      }}
    >
      <div className="flex justify-between mb-4">
        <div>
          <div className="text-3xl font-bold mb-2">DASHBOARD</div>
          <div className="text-sm font-bold text-darkYellow">
            Welcome to your dashboard
          </div>
        </div>

        <button className="my-3 px-4 py-2 text-sm bg-red-500 text-white rounded-sm hover:bg-[#ffffff14]">
          <GetAppOutlinedIcon className="mx-2" />
          DOWNLOAD REPORTS
        </button>
      </div>

      <div className="flex gap-5">
        <div className="w-1/3">
          <div className="grid grid-cols-2 gap-5">
            <Box
              className="flex flex-col p-4 rounded-lg h-40 justify-between"
              sx={{ bgcolor: "primary.main" }}
            >
              <div className="flex justify-between">
                <ListItemText
                  sx={{
                    color: "secondary.main",
                  }}
                >
                  Total Customers
                </ListItemText>
                <PersonAddIcon className="text-darkYellow" />
              </div>
              <div className="flex justify-between">
                <div className="text-darkYellow mr-6">+21%</div>
                <ListItemText
                  sx={{
                    color: "secondary.main",
                  }}
                >
                  Since last month
                </ListItemText>
              </div>
            </Box>

            <Box
              className="flex flex-col p-4 rounded-lg h-40 justify-between"
              sx={{ bgcolor: "primary.main" }}
            >
              <div className="flex justify-between">
                <ListItemText
                  sx={{
                    color: "secondary.main",
                  }}
                >
                  Sales Today
                </ListItemText>
                <PointOfSaleOutlinedIcon className="text-darkYellow" />
              </div>
              <div className="flex justify-between">
                <div className="text-darkYellow mr-6">+21%</div>
                <ListItemText
                  sx={{
                    color: "secondary.main",
                  }}
                >
                  Since last month
                </ListItemText>
              </div>
            </Box>

            <Box
              className="flex flex-col p-4 rounded-lg h-40 justify-between"
              sx={{ bgcolor: "primary.main" }}
            >
              <div className="flex justify-between">
                <ListItemText
                  sx={{
                    color: "secondary.main",
                  }}
                >
                  Monthly Sale
                </ListItemText>
                <PointOfSaleOutlinedIcon className="text-darkYellow" />
              </div>
              <div className="flex justify-between">
                <div className="text-darkYellow mr-7">+5%</div>
                <ListItemText
                  sx={{
                    color: "secondary.main",
                  }}
                >
                  Since last month
                </ListItemText>
              </div>
            </Box>

            <Box
              className="flex flex-col p-4 rounded-lg h-40 justify-between"
              sx={{ bgcolor: "primary.main" }}
            >
              <div className="flex justify-between">
                <ListItemText
                  sx={{
                    color: "secondary.main",
                  }}
                >
                  Yearly Sales
                </ListItemText>
                <PointOfSaleOutlinedIcon className="text-darkYellow" />
              </div>
              <div className="flex justify-between">
                <div className="text-darkYellow mr-6">+43%</div>
                <ListItemText
                  sx={{
                    color: "secondary.main",
                  }}
                >
                  Since last month
                </ListItemText>
              </div>
            </Box>
          </div>
        </div>
        <Box className="w-2/3 rounded-lg px-4" sx={{ bgcolor: "primary.main" }}>
          <div className="mt-8 text-gray-500">Loading data...</div>
        </Box>
      </div>

      <div className="mt-5">
        <DataGridDemo />
      </div>
    </Box>
  );
};

export default Dashboard;
