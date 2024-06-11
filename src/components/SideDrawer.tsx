import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import TodayOutlinedIcon from "@mui/icons-material/TodayOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import PointOfSaleOutlinedIcon from "@mui/icons-material/PointOfSaleOutlined";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import DrawerSection from "./DrawerSection";

interface SideDrawerProps {
  toggleDrawer: () => void;
  open: boolean;
}

export default function SideDrawer({ toggleDrawer, open }: SideDrawerProps) {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleListItemClick = (text: string, path: string) => {
    setSelectedItem(selectedItem === text ? null : text);
    navigate(path);
  };

  const drawerWidth = 250;

  const dashboardItems = [
    { text: "Dashboard", icon: <HomeOutlinedIcon />, path: "/dashboard" },
  ];

  const clientItems = [
    { text: "Products", icon: <ShoppingCartOutlinedIcon />, path: "/products" },
    { text: "Customers", icon: <GroupsOutlinedIcon />, path: "/customers" },
    {
      text: "Transactions",
      icon: <ReceiptLongOutlinedIcon />,
      path: "/transactions",
    },
    { text: "Geogrophy", icon: <PublicOutlinedIcon />, path: "/geogrophy" },
  ];

  const salesItems = [
    { text: "Overview", icon: <PointOfSaleOutlinedIcon />, path: "/overview" },
    { text: "Daily", icon: <TodayOutlinedIcon />, path: "/daily" },
    { text: "Monthly", icon: <CalendarMonthOutlinedIcon />, path: "/monthly" },
    {
      text: "Breakdown",
      icon: <PieChartOutlineOutlinedIcon />,
      path: "/breakdown",
    },
  ];

  const managementItems = [
    { text: "Admin", icon: <AdminPanelSettingsOutlinedIcon />, path: "/admin" },
    {
      text: "Performance",
      icon: <TrendingUpOutlinedIcon />,
      path: "/performance",
    },
  ];

  return (
    <Drawer
      open={open}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
        },
      }}
      variant="persistent"
    >
      <Box
        className="flex-col"
        role="presentation"
        display="flex"
        sx={{ bgcolor: "primary.main", color: "text.primary" }}
      >
        <div className="flex p-4 text-2xl font-bold text-darkYellow">
          LAVONTECH
        </div>
        <DrawerSection
          title=""
          items={dashboardItems}
          selectedItem={selectedItem}
          onItemClick={handleListItemClick}
        />
        <DrawerSection
          title="Client Facing"
          items={clientItems}
          selectedItem={selectedItem}
          onItemClick={handleListItemClick}
        />
        <DrawerSection
          title="Sales"
          items={salesItems}
          selectedItem={selectedItem}
          onItemClick={handleListItemClick}
        />
        <DrawerSection
          title="Management"
          items={managementItems}
          selectedItem={selectedItem}
          onItemClick={handleListItemClick}
        />
      </Box>
    </Drawer>
  );
}
