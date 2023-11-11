import { TextField } from "@mui/material";

interface ViewAnswerProps{
  answer: string;
  onAnswerChange: (value: string) => void;
}

const ViewAnswer: React.FC<ViewAnswerProps> = (props) => {
  return (
    <div>
      <TextField
        id="standard-basic"
        label="回答欄"
        margin="normal"
        variant="filled"
        value={props.answer}
        onChange={(e) => props.onAnswerChange(e.currentTarget.value)}
        InputProps={{
          style: { fontSize: 60, height: 200 },
        }}
        InputLabelProps={{ style: { fontSize: 40 }, shrink: true }}
        sx={{ display: "flex" }}
        fullWidth
      />
    </div>
  );
};

export default ViewAnswer;
