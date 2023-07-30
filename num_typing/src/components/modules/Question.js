import React from "react";
import { Box, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledPaper = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  // textAlign: "center",
  color: theme.palette.text.primary,
  fontSize: "60px",
  // height: 100,
  // lineHeight: "100px",
}));

const Question = ({ name }) => {
  return (
    <>
      <Box
        // sx={{
        //   display: "flex",
        //   flexWrap: "wrap",
        //   "& > :not(style)": {
        //     m: 1,
        //     width: "100%",
        //     height: "100%",
        //   },
        // }}
      >
        <StyledPaper elevation={3} variant="outlined">
          問題
        </StyledPaper>
        <StyledPaper elevation={3} variant="outlined">
          {name}
        </StyledPaper>
      </Box>
      {/* <TextField
        id="question-display"
        label="問題"
        value={name}
        InputProps={{
          readOnly: true,
          style: { fontSize: 60, height: 200 },
        }}
        InputLabelProps={{ style: { fontSize: 40 }, shrink: true }}
        sx={{ display: "flex" }}
        margin="normal"
        variant="filled"
        fullWidth
      /> */}
    </>
  );
};

export default Question;
