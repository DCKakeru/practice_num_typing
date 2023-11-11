import { Button, Alert } from "@mui/material";

interface StartButtonProps {
  digit: number;
}

const CheckNumber = (digit: number) => {
  return isNaN(digit);
};

const CheckDigit = (digit: number) => {
  return !Number.isInteger(digit) || digit < 1 || digit > 10;
};

const StartButton: React.FC<StartButtonProps> = ({ digit }) => {
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
  return (
    <div>
      <Button variant="contained" href={"/numtype/" + digit}>
        スタート
      </Button>
    </div>
  );
};

export default StartButton;
