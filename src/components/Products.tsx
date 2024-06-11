import React from "react";
import { Box } from "@mui/material";

const drawerWidth = 250;

interface ProductsProps {
  drawerOpen: boolean;
}

const Products: React.FC<ProductsProps> = ({ drawerOpen }) => {

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
          <div className="text-3xl font-bold mb-2">PRODUCTS</div>
          <div className="text-sm font-bold text-darkYellow">
            Here your listings products
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Products;
