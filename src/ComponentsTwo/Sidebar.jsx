import React, { useEffect } from "react";
import { Stack } from "@mui/material";
import { categories } from "../Utils/Constants";

const Sidebar = ({ seletedCategory, setSeletedCategory }) => {
  useEffect(() => {
    console.log(seletedCategory);
  }, []);

  return (
    <Stack
      direction={"row"}
      sx={{
        overflow: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((categary) => {
        return (
          <button
            className="category-btn"
            onClick={() => {
              setSeletedCategory(categary.name);
            }}
            style={{
              backgroundColor: categary.name === seletedCategory && "#FC1503",
              color: "white",
            }}
            key={categary.name}
          >
            <span
              style={{
                color: categary.name === seletedCategory ? "white" : "red",
                marginRight: "15px",
              }}
            >
              {categary.icon}
            </span>
            <span
              style={{
                opacity: categary.name === seletedCategory ? "1" : "0.8",
              }}
            >
              {categary.name}
            </span>
          </button>
        );
      })}
    </Stack>
  );
};

export default Sidebar;
