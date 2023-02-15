import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Sidebar, Videos } from "./index";
import { fetchFromAPI } from "../Utils/fetchFromAPI";

const Feed = () => {
  const [seletedCategory, setSeletedCategory] = useState("New");
  const [videos, setVideos] = useState([]);
  console.log(seletedCategory);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${seletedCategory}`).then((data) => {
      setVideos(data.items);
    });
  }, [seletedCategory]);

  return (
    <Stack
      sx={{
        flexDirection: { sx: "column", md: "row" },
      }}
    >
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          border: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar
          seletedCategory={seletedCategory}
          setSeletedCategory={setSeletedCategory}
        />

        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        ></Typography>
      </Box>

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          {seletedCategory} <span style={{ color: "#F31503" }}>videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
