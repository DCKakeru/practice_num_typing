import React, { useState } from "react";
import { useParams } from "react-router";
import CollectSound from "../../util/Quiz-Correct_Answer.mp3";
import WrongSound from "../../util/Quiz-Wrong_Buzzer.mp3";
import ViewHeader from "../modules/Header";
import ViewAnswer from "../modules/Answer";
import ViewQuestion from "../modules/Question";
import ViewStatus from "../modules/Status";
import ViewCorrectAnswerCount from "../modules/CorrectAnswerCount";
import EndButton from "../modules/EndButton";

type NumTypingParams = {
  digit: string;
};

const NumTyping: React.FC = () => {
  const { digit } = useParams<NumTypingParams>();
  // digitがParseできる値かチェックする必要あり

  const generateQuestion = (digit: number) => {
    return (
      Math.floor(Math.random() * (10 ** digit - 10 ** (digit - 1))) +
      10 ** (digit - 1)
    ).toString();
  };

  const [question, setQuestion] = useState({
    digit: Number(digit),
    name: generateQuestion(Number(digit)),
    state: false,
    answer: "",
    correctAnswerCount: 0,
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
        correctAnswerCount: props.correctAnswerCount + 1,
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
        <ViewQuestion question={question.name} />
        <ViewStatus state={question.state} />
        <ViewAnswer
          answer={question.answer}
          onAnswerChange={handleChangedAnswer}
        />
        <ViewCorrectAnswerCount
          count={question.correctAnswerCount.toString()}
        />
        <EndButton />
      </main>
    </div>
  );
};

export default NumTyping;
