import React from "react";
import { TextField } from "@mui/material";

export default class AnswerState extends React.Component {
  constructor(props) {
    super(props);
    this.value = { s: "" };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ s: e.target.value });

    if (this.props.onAnswerChanged) {
      this.props.onAnswerChanged(e.target.value);
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  render() {
    return (
      <TextField
        id="standard-basic"
        label="回答欄"
        margin="normal"
        variant="filled"
        value={this.value.s}
        onChange={this.onChange}
        InputProps={{
          style: { fontSize: 60, height: 200 },
        }}
        InputLabelProps={{ style: { fontSize: 40 }, shrink: true }}
        sx={{ display: "flex" }}
        fullWidth
      />
    );
  }
}
