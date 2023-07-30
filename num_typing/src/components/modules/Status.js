import React from "react";
import { Box, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

function StateEnum({ state }) {
  if (state) {
    return "正解";
  } else {
    return "回答中";
  }
}

const StyledPaper = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.primary,
  fontSize: "40px",
  height: 100,
  lineHeight: "100px",
}));

const Status = ({ state }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 200,
            height: 100,
          },
        }}
      >
        <StyledPaper elevation={3} variant="outlined">
          {StateEnum({ state })}
        </StyledPaper>
      </Box>
    </>
  );
};

export default Status;
