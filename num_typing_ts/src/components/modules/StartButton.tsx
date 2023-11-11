import { Button } from "@mui/material";

interface StartButtonProps {
  digit: number;
}

const StartButton: React.FC<StartButtonProps> = ({ digit }) => {
  return (
    <div>
      <Button variant="contained" href={"/numtype/" + digit}>
        スタート
      </Button>
    </div>
  );
};

export default StartButton;
