import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
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
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";

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

  const dashboardIcon = [<HomeOutlinedIcon />];

  const clientIcons = [
    <ShoppingCartOutlinedIcon />,
    <GroupsOutlinedIcon />,
    <ReceiptLongOutlinedIcon />,
    <PublicOutlinedIcon />,
  ];

  const salesIcons = [
    <PointOfSaleOutlinedIcon />,
    <TodayOutlinedIcon />,
    <CalendarMonthOutlinedIcon />,
    <PieChartOutlineOutlinedIcon />,
  ];

  const managementIcons = [
    <AdminPanelSettingsOutlinedIcon />,
    <TrendingUpOutlinedIcon />,
  ];

  const drawerWidth = 250;

  const DrawerList = (
    <Box
      className="bg-[#21295c] light:bg-white flex-col"
      role="presentation"
      display="flex"
      sx={{ bgcolor: "primary.main", color: "text.primary" }}
    >
      <div className="flex p-4 text-2xl font-bold text-darkYellow">
        LAVONTECH
      </div>
      <List>
        {["Dashboard"].map((text, index) => (
          <ListItem
            key={text}
            disablePadding
            onClick={() => handleListItemClick(text, "/dashboard")}
          >
            <ListItemButton
              sx={{
                backgroundColor: selectedItem === text ? "#cca752" : "inherit",
                "&:hover": {
                  backgroundColor: "#ffffff14",
                },
              }}
            >
              <ListItemIcon
                sx={{
                  color: selectedItem === text ? "black" : "secondary.main",
                }}
              >
                {dashboardIcon[index]}
              </ListItemIcon>
              <ListItemText
                primary={text}
                sx={{
                  color: selectedItem === text ? "black" : "secondary.main",
                }}
              />
              {selectedItem === text && <KeyboardArrowRightOutlinedIcon />}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <div className="p-4 text-[#cca752]">Client Facing</div>
      <List>
        {["Products", "Customers", "Transactions", "Geogrophy"].map(
          (text, index) => (
            <ListItem
              key={text}
              disablePadding
              onClick={() =>
                handleListItemClick(text, `/${text.toLowerCase()}`)
              }
            >
              <ListItemButton
                sx={{
                  backgroundColor:
                    selectedItem === text ? "#cca752" : "inherit",
                  "&:hover": {
                    backgroundColor: "#ffffff14",
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    color: selectedItem === text ? "black" : "secondary.main",
                  }}
                >
                  {clientIcons[index]}
                </ListItemIcon>
                <ListItemText
                  primary={text}
                  sx={{
                    color: selectedItem === text ? "black" : "secondary.main",
                  }}
                />
                {selectedItem === text && <KeyboardArrowRightOutlinedIcon />}
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
      <div className="p-4 text-[#cca752]">Sales</div>
      <List>
        {["Overview", "Daily", "Monthly", "Breakdown"].map((text, index) => (
          <ListItem
            key={text}
            disablePadding
            onClick={() => handleListItemClick(text, `/${text.toLowerCase()}`)}
          >
            <ListItemButton
              sx={{
                backgroundColor: selectedItem === text ? "#cca752" : "inherit",
                "&:hover": {
                  backgroundColor: "#ffffff14",
                },
              }}
            >
              <ListItemIcon
                sx={{
                  color: selectedItem === text ? "black" : "secondary.main",
                }}
              >
                {salesIcons[index]}
              </ListItemIcon>
              <ListItemText
                primary={text}
                sx={{
                  color: selectedItem === text ? "black" : "secondary.main",
                }}
              />
              {selectedItem === text && <KeyboardArrowRightOutlinedIcon />}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <div className="p-4 text-[#cca752]">Management</div>
      <List>
        {["Admin", "Performance"].map((text, index) => (
          <ListItem
            key={text}
            disablePadding
            onClick={() => handleListItemClick(text, `/${text.toLowerCase()}`)}
          >
            <ListItemButton
              sx={{
                backgroundColor: selectedItem === text ? "#cca752" : "inherit",
                "&:hover": {
                  backgroundColor: "#ffffff14",
                },
              }}
            >
              <ListItemIcon
                sx={{
                  color: selectedItem === text ? "black" : "secondary.main",
                }}
              >
                {managementIcons[index]}
              </ListItemIcon>
              <ListItemText
                primary={text}
                sx={{
                  color: selectedItem === text ? "black" : "secondary.main",
                }}
              />
              {selectedItem === text && <KeyboardArrowRightOutlinedIcon />}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

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
      {DrawerList}
    </Drawer>
  );
}
