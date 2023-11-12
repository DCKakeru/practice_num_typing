import React, { useState } from "react";
import CollectSound from "../../util/Quiz-Correct_Answer.mp3";
import WrongSound from "../../util/Quiz-Wrong_Buzzer.mp3";
import ViewHeader from "../modules/Header";
import ViewAnswer from "../modules/Answer";
import ViewQuestion from "../modules/Question";
import ViewStatus from "../modules/Status";
import ViewCorrectAnswerCount from "../modules/CorrectAnswerCount";
import EndModal from "../modules/EndModal";
import { useLocation } from "react-router-dom";

type NumTypingParams = {
  digitValue: string;
  questionNumberValue: string;
};

const NumTyping: React.FC = () => {
  const location = useLocation();
  const state: NumTypingParams = location.state;
  // digitはStartButtonを押す際に1~10の整数に限定
  let digit = 4;
  if (state.digitValue) {
    digit = parseInt(state.digitValue);
  }

  // questionNumberはNaNでないことだけ確認済み
  let questionNumber = 5;
  if (state.questionNumberValue) {
    questionNumber = parseInt(state.questionNumberValue);
  }
  const questionCountEnd = questionNumber;

  const generateQuestion = (digit: number) => {
    return (
      Math.floor(Math.random() * (10 ** digit - 10 ** (digit - 1))) +
      10 ** (digit - 1)
    ).toString();
  };

  const [question, setQuestion] = useState({
    digit: digit,
    name: generateQuestion(digit),
    state: false,
    answer: "",
    correctAnswerCount: 0,
    isEndModalOpen: false,
  });

  const handleChangedAnswer = (targetValue: string) => {
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
          correctAnswerCount: props.correctAnswerCount,
          isEndModalOpen: props.isEndModalOpen,
        };
      });
    }
  };

  const collectAnswer = () => {
    playCollectSound();
    const name = generateQuestion(question.digit);
    if (question.correctAnswerCount > questionCountEnd - 2) {
      setQuestion((props) => {
        return {
          digit: props.digit,
          name: name.toString(),
          state: true,
          answer: "",
          correctAnswerCount: questionCountEnd,
          isEndModalOpen: true,
        };
      });
    } else {
      setQuestion((props) => {
        return {
          digit: props.digit,
          name: name.toString(),
          state: true,
          answer: "",
          correctAnswerCount: props.correctAnswerCount + 1,
          isEndModalOpen: false,
        };
      });
    }
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
        <ViewQuestion question={question.name} />
        <ViewStatus state={question.state} />
        <ViewAnswer
          answer={question.answer}
          onAnswerChange={handleChangedAnswer}
        />
        <ViewCorrectAnswerCount
          count={question.correctAnswerCount.toString()}
        />
        <EndModal isOpen={question.isEndModalOpen} />
      </main>
    </div>
  );
};

export default NumTyping;
