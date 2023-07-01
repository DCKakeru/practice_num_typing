import React from "react";
import { TextField } from "@mui/material";

const Answer = (props) => {
  return (
    <TextField
      id="standard-basic"
      label="回答欄"
      margin="normal"
      variant="filled"
      value={props.value}
      onChange={(event) => props.setQuestion(event.target.value)}
      InputProps={{
        style: { fontSize: 60, height: 200 },
      }}
      InputLabelProps={{ style: { fontSize: 40 }, shrink: true }}
      sx={{ display: "flex" }}
      fullWidth
    />
  );
};

export default Answer;
