import React, { useState } from "react";
import ViewHeader from "../modules/Header";
import ViewDigit from "../modules/Digit";
import StartButton from "../modules/StartButton";
import QuestionNumber from "../modules/QuestionNumber";

const Start: React.FC = () => {
  const [digit, setDigit] = useState<number>(4);
  const onDigitChange = (digitValue: string) => {
    // 数値判定のバリデーションはStartButtonを押したときに実施
    setDigit(parseInt(digitValue));
  };

  const [questionNumber, setQuestionNumber] = useState<number>(30);
  const onQuestionNumberChange = (digitQuestionNumber: string) => {
    // 数値判定のバリデーションはStartButtonを押したときに実施
    setQuestionNumber(parseInt(digitQuestionNumber));
  };

  return (
    <div className="App">
      <header className="App-header">
        <ViewHeader />
      </header>
      <main>
        <ViewDigit digit={digit} onDigitChange={onDigitChange} />
        <QuestionNumber
          questionNumber={questionNumber}
          onQuestionNumberChange={onQuestionNumberChange}
        />
        <StartButton digit={digit} questionNumber={questionNumber} />
      </main>
    </div>
  );
};

export default Start;
