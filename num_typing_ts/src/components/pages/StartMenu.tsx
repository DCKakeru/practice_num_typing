import React, { useState } from "react";
import ViewHeader from "../modules/Header";
import ViewDigit from "../modules/Digit";
import StartButton from "../modules/StartButton";

const Start: React.FC = () => {
  const [digit, setDigit] = useState<number>(4);
  const onDigitChange = (digitValue: string) => {
    // 数値判定のバリデーションが必要
    setDigit(+digitValue);
  };

  return (
    <div className="App">
      <header className="App-header">
        <ViewHeader />
      </header>
      <main>
        <ViewDigit digit={digit} onDigitChange={onDigitChange} />
        <StartButton digit={digit}/>
      </main>
    </div>
  );
};

export default Start;
