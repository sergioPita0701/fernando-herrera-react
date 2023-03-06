import { Box } from "@mui/system";
import React from "react";
import { NavBar } from "../components";

export const JournalLayout = ({ children }) => {
  const drawerWidth = 240;
  return (
    <>
      <Box xs={{ display: "flex" }}>
        <NavBar drawerWidth={drawerWidth} />
        {/* Sidebar*/}

        <Box component={main} sx={{ flexGrow: 1, p: 3 }}>
          {/*Toolbar */}
          {children}
        </Box>
      </Box>
    </>
  );
};
