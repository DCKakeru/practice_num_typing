import { Button, Alert } from "@mui/material";
import { Link } from "react-router-dom";

interface StartButtonProps {
  digit: number;
  questionNumber: number;
}

const CheckNumber = (num: number) => {
  return isNaN(num);
};

const CheckDigit = (digit: number) => {
  return !Number.isInteger(digit) || digit < 1 || digit > 10;
};

const CheckQuestionNumber = (num: number) => {
  return !Number.isInteger(num) || num < 1;
};

const StartButton: React.FC<StartButtonProps> = ({ digit, questionNumber }) => {
  if (CheckNumber(digit)) {
    return (
      <div>
        <Button variant="contained" disabled>
          スタート
        </Button>
        <Alert severity="warning">数値を入力してください。</Alert>
      </div>
    );
  }
  if (CheckDigit(digit)) {
    return (
      <div>
        <Button variant="contained" disabled>
          スタート
        </Button>
        <Alert severity="warning">桁数は1~10の整数で指定してください</Alert>
      </div>
    );
  }
  if (CheckNumber(questionNumber) || CheckQuestionNumber(questionNumber)) {
    return (
      <div>
        <Button variant="contained" disabled>
          スタート
        </Button>
        <Alert severity="warning">問題数に整数値を入力してください。</Alert>
      </div>
    );
  }

  return (
    <div>
      <Link
        to="/numtype/"
        state={{ digitValue: digit, questionNumberValue: questionNumber }}
      >
        <Button variant="contained">スタート</Button>
      </Link>
    </div>
  );
};

export default StartButton;
