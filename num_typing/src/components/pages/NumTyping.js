import React, { useState } from "react";
import CollectSound from "../../util/Quiz-Correct_Answer.mp3";
import WrongSound from "../../util/Quiz-Wrong_Buzzer.mp3";
import ViewHeader from "../modules/Header";
import ViewAnswer from "../modules/Answer";
import ViewQuestion from "../modules/Question";
import ViewStatus from "../modules/Status";
import ViewDigit from "../modules/Digit";

function NumTyping() {
  const generateQuestion = (digit) => {
    return (
      Math.floor(Math.random() * (10 ** digit - 10 ** (digit - 1))) +
      10 ** (digit - 1)
    ).toString();
  };

  const [question, setQuestion] = useState({
    digit: 4,
    name: generateQuestion(4),
    state: false,
    answer: "",
  });

  const handleChangedDigit = (digitValue) => {
    setQuestion(() => {
      return {
        digit: Number(digitValue),
        name: generateQuestion(Number(digitValue)).toString(),
        state: false,
        answer: "",
      };
    });
  };

  const handleChangedAnswer = (targetValue) => {
    const nowAnswer = targetValue;
    if (nowAnswer === question.name) {
      console.log("正解");
      collectAnswer();
    } else if (nowAnswer !== "" && question.name.indexOf(nowAnswer) !== 0) {
      playWrongSound();
    } else {
      setQuestion((props) => {
        return {
          digit: props.digit,
          name: props.name,
          state: nowAnswer === question.name,
          answer: nowAnswer,
        };
      });
    }
  };

  const collectAnswer = () => {
    playCollectSound();
    const name = generateQuestion(question.digit);
    setQuestion((props) => {
      return {
        digit: props.digit,
        name: name.toString(),
        state: true,
        answer: "",
      };
    });
  };

  const playCollectSound = () => {
    const collectSound = new Audio(CollectSound);
    collectSound.play();
  };

  const playWrongSound = () => {
    const collectSound = new Audio(WrongSound);
    collectSound.play();
  };

  return (
    <div className="App">
      <header className="App-header">
        <ViewHeader />
      </header>
      <main>
        <ViewDigit digit={question.digit} onDigitChange={handleChangedDigit} />
        <ViewQuestion question={question.name} />
        <ViewStatus states={question.state} />
        <ViewAnswer
          answer={question.answer}
          onAnswerChange={handleChangedAnswer}
        />
      </main>
    </div>
  );
}

export default NumTyping;
