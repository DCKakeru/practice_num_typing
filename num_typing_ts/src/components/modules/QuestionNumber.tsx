import { TextField } from "@mui/material";

interface QuestionNumberProps {
  questionNumber: number;
  onQuestionNumberChange: (value: string) => void;
}

const QuestionNumber: React.FC<QuestionNumberProps> = ({
  questionNumber,
  onQuestionNumberChange,
}) => {
  return (
    <div>
      <TextField
        id="standard-basic"
        label="出題する問題数"
        margin="normal"
        variant="filled"
        type="number"
        value={questionNumber}
        onChange={(e) => onQuestionNumberChange(e.currentTarget.value)}
        InputProps={{
          style: { fontSize: 50, height: 150 },
        }}
        InputLabelProps={{ style: { fontSize: 40 }, shrink: true }}
        sx={{ display: "flex" }}
      />
    </div>
  );
};

export default QuestionNumber;
