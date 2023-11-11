import { TextField } from "@mui/material";

interface ViewCorrectAnswerCountProps {
  count: string;
}

const ViewCorrectAnswerCount: React.FC<ViewCorrectAnswerCountProps> = ({
  count,
}) => {
  return (
    <div>
      <TextField
        id="question-display"
        label="正答数"
        value={count}
        InputProps={{
          readOnly: true,
          style: { fontSize: 60, height: 200 },
        }}
        InputLabelProps={{ style: { fontSize: 40 }, shrink: true }}
        sx={{ display: "flex" }}
        margin="normal"
        variant="filled"
        fullWidth
      />
    </div>
  );
};

export default ViewCorrectAnswerCount;
