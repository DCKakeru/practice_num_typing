import { TextField } from "@mui/material";

function ViewDigit({ digit, onDigitChange }) {
  return (
    <div>
      <TextField
        id="standard-basic"
        label="桁数"
        margin="normal"
        variant="filled"
        type="number"
        value={digit}
        onChange={(e) => onDigitChange(e.currentTarget.value)}
        InputProps={{
          style: { fontSize: 50, height: 150 },
        }}
        InputLabelProps={{ style: { fontSize: 40 }, shrink: true }}
        sx={{ display: "flex" }}
      />
    </div>
  );
}

export default ViewDigit;
