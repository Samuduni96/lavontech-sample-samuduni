import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";

interface DrawerSectionProps {
  title: string;
  items: { text: string; icon: JSX.Element; path: string }[];
  selectedItem: string | null;
  onItemClick: (text: string, path: string) => void;
}

const DrawerSection: React.FC<DrawerSectionProps> = ({
  title,
  items,
  selectedItem,
  onItemClick,
}) => {
  return (
    <>
      <div className="p-4 text-[#cca752]">{title}</div>
      <List>
        {items.map((item) => (
          <ListItem
            key={item.text}
            disablePadding
            onClick={() => onItemClick(item.text, item.path)}
          >
            <ListItemButton
              sx={{
                backgroundColor:
                  selectedItem === item.text ? "#cca752" : "inherit",
                "&:hover": {
                  backgroundColor: "#ffffff14",
                },
              }}
            >
              <ListItemIcon
                sx={{
                  color:
                    selectedItem === item.text ? "black" : "secondary.main",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={{
                  color:
                    selectedItem === item.text ? "black" : "secondary.main",
                }}
              />
              {selectedItem === item.text && <KeyboardArrowRightOutlinedIcon />}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default DrawerSection;
